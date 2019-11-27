import React, {Fragment} from "react";

const OptionRadio = (props) => {
  return (

      <fieldset>
        <div className={"control-group"}>
          {
            props.options.map((item,index) => {
              return (
                <Fragment key={index}>
                  <label className="control control-radio">
                    {item}
                    <input onChange={props.onChange} id={item} type="radio" name="radio" checked={props.layout === item.toLowerCase()}/>
                    <div className="control_indicator"></div>
                  </label>
                </Fragment>
              )
            })
          }
        </div>
      </fieldset>
  );
};
export default OptionRadio

