// State held component not using Redux
import React, {Component} from 'react';
import '../App.css';
import YourComponent from "../components/YourComponent";
import SelectionAndOutput from "./SelectionAndOutput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorType: "primary",
      menuIcon: "menu",
      primaryColorData: {},
      secondaryColorData: {},
      showMenuIcon: true,
      input: '',
      buttonsBuilt: [],
      activeFontFamily: "Open Sans",
      layout: 'standard'
    };
    this.config = {
      options: [
        'Layout', 'Typography', 'Color', 'Menu icon', 'Title', 'Add items', 'Generate code'
      ],
      layout: [
        'Standard', 'Dense', 'Prominent', 'Collapsed', 'Short', 'Fixed'
      ]
    }
    this.setLayout = this.setLayout.bind(this);
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

  setLayout (event) {
    this.setState({layout: event.target.id.toLocaleLowerCase()})
  }

  render () {
    return (
      <div className="theme-builder">
        <div className={"component-container"}>
          <YourComponent
            font={this.state.activeFontFamily}
            buttonsBuilt={this.state.buttonsBuilt}
            title={"App Bar"}
            showMenuIcon={this.state.showMenuIcon}
            bgColor={this.state.primaryColorData.selectedHex}
            fontColor={this.state.secondaryColorData.selectedHex}
            menuIcon={this.state.menuIcon}
            layout={this.state.layout}
          >
          </YourComponent>
        </div>
        <SelectionAndOutput
          options={this.config.options}
          layoutOptions={this.config.layout}
          setLayout={this.setLayout}
          layout={this.state.layout}
        />
      </div>
    )
  }
}

export default App;

