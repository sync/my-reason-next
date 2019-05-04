// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

import * as $$Array from "bs-platform/lib/es6/array.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Header from "../components/Header.bs.js";
import * as Json_decode from "@glennsl/bs-json/src/Json_decode.bs.js";

if (!process.browser) {
  ((require('isomorphic-fetch')));
}

function objectId(objectId$1) {
  return /* record */[/* oid */Json_decode.field("$oid", Json_decode.string, objectId$1)];
}

function order(json) {
  return /* record */[/* _id */Json_decode.field("_id", objectId, json)];
}

function orders(orderList) {
  return /* record */[/* orders */Json_decode.field("orders", (function (param) {
                  return Json_decode.array(order, param);
                }), orderList)];
}

var Decode = /* module */[
  /* objectId */objectId,
  /* order */order,
  /* orders */orders
];

function ste(prim) {
  return prim;
}

function Index(Props) {
  var orders = Props.orders;
  return React.createElement("div", undefined, React.createElement(Header.make, { }), React.createElement("p", undefined, "HOME PAGE is here!"), React.createElement("ul", undefined, $$Array.map((function (order) {
                        return React.createElement("li", {
                                    key: order[/* _id */0][/* oid */0]
                                  }, order[/* _id */0][/* oid */0]);
                      }), orders)));
}

function getInitialProps(_ctx) {
  return fetch("http://www.mocky.io/v2/5ccd3dd62e000014151829fb").then((function (prim) {
                    return prim.json();
                  })).then((function (json) {
                  var orderList = orders(json);
                  return Promise.resolve({
                              orders: orderList[/* orders */0]
                            });
                })).catch((function (error) {
                console.log("error: ", error);
                return Promise.resolve({
                            orders: /* array */[]
                          });
              }));
}

var inject = ( (cls, fn) => cls.getInitialProps = fn );

Curry._2(inject, Index, getInitialProps);

var make = Index;

var $$default = Index;

export {
  Decode ,
  ste ,
  make ,
  $$default ,
  $$default as default,
  getInitialProps ,
  inject ,
  
}
/*  Not a pure module */
