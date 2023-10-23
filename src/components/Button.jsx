import React from 'react'

function Button ({size, variant="default", text, disabled}) {
    // states of button
  
    const baseStyles = "py-2 px-6 w-full font-bold text-center flex justify-center items-center shadow-md backdrop-blur-xl rounded-full"; 
    // font-bold, padding etc
  
    const sizeStyle = {
      sm: "text-sm h-5",
      md: "text-md h-7",
      lg: "text-lg h-9",
      xl: "h-11",
    } // sm, md, lg
  
    const variantStyle = {
      primary: "bg-twitter-blue hover:bg-twitter-blue-hover",
      default: "bg-neutral-50 hover:bg-neutral-200 text-black disabled:bg-neutral-50",
      outline: "bg-inherit border border-sign-up-border text-twitter-blue",
    }; // bg-blue-500
  
    const disabledStyle = "disabled:opacity-50 disabled:cursor-not-allowed"; // disabled styles
  
    const classes = `${baseStyles} ${sizeStyle[size] ?? ""} ${variantStyle[variant]} ${disabledStyle}`; 
  
    return (
        <button className={classes} disabled={disabled}>
            {text}
        </button>
    );
}

export default Button
