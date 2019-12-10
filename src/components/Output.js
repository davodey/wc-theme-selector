import React, {Fragment} from "react";
import OptionRadio from "./OptionRadio";
import FontPicker from "font-picker-react";
import ColorPalette from "../containers/ColorPalatte";
import IconSelect from "../containers/IconSelect";
import uuid from "uuid";
import AddButtons from "../containers/AddButtons";

const Output = (props) => {
  return (
    <div className={"output"}>
      <span>
      {
        props.optionSelected === "Layout" ? "Select a layout" :
        props.optionSelected === "Typography" ? "Select a font family" :
        props.optionSelected === "Color" ? "Select your background color" :
        props.optionSelected === "Menu icon" ? "Change your menu icon" :
        props.optionSelected === "Title" ? "Change your title" :
        props.optionSelected === "Add items" ? "Add menu buttons" :
          "Generate your HTML & CSS Code"
      }
      </span>
      <div className={props.optionSelected === "Menu icon" || props.optionSelected === "Add items" ? "content icon" : "content" }>
        <div className={"description"}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan, neque id congue fermentum, sapien nisi vehicula neque, id pharetra orci erat quis velit.</p>
        </div>
        {
          props.optionSelected === 'Layout' ?
            <OptionRadio layout={props.layout} onChange={props.setLayout} options={props.layoutOptions}/> :
          props.optionSelected === 'Typography' ?
            <FontPicker activeFontFamily={props.font} onChange={props.setFont} apiKey="AIzaSyAMJM5phI4GbCGR8Dcu8rIlxFxOermsVDM"/> :
          props.optionSelected === 'Color' ?
            <ColorPalette color={props.color} bgColor={props.bgColor} onClick={props.setBgColor}/> :
          props.optionSelected === 'Menu icon' ?
            <div className={"scroll-container"}>
            <div className={"icon-grid"}>
              <IconSelect onClick={props.setMenuIcon} draggable={false}/>
            </div> </div>:
            props.optionSelected === 'Title' ?
              <div className={"basic-input"}>
                <label>Label</label>
                <input onInput={props.setTitleText} type={"text"}/>
              </div> :
              props.optionSelected === 'Add items' ?
              <AddButtons onClick={props.addItems} itemsAdded={props.itemsAdded}/>
                :
            <Fragment></Fragment>
        }
      </div>
    </div>
  );
};
export default Output

