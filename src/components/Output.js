import React, {Fragment} from "react";
import OptionRadio from "./OptionRadio";
import FontPicker from "font-picker-react";
import ColorPalette from "../containers/ColorPalatte";

const Output = (props) => {
  return (
    <div className={"output"}>
      <span>
      {
        props.optionSelected === "Layout" ? "Select a layout" :
        props.optionSelected === "Typography" ? "Select a font family" :
        props.optionSelected === "Bg Color" ? "Select your background color" :
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
            <OptionRadio layout={props.layout} onChange={props.setLayout} options={props.layoutOptions}/> :
          props.optionSelected === 'Typography' ?
            <FontPicker activeFontFamily={props.font} onChange={props.setFont} apiKey="AIzaSyAMJM5phI4GbCGR8Dcu8rIlxFxOermsVDM"/> :
          props.optionSelected === 'Bg Color' ?
            <ColorPalette color={props.color} bgColor={props.bgColor} onClick={props.setBgColor}/> :
          props.optionSelected === 'Font Color' ?
            <ColorPalette color={props.fontColor} bgColor={props.fontColor.hex} onClick={props.setFontColor}/> :
            <Fragment></Fragment>
        }
      </div>
    </div>
  );
};
export default Output

