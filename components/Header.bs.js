// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
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
                }), React.createElement(Link.default, {
                  href: "/about",
                  children: React.createElement("a", {
                        style: styles
                      }, "About")
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
