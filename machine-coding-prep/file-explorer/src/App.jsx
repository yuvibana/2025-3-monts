import React, { useState, useCallback } from "react";
import data from "./data.json";

const FolderIcon = ({ open, toggle, nodeName }) => <span onClick={() => toggle(nodeName)}>{open ? "-" : "+"}</span>;

const Node = ({ NodeList, expanded, toggle, handleAddFolder }) => {

  return (
    <div className="container">
      {NodeList.map((node, i) => (
        <div
          key={i}
        >
          <div
            style={{ display: "flex", gap: "10px", cursor: "pointer" }}
          >
            {node.isFolder && <FolderIcon open={expanded[node.name]} toggle={toggle} nodeName={node.name} />}
            <span className="listname">{node.name}</span>
            {
              node.isFolder && <button
                onClick={() => handleAddFolder(node.id)}
              >
                <img width={20} src="https://cdn-icons-png.flaticon.com/128/11366/11366824.png" alt="" />
              </button>
            }
          </div>

          {expanded[node.name] && node.children && (
            <div className="item-card" style={{ marginLeft: 20 }}>
              <Node NodeList={node.children} expanded={expanded} toggle={toggle} handleAddFolder={handleAddFolder} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const [folderData, setFolderData] = useState(data)
  const [expanded, setExpanded] = useState({});

  const handleAddFolder = (parentId) => {
    const name = prompt();
    if (name?.trim() == "") return;
    const updatedTree = (list) => {
      console.log(list);

      return list?.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              { id: Math.random(), name: name, isFolder: true, children: [] }
            ]
          }
        }
        if (node.children) {
          return { ...node, children: updatedTree(node.children) }
        }
        return node;
      })
    }
    setFolderData((prev) => updatedTree(prev))
  }

  const toggle = useCallback((key) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);
  return (
    <div>
      <Node NodeList={folderData} expanded={expanded} toggle={toggle} handleAddFolder={handleAddFolder} />
    </div>
  );
}
