"use strict";

// 原生js 不支持jsx语法
var hello = /*#__PURE__*/React.createElement("p", {
  className: "txt"
}, "Hello,", /*#__PURE__*/React.createElement("span", null, "World!"));
