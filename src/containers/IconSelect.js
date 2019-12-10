import React, {Component, Fragment} from 'react';
import Icons from '../assets/icons';
import uuid from 'uuid'
class IconSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }


  render () {
    return Icons.icons.map(item => {
      return (
        <button key={uuid()} id={uuid()}
                onClick={this.props.onClick} className="menu-icon material-icons mdc-top-app-bar__navigation-icon mdc-icon-button mdc-ripple-upgraded--unbounded mdc-ripple-upgraded">{item.label}</button>
      )
    })
  }
}

export default IconSelect;


