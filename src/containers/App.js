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
      font: "Open Sans",
      layout: 'standard',
      color: {
        hex: "#f44336",
        hue: "red",
        shade: "500",
        fontColor: "white"
      },
      menuIcon: "access_time",
      titleText: "This is your title",
      itemsAdded: []
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
    this.setFont = this.setFont.bind(this);
    this.setBgColor = this.setBgColor.bind(this);
    this.setMenuIcon = this.setMenuIcon.bind(this);
    this.setTitleText = this.setTitleText.bind(this);
    this.addItems = this.addItems.bind(this);
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
  // shouldComponentUpdate (nextProps, nextState) {
  //   if (this.props !== nextProps || this.state !== nextState) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  // componentWillUpdate gets called as soon as the the shouldComponentUpdate returned true.
  // Any state changes via this.setState are not allowed as this method should be strictly used
  // to prepare for an upcoming update not trigger an update itself.


  // componentDidUpdate is called after the render method. Similar to the componentDidMount,
  // this method can be used to perform DOM operations after the data has been updated.
  componentDidUpdate (prevProps, prevState) {
    const addItemsSelected = document.querySelector('.drag-target-container');
    console.log(addItemsSelected)
  }

  // UPDATE PROPS
  // componentWillReceiveProps is only called when the props have changed and when this is not an initial rendering.
  // componentWillReceiveProps enables to update the state depending on the existing and upcoming props, without triggering another rendering.
  // One interesting thing to remember here is that there is no equivalent method for the state as state changes should never trigger any props changes.
  componentWillReceiveProps () {

  }
  setMenuIcon (event) {
    this.setState({menuIcon: event.nativeEvent.target.innerHTML})
  }
  setBgColor (event) {
    console.log(event.target.getAttribute('data-fontcolor'))
    this.setState({color:{hex: event.target.getAttribute('data-id'), shade: event.target.getAttribute('data-shade'), hue: event.target.getAttribute('data-hue'), fontColor: event.target.getAttribute('data-fontcolor')}})
  }

  setLayout (event) {
    this.setState({layout: event.target.id.toLocaleLowerCase()})
  }

  setFont (event) {
    this.setState({font: event.family})
  }

  setTitleText (event) {
    this.setState({titleText: event.nativeEvent.target.value})
  }

  addItems (event) {
    let arr = this.state.itemsAdded;
    if (this.state.itemsAdded.length < 3) {
      arr.push(event.target.innerHTML)
      this.setState({itemsAdded: arr})
    } else {
      return false
    }

  }

  render () {
    console.log(this.state.itemsAdded)
    return (
      <div className="theme-builder">
        <div className={"component-container"}>
          <YourComponent
            buttonsBuilt={this.state.buttonsBuilt}
            title={"App Bar"}
            showMenuIcon={this.state.showMenuIcon}
            bgColor={this.state.primaryColorData.selectedHex}
            menuIcon={this.state.menuIcon}
            layout={this.state.layout}
            font={this.state.font}
            color={this.state.color}
            titleText={this.state.titleText}
          >
          </YourComponent>
        </div>
        <SelectionAndOutput
          options={this.config.options}
          layoutOptions={this.config.layout}
          setLayout={this.setLayout}
          layout={this.state.layout}
          setFont={this.setFont}
          font={this.state.font}
          setBgColor={this.setBgColor}
          color={this.state.color}
          setMenuIcon={this.setMenuIcon}
          setTitleText={this.setTitleText}
          addItems={this.addItems}
          itemsAdded={this.state.itemsAdded}
        />
      </div>
    )
  }
}

export default App;

