import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-github";
// Import other themes here

const Editor = ({ setQuery, value, setValue }) => {
  const [editorTheme, setEditorTheme] = useState("github");
  const [tableName, setTableName] = useState("");

  const onChange = (newValue) => {
    setValue(newValue);
  };

  const onSubmit = () => {
    let res = value.toLowerCase().slice(value.indexOf("from") + "from".length);
    setQuery(res.split(" ")[1]);
  };

  const themes = [
    "github",
    // Add other themes here
  ];

  const tableOptions = [
    "categories",
    "customers",
    "employee_territories",
    "employees",
    "order_details",
    "orders",
    "products",
    "regions",
    "shippers",
    "suppliers",
    "territories",
    // Add other table options here
  ];

  return (
    <div className="flex flex-col md:flex-row items-start justify-center md:justify-start mt-10 mx-20">
      <aside className="w-full md:w-1/3 md:mr-20 mb-8 md:mb-0">
        <div className="mb-5">
          <label htmlFor="select-table">Select Table:</label>
          <select
            id="select-table"
            className="w-full h-8 pl-2 bg-navy border-2 border-gray-400 rounded-lg"
            onChange={(e) => {
              setTableName(e.target.value);
              setValue(`select * from ${e.target.value}`);
            }}
            value={tableName}
          >
            {tableOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-5">
          
        </div>
        <div>
          <button
            className="w-full py-2 bg-black hover:bg-gray-600 text-white font-semibold rounded-lg transition-all"
            onClick={onSubmit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <title id="run">run query</title>
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>{" "}
            Run Query
          </button>
        </div>
      </aside>
      <aside className="w-full md:w-2/3 rounded-lg overflow-hidden border border-black shadow-lg">
  <AceEditor
    mode="mysql"
    theme={editorTheme}
    width="100%"
    onChange={onChange}
    value={value}
    name={'SQL Editor'}
    fontSize={16}
    minLines={12}
    maxLines={12}
    placeholder="Enter your Query here.."
    showGutter={true}
    showPrintMargin={false}
    showLineNumbers={true}
    highlightActiveLine={true}
    editorProps={{ $blockScrolling: true }}
    enableBasicAutocompletion={true}
    enableLiveAutocompletion={true}
    setOptions={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true,
    }}
    className="bg-gradient-to-br from-purple-600 to-red-500 text-black w-full h-full focus:outline-none"
    // Add any other necessary props or customizations
  />
</aside>
    </div>
  );
};

export default Editor;
