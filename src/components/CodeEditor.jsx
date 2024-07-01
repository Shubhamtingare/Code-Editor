import React, { useState } from "react";
import Prism from "prismjs";
import "./CodeEditor.css";
import "prismjs/themes/prism.css";

const CodeEditor = () => {
  const [code, setCode] = useState("");

  const handleChange = (event) => {
    const newCode = event.target.value;
    setCode(newCode);
  };

  return (
    <div className="code-editor">
      <textarea
        value={code}
        onChange={handleChange}
        className="code-input"
        spellCheck="false"
      />
      <pre className="code-highlighted">
        <code
          className="language-js"
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(code, Prism.languages.js, "javascript"),
          }}
        ></code>
      </pre>
    </div>
  );
};

export default CodeEditor;
