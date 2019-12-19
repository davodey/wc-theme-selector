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
    this.swapItems = this.swapItems.bind(this);
  }

  setMenuIcon (event) {
    this.setState({menuIcon: event.nativeEvent.target.innerHTML})
  }
  setBgColor (event) {
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

  swapItems (data, test) {
    const el = document.querySelector('flayvor-top-app-bar').shadowRoot;
    const buttons = el.querySelectorAll('button[slot="right"]');
    buttons.forEach(button => {
      console.log(button)
    })

    this.setState({itemsAdded: test})
  }

  addItems (event) {
    let arr = this.state.itemsAdded;
    if (this.state.itemsAdded.length < 3) {
      arr.push(event.target.innerHTML)
      this.setState({itemsAdded: arr})
    } else {
      return false
    }
    const buttons = document.querySelectorAll('button[slot="right"]');
    buttons.forEach(button => {
      button.remove();
    })
  }

  render () {
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
            itemsAdded={this.state.itemsAdded}
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
          swapItems={this.swapItems}
        />
      </div>
    )
  }
}

export default App;

