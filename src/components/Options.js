import React from "react";

const Options = (props) => {
  return (
    <div className={"selection"}>
      <span>Options:</span>
      <nav>
        <ul>
          {
            props.options.map((option, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={props.onClick}
                    data-text={option}
                    id={option.
                    replace(/\s/g, '')}
                    className={props.optionSelected === option ? "active" : ""}
                  >{option}
                  </button>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </div>
  );
};
export default Options

