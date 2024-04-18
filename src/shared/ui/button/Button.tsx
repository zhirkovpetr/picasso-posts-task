import React from "react";

import './styles.css';

interface IButton {
  onClick: () => void;
  text: string;
}

export const Button: React.FC<IButton> = ({onClick, text}) => {
  return (
    <button className={'button-style'} onClick={onClick}>{text}</button>
  )
}
