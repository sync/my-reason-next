[@bs.val] external browser: bool = "process.browser";

if (!browser) {
  %raw
  "require('isomorphic-fetch')";
};

type objectId = {oid: string};

type order = {_id: objectId};

type orderList = {orders: array(order)};

module Decode = {
  let objectId = (objectId): objectId =>
    Json.Decode.{oid: objectId |> field("$oid", string)};

  let order = (json): order => {
    _id: Json.Decode.field("_id", objectId, json),
  };

  let orders = (orderList): orderList =>
    Json.Decode.{orders: orderList |> field("orders", array(order))};
};

let ste = ReasonReact.string;

[@react.component]
let make = (~orders) => {
  <div>
    <Header />
    <p> {ReasonReact.string("HOME PAGE is here!")} </p>
    <ul>
      {orders
       |> Array.map(order =>
            <li key={order._id.oid}> {order._id.oid |> ste} </li>
          )
       |> ReasonReact.array}
    </ul>
  </div>;
};

let default = make;

let getInitialProps = _ctx => {
  Js.Promise.(
    Fetch.fetch("http://www.mocky.io/v2/5ccd3dd62e000014151829fb")
    |> then_(Fetch.Response.json)
    |> then_(json =>
         json
         |> Decode.orders
         |> (
           orderList => {
             {"orders": orderList.orders};
           }
         )
         |> resolve
       )
    |> catch(error => {
         Js.log2("error: ", error);
         resolve({"orders": [||]});
       })
  );
};

type ctx = {nothing: string};

let inject:
  (
    Js.t('a) => React.element,
    {. "req": Js.Nullable.t(Js.t('a))} => Js.Promise.t(Js.t('a))
  ) =>
  unit = [%bs.raw
  {| (cls, fn) => cls.getInitialProps = fn |}
];

inject(default, getInitialProps);
