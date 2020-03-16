import React from 'react';
import './Button.css';

const isOperator = val => {
    // Return true if one of the following: is a number, is a ".", is a ","
    return !isNaN(val) || val === "." || val === "=";
}

export const Button = props =>
    // If isOperator returns true, do nothing. If false, then add class "operator"
    <div className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
    > 
    {props.children}
    </div>