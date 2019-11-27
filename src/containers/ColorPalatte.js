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
      <Fragment>
        <div className={"color-palatte"}>
          {
            this.colorArr.map((color,index) => {
              if (color.shade === '500') {
                return (
                  <button key={index} className={this.props.color.hue === color.hue? 'color active': 'color'} style={{'backgroundColor': color.hex}} onClick={this.props.onClick} data-id={color.hex} data-hue={color.hue} data-shade={color.shade}><span>{color.hue}</span></button>
                )
              }
            })
          }
        </div>
        <div className={"color-palatte sub"}>
          {
            this.colorArr.map((color,index) => {
              if (color.hue === this.props.color.hue) {
                return (
                  <button key={index} className={this.props.bgColor === color.hex && color.hue !== 'black' && color.hue !== 'white'  ? 'color active': 'color'} style={{'backgroundColor': color.hex}} onClick={this.props.onClick} data-id={color.hex} data-hue={color.hue} data-shade={color.shade}>{color.shade}</button>
                )
              }
            })
          }
        </div>
      </Fragment>

    )
  }
}

export default ColorPalette;


