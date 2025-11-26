import React, { useState, useCallback } from "react";
import data from "./data.json";

const FolderIcon = ({ open }) => <span>{open ? "-" : "+"}</span>;

const Node = ({ node, expanded, toggle }) => {
  const isOpen = expanded[node.name];

  return (
    <div>
      <div
        onClick={() => toggle(node.name)}
        style={{ display: "flex", gap: "10px", cursor: "pointer" }}
      >
        {node.isfolder && <FolderIcon open={isOpen} />}
        <span className="listname">{node.name}</span>
      </div>

      {isOpen && node.children && (
        <div className="item-card" style={{ marginLeft: 20 }}>
          {node.children.map((child, i) => (
            <Node key={i} node={child} expanded={expanded} toggle={toggle} />
          ))}
        </div>
      )}
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
      {data.map((node, i) => (
        <Node key={i} node={node} expanded={expanded} toggle={toggle} />
      ))}
    </div>
  );
}
