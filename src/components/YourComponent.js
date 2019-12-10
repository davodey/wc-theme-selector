import React from "react";

const YourComponent = (props) => {
  return (
    <div>
      <div id={"css"}>
        <style dangerouslySetInnerHTML={{__html: `flayvor-top-app-bar {
            background: ${props.color.hex};
            font-family:"${props.font}";
            color:${props.color.fontColor};
        }`}} />
      </div>
      <div id={"markup"} className={"apply-font"}>
        {props.showMenuIcon === true ?
          <flayvor-top-app-bar
            title={props.titleText}
            position="static"
            menuicon={props.menuIcon}
            type={props.layout}
          >

            {
              props.buttonsBuilt.length > 0 ?
                props.buttonsBuilt.map((button,index) => {
                  return (
                    <button key={index}
                            slot="right"
                            data-index={index}
                            className="material-icons mdc-icon-button mdc-top-app-bar__action-item">
                      {button}
                    </button>
                  )
                }) : <div></div>
            }
          </flayvor-top-app-bar> :
          <flayvor-top-app-bar
            title={props.title}
            position="static"
            type={props.layout}
            hideMenu>
            {
              props.buttonsBuilt.length > 0 ?
                props.buttonsBuilt.map((button,index) => {
                  return (
                    <button key={index}
                            slot="right"
                            data-index={index}
                            className="material-icons mdc-icon-button mdc-top-app-bar__action-item">
                      {button}
                    </button>
                  )
                }) : <div></div>
            }
          </flayvor-top-app-bar>
        }
      </div>
    </div>
  );
};
export default YourComponent
