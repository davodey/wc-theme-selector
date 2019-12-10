// State held component not using Redux
import React, {Component} from 'react';
import Options from "../components/Options";
import Output from "../components/Output";

class SelectionAndOutput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: 'Add items'
    };
    this.selectOption = this.selectOption.bind(this);
  }

  // COMPONENT INIT
  // componentWillMount is called before the render method is executed.
  // It is important to note that setting the state in this phase will not trigger a re-rendering.
  componentWillMount() {

  }

  // The DOM can be accessed in this method, enabling to define DOM manipulations or data fetching operations.
  // Any DOM interactions should always happen in this phase not inside the render method.
  componentDidMount() {

  }

  // COMPONENT STATE UPDATES
  // shouldComponentUpdate is always called before the render method and enables to define if a re-rendering is needed or can be skipped.
  // Obviously this method is never called on initial rendering. A boolean value must be returned.
  shouldComponentUpdate (nextProps, nextState) {
    if (this.props !== nextProps || this.state !== nextState) {
      return true
    } else {
      return false
    }
  }

  // componentWillUpdate gets called as soon as the the shouldComponentUpdate returned true.
  // Any state changes via this.setState are not allowed as this method should be strictly used
  // to prepare for an upcoming update not trigger an update itself.


  // componentDidUpdate is called after the render method. Similar to the componentDidMount,
  // this method can be used to perform DOM operations after the data has been updated.
  componentDidUpdate (prevProps, prevState) {

  }

  // UPDATE PROPS
  // componentWillReceiveProps is only called when the props have changed and when this is not an initial rendering.
  // componentWillReceiveProps enables to update the state depending on the existing and upcoming props, without triggering another rendering.
  // One interesting thing to remember here is that there is no equivalent method for the state as state changes should never trigger any props changes.
  componentWillReceiveProps () {

  }

  selectOption (event) {
    this.setState({optionSelected: event.nativeEvent.target.getAttribute('data-text')})
  }

  render () {
    console.log(this.state.optionSelected)
    return (
      <div className={"selection-and-output"}>
        <Options
          options={this.props.options}
          onClick={this.selectOption}
          optionSelected={this.state.optionSelected}
        />
        <Output
          optionSelected={this.state.optionSelected}
          layoutOptions={this.props.layoutOptions}
          setLayout={this.props.setLayout}
          layout={this.props.layout}
          setFont={this.props.setFont}
          font={this.props.font}
          setBgColor={this.props.setBgColor}
          bgColor={this.props.color.hex}
          color={this.props.color}
          setMenuIcon={this.props.setMenuIcon}
          setTitleText={this.props.setTitleText}
          addItems={this.props.addItems}
          itemsAdded={this.props.itemsAdded}
        />
      </div>
    )
  }
}

export default SelectionAndOutput;

