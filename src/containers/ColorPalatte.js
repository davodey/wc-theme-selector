import React, {Component, Fragment} from 'react';
import colorData from '../assets/colors';

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
        obj.fontColor = 'black';
        this.colorArr.push(obj);
      })
    });
  }

  componentDidMount() {
    this.colorArr.map(color => {
      if (color.hue === 'black') {
        color.fontColor = 'white'
      }
      if (color.hue === 'purple' || color.hue === 'deeppurple' || color.hue === 'indigo' || color.hue === 'brown') {
        if (color.shade === '300') {
          color.fontColor = 'white'
        }
      }
      if (parseInt(color.shade) >= 400 && parseInt(color.shade) <= 900) {
        if (color.hue === 'red' || color.hue === 'pink'  || color.hue === 'purple' || color.hue === 'deeppurple' || color.hue === 'indigo' || color.hue === 'brown' || color.hue === 'bluegrey') {
          color.fontColor = 'white'
        }
      }
      if (parseInt(color.shade) >= 500 && parseInt(color.shade) <= 900) {
        if (color.hue === 'teal' || color.hue === 'green') {
          color.fontColor = 'white'
        }
      }
      if (parseInt(color.shade) >= 600 && parseInt(color.shade) <= 900) {
        if (color.hue === 'blue' || color.hue === 'green' || color.hue === 'deeporange' || color.hue === 'grey') {
          color.fontColor = 'white'
        }
      }
      if (color.shade === 'a200' || color.shade ==='a400' || color.shade === 'a700') {
        if (color.hue === 'red' || color.hue === 'pink' || color.hue === 'purple' || color.hue === 'deeppurple' || color.hue === 'indigo' || color.hue === 'blue') {
          color.fontColor = 'white'
        }
      }
      if (color.shade === 'a100' || color.shade === 'a200' || color.shade ==='a400' || color.shade === 'a700') {
        color.alpha = true
      } else {
        color.alpha = false
      }
      if (parseInt(color.shade) >= 700 && parseInt(color.shade) <= 900) {
        if (color.hue === 'lightblue' || color.hue === 'cyan') {
          color.fontColor = 'white';
        }
      }
      if (color.shade === 'a700' && color.hue === 'lightblue') {
        color.fontColor = 'white'
      }
      if (parseInt(color.shade) >= 800 && parseInt(color.shade) <= 900) {
        if (color.hue === 'lightgreen') {
          color.fontColor = 'white';
        }
      }
      if (parseInt(color.shade) === 900) {
        if (color.hue === 'lime' || color.hue === 'orange') {
          color.fontColor = 'white';
        }
      }
      if (color.shade ==='a400' || color.shade === 'a700') {
        if (color.hue === 'red' || color.hue === 'deeporange') {
          color.fontColor = 'white'
        }
      }
    })
  }

  render () {
    return (
      <Fragment>
        <div className={"color-palatte"}>
          {
            this.colorArr.map((color,index) => {
              if (color.shade === '500') {
                return (
                  <button key={index} className={this.props.color.hue === color.hue? 'color active ' + color.fontColor : 'color ' + color.fontColor} style={{'backgroundColor': color.hex}} onClick={this.props.onClick} data-id={color.hex} data-hue={color.hue} data-shade={color.shade} data-fontcolor={color.fontColor} data-alpha={color.alpha}><span>{color.hue}</span></button>
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
                  <button key={index} className={this.props.bgColor === color.hex && color.hue !== 'black' && color.hue !== 'white'  ? 'color active ' + color.fontColor: 'color ' + color.fontColor} style={{'backgroundColor': color.hex}} onClick={this.props.onClick} data-id={color.hex} data-hue={color.hue} data-shade={color.shade}  data-fontcolor={color.fontColor}  data-alpha={color.alpha}>{color.shade}</button>
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


