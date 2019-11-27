import React, {Fragment} from "react";
import OptionRadio from "./OptionRadio";

const Output = (props) => {
  return (
    <div className={"output"}>
      <span>
      {
        props.optionSelected === "Layout" ? "Select a layout" :
        props.optionSelected === "Typography" ? "Select a font family" :
        props.optionSelected === "Color" ? "Select your color scheme" :
        props.optionSelected === "Menu icon" ? "Change your menu icon" :
        props.optionSelected === "Title" ? "Change your title" :
        props.optionSelected === "Add items" ? "Add menu buttons" :
          "Generate your HTML & CSS Code"
      }
      </span>
      <div className={"content"}>
        <div className={"description"}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan, neque id congue fermentum, sapien nisi vehicula neque, id pharetra orci erat quis velit.</p>
        </div>
        {
          props.optionSelected === 'Layout' ?
            <OptionRadio layout={props.layout} onChange={props.setLayout} options={props.layoutOptions}/> : <Fragment></Fragment>
        }
      </div>
    </div>
  );
};
export default Output

