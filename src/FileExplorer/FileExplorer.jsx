import React from "react";
import { useState } from "react";
import "./fileexplorer.css";

const initialData = [
  {
    id: 1,
    name: "public",
    isFolder: true,
    children: [{ id: 2, name: "index.html", isFolder: false }],
  },
  {
    id: 3,
    name: "src",
    isFolder: true,
    children: [
      { id: 4, name: "App.js", isFolder: false },
      { id: 5, name: "index.js", isFolder: false },
    ],
  },
  { id: 6, name: "package.json", isFolder: false },
];
const ListData = ({ data, setData }) => {
  const [isExpanded, setIsExpanded] = useState({});

  const handleExpanded = (fileId) => {
    let prevState = isExpanded[fileId];
    setIsExpanded((prev) => {
      return { ...prev, [fileId]: !prevState };
    });
  };

  return (
    <>
      {data.map((file, index) => {
        return (
          <div className="container">
            <div key={index}>
              {file.isFolder && (
                <span onClick={() => handleExpanded(file.id)} className='expand-icon'>
                  {isExpanded[file.id] ? "-" : "+"}
                </span>
              )}
              {file.name}
            </div>
            {isExpanded[file.id] && file.children && (
              <ListData data={file.children} setData={setData} />
            )}
          </div>
        );
      })}
    </>
  );
};

const FileExplorer = () => {
  const [data, setData] = useState(initialData);

  return (
    <>
      <div>FileExplorer</div>
      <ListData data={data} setData={setData} />
    </>
  );
};

export default FileExplorer;
