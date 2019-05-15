import React from "react";
import "./style.css";

// This component exports the List children props in an unordered list
export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);
// This component exports the ListItem children props in an ordered list
export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
