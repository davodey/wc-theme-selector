import React, {Component, Fragment} from 'react';
import colorData from '../assets/colors';
import uuid from 'uuid';

class ColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.colorArr = [];
  }

  componentWillMount() {
    Object.keys(colorData).forEach(colorKey => {
      Object.keys(colorData[colorKey]).forEach(shadeKey => {
        const obj = {}
        obj.hue = colorKey;
        obj.shade = shadeKey;
        obj.hex = colorData[colorKey][shadeKey];
        this.colorArr.push(obj);
      })
    });
  }


  render () {
    return (
      <div className={"color-palatte"}>
        {
          this.colorArr.map(color => {
            if (color.shade === '500') {
              return (
                <button key={uuid()} className="color" style={{'backgroundColor': color.hex}} onClick={this.props.setBgColor} data-id={color.hex}></button>
              )
            } else {
              return (
                <Fragment></Fragment>
              )
            }
          })
        }
      </div>
    )
  }
}

export default ColorPalette;


