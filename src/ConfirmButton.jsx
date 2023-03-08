import React from 'react';
import "./ConfirmButton.css"

export default function ConfirmButton({ onClick, valid, selected, revealed, idx }) {

  const buttonStyle = {
    backgroundColor: revealed && valid ? "green" : revealed && !valid ? "red" : selected ? "orange" : "grey"
  }

  return (
    <button onClick={() => onClick(idx)} style={buttonStyle}>
      {revealed && valid ? "\u2713" : revealed && !valid ? "X" : "?"}
    </button>
  )
}