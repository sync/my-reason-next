// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Link = require("next/link");

var styles = {
  marginRight: "10px"
};

function Header(Props) {
  return React.createElement("div", undefined, React.createElement(Link.default, {
                  href: "/",
                  children: React.createElement("a", {
                        style: styles
                      }, "Home")
                }));
}

var make = Header;

var $$default = Header;

exports.styles = styles;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* react Not a pure module */
