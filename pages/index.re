[@react.component]
let make = (~onServer) => {
  <div>
    <Header />
    <p> {ReasonReact.string("HOME PAGE is here!")} </p>
    <p> {ReasonReact.string("onServer: " ++ string_of_bool(onServer))} </p>
    <Counter />
  </div>;
};

let default = make;

let getInitialProps = context => {
  let onServer =
    switch (Js.Nullable.toOption(context##req)) {
    | None => false
    | Some(_) => true
    };
  {"onServer": onServer};
};

let inject:
  (
    Js.t('a) => React.element,
    {. "req": Js.Nullable.t(Js.t('a))} => Js.t('a)
  ) =>
  unit = [%bs.raw
  {| (cls, fn) => cls.getInitialProps = fn |}
];

inject(default, getInitialProps);
