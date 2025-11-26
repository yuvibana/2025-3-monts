import React, { useState, useCallback } from "react";
import data from "./data.json";

const FolderIcon = ({ open }) => <span>{open ? "-" : "+"}</span>;

const Node = ({ NodeList, expanded, toggle }) => {

  return (
    <div className="container">
      {NodeList.map((node, i) => (
        <div
          key={i}
        >
          <div
            onClick={() => toggle(node.name)}
            style={{ display: "flex", gap: "10px", cursor: "pointer" }}
          >
            {node.isfolder && <FolderIcon open={expanded[node.name]} />}
            <span className="listname">{node.name}</span>
          </div>

          {expanded[node.name] && node.children && (
            <div className="item-card" style={{ marginLeft: 20 }}>
              <Node NodeList={node.children} expanded={expanded} toggle={toggle} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const [expanded, setExpanded] = useState({});

  const toggle = useCallback((key) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);
  return (
    <div>
      <Node NodeList={data} expanded={expanded} toggle={toggle} />
    </div>
  );
}
