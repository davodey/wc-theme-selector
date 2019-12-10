import React, {Component, Fragment} from 'react';
import uuid from 'uuid'
import IconSelect from "./IconSelect";

class AddButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  this.selected = [];
  this.onClick = this.onClick.bind(this);
  }

  onClick (event) {
    console.log(event.target.innerHTML)
    if (this.selected.length <=3)
    this.selected.push(event.target.innerHTML)
    console.log(this.selected)
  }

  render () {
    return (
      <div className={"add-buttons-container"}>
        <div className={"drag-target-container"}>
          <div className={"target"}></div>
          <div className={"target"}></div>
          <div className={"target"}></div>
        </div>
        <div className={"scroll-container"}>
          <div className={"icon-grid"}>
            <IconSelect draggable={true} onClick={this.onClick}/>
          </div>
        </div>
      </div>
    )
  }
}

export default AddButtons;



