import React from "react";

export default function Infographic({ type = "table", title, columns = [], rows = [], children }) {
  if (type === "callout") {
    return (
      <div className="infographic-container">
        <div className="callout-box" role="note">
          {title && <h3>{title}</h3>}
          <div className="callout-content">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="infographic-container">
      {title && <h3>{title}</h3>}
      <div className="infographic-table-wrap">
        <table className="infographic-table" aria-label={title || "Infographic table"}>
          <thead>
            <tr>
              {columns.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri}>
                {r.map((cell, ci) => (
                  <td key={ci}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
