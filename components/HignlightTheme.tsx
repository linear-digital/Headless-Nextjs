"use client";

import { useEffect } from "react";

const highlightJsMonokaiTheme = `
  .hljs{display:block;overflow-x:auto;padding:.5em;background:#23241f}
  .hljs,.hljs-subst,.hljs-tag{color:#f8f8f2}
  .hljs-emphasis,.hljs-strong{color:#a8a8a2}
  .hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ae81ff}
  .hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#a6e22e}
  .hljs-strong{font-weight:700}
  .hljs-emphasis{font-style:italic}
  .hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#f92672}
  .hljs-attribute,.hljs-symbol{color:#66d9ef}
  .hljs-class .hljs-title,.hljs-params{color:#f8f8f2}
  .hljs-addition,.hljs-built_in,.hljs-builtin-name,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#e6db74}
  .hljs-comment,.hljs-deletion,.hljs-meta{color:#75715e}
`;

const HighlightTheme = () => {
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = highlightJsMonokaiTheme;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return null;
};

export default HighlightTheme;