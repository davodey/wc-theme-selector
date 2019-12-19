import React, {Component, Fragment} from 'react';
import uuid from 'uuid'
import IconSelect from "./IconSelect";
import _ from 'lodash';
class AddButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  this.drop = this.drop.bind(this);
    this.over = this.over.bind(this);
  }


  over(event) {
    event.preventDefault();
  }

  drop(event) {
    const data = this.props.itemsAdded,
      dragIndex = event.dataTransfer.getData("text"),
      dragText = this.props.itemsAdded[dragIndex],
      dropIndex = event.target.getAttribute('data-index'),
      dropText = this.props.itemsAdded[dropIndex];

    const remove = data.splice(dropIndex, 1, dragText),
      add = data.splice(dragIndex, 1, dropText)
    this.props.swapItems(event, data)
  }

  start(event) {
    const index = event.target.getAttribute('data-index');
    event.dataTransfer.setData("text/plain", index)
  }

  render () {
    if (this.props.itemsAdded.length === 0 ) {
      return (
        <div className={"add-buttons-container"}>
          <div className={"drag-target-container"}>
            <div className={"target"}></div>
            <div className={"target"}></div>
            <div className={"target"}></div>
          </div>
          <div className={"scroll-container"}>
            <div className={"icon-grid"}>
              <IconSelect draggable={true} onClick={this.props.onClick}/>
            </div>
          </div>
        </div>
      )
    } else if (this.props.itemsAdded.length === 1) {
      return (
        <div className={"add-buttons-container"}>
          <div className={"drag-target-container"}>
            {
              this.props.itemsAdded.map((item,index) => {
                return (
                  <Fragment key={uuid()}>
                    <div data-index={index} className={"target"} key={uuid()}>
                      <i className="material-icons">
                        {item}
                      </i>
                    </div>
                    <div data-index={index} className={"target"}></div>
                    <div data-index={index} className={"target"}></div>
                  </Fragment>
                )
              })
            }
          </div>
          <div className={"scroll-container"}>
            <div className={"icon-grid"}>
              <IconSelect draggable={true} onClick={this.props.onClick}/>
            </div>
          </div>
        </div>
      )
    } else if (this.props.itemsAdded.length === 2) {
      return (
        <div className={"add-buttons-container"}>
          <div className={"drag-target-container"}>
            {
              this.props.itemsAdded.map((item,index) => {
                return (
                  <Fragment key={uuid()}>
                    <div data-index={index} className={"target"} key={uuid()} draggable={true}>
                      <i className="material-icons">
                        {item}
                      </i>
                    </div>

                  </Fragment>
                )
              })
            }
            <div className={"target"}></div>
          </div>
          <div className={"scroll-container"}>
            <div className={"icon-grid"}>
              <IconSelect onClick={this.props.onClick}/>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className={"add-buttons-container"}>
          <div className={"drag-target-container"}>
            {
              this.props.itemsAdded.map((item,index) => {
                return (
                  <div data-index={index} onDrop={this.drop} onDragOver={this.over} onDragStart={this.start} className={"target"} key={uuid()} draggable={true}>
                    <i className="material-icons">
                      {item}
                    </i>
                  </div>
                )
              })
            }
          </div>
          <div className={"scroll-container"}>
            <div className={"icon-grid"}>
              <IconSelect onClick={this.props.onClick}/>
            </div>
          </div>
        </div>
        )
    }
  }
}

export default AddButtons;



