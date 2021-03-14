import React from "react";
import css from "./CustomFormElements.module.css";

// export const Textarea = ({input, meta, children, render, className, ...props}) => {
//   const hasError = meta.touched && meta.error;
//
//   return (
//       <>
//         <textarea className={`${className} ${css.element}${hasError ? " " + css.error : ""}`} {...input} {...props} />
//         {hasError && <span className={css.errorMessage}>{meta.error}</span>}
//       </>
//   )
// }



// export const Input = ({input, meta, children, render, className, ...props}) => {
//   const hasError = meta.touched && meta.error;
//
//   return (
//       <>
//         <input className={`${className} ${css.element}${hasError ? " " + css.error : ""}`} {...input} {...props} />
//         {hasError && <span className={css.errorMessage}>{meta.error}</span>}
//       </>
//   )
// }



const createCustomElement = (tagName) => {

  const CustomElement =  ({input, meta, children, render, className, ...props}) => {
    const hasError = meta.touched && meta.error;
    let classNameForElement = `${className} ${css.element}${hasError ? " " + css.error : ""}`;
    return (
        <>
          {React.createElement(tagName, {className:classNameForElement, ...input, ...props})}
          {hasError && <span className={css.errorMessage}>{meta.error}</span>}
        </>
    )
  }

  return CustomElement;
}

export const Input = createCustomElement("input");
export const Textarea = createCustomElement("textarea");