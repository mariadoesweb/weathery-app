import React from "react";

import content from "./README.md";
import showdown from "showdown";

import "./styles.css";

const createMarkup = () => {
  const converter = new showdown.Converter();
  return { __html: converter.makeHtml(content) };
};

const Instructions = () => (
  <div className="markdown-body" dangerouslySetInnerHTML={createMarkup()} />
);

export default Instructions;
