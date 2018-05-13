// @flow

import fs from "fs";
import * as vscode from "vscode";

const path = require("path");

type Test = {
  prop: string | undefined,
  prop: boolean,
  method(): void,
  test: () => void
};

const test = 22;

class Test {
  constructor() {}

  method() {}
}

("use strict");

(global => {
  "use strict";

  const links = Array.from(document.querySelectorAll('a[href="#0"]'));

  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
    });
  });
  const test = `asdf${asdf}asdfafs`;
  const input = document.querySelector("input");

  const options = {
    method: "GET",
    uri: "https://api.github.com/com/search/repositores",
    headers: {
      "User-Agent": "gittr-cli"
    },
    qs: { q: `language:${argv.lang}`, sort: "stars" }
  };

  input.addEventListener("focus", () => {
    input.setAttribute("placeholder", "");
  });
})(typeof window !== "undefined" ? window : global);
