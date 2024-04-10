import "./App.css";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function App() {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(
      '<p><strong>2. Grant of License:</strong><div style="margin-bottom: 10px">2.1. Scope of License: The grant of license shall ext;end only to the provision of services specified in this agreement.</div><li>2.2. Non-Exclusive License: This is an exclusive license that grants the recipient the right to use, copy and distribute the licensed material for a specific period.</li><li>2.3. Warranties and Representations: The <span style="background-color: yellow;">[grantor warrants]</span> and represents that it has the necessary rights and permissions to grant the license.</li></p>'
    );
    return () => {};
  }, []);

  return (
    <div className="App">
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
}

export default App;
