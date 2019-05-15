// Importing React from the react library.  This is needed because what appears to be html code is actually jsx and failure to import react would cause the a fail because 'React' must be in scope when using JSX
import React from "react";

// Exports the functional component Container and the props fluid and children (children is used to display whatever you include between the opening and closing tags when invoking the component.)
export function Container({ fluid, children }) {
  // if container fluid is true, then return fluid (no match items) in descending order, else return empty string
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// Exports the functional component Row and the props fluid and children
export function Row({ fluid, children }) {

  // Tenary operator, if fluid is true then it will append -fluid, else return an empty string
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// Exports the functional component Col and the props size and children
export function Col({ size, children }) {
  // returns 
  return (
    <div
      // splits on a space, then for each element in array it maps to "col-" plus the size and join them
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
