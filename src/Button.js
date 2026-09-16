import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      style={{
        backgroundColor: "#2563eb",
        color: "#fff",
        padding: "10px 16px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
