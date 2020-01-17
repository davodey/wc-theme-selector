import React, { Component } from 'react';
import format from "html-format"
import '../assets/code.css'
import {PrismCode} from "./PrismComponent"


class GenerateCode extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderHTML = this.renderHTML.bind(this);
  }

  componentDidMount () {
    if (this.props.type === "html") {
      this.node = document.querySelector('#markup');
      this.poop = document.querySelector('#markup').cloneNode(true);
      this.clone = this.poop.querySelector('flayvor-top-app-bar');

      const arr = [];
      this.props.itemsAdded.map(item => {
        arr.push(`<button slot="right" data-index="0" class="material-icons
        mdc-icon-button mdc-top-app-bar__action-item">${item}</button>`)
      })
      const htmlString = arr.join('');

      this.clone.innerHTML = htmlString
      console.log(this.poop)
      this.setState({html: format(this.poop.innerHTML, ' '.repeat(4))})
    } else {
      this.node = document.querySelector('#css style');
      this.setState({html: format(this.node.innerHTML, ' '.repeat(4))})
    }
  }

  componentDidUpdate (prevProps, prevState) {
    console.log(this.props.itemsAdded)
    this.node = document.querySelector('#markup');
    if (this.props.type === "html") {
      if (this.props.update !== prevProps.update || this.props.theme !== prevProps.theme || this.props.menuIcon !== prevProps.menuIcon || this.props.showIcon !== prevProps.showIcon  || this.props.title !== prevProps.title) {
        this.node = document.querySelector('#markup');
        console.log('MARKUP', this.node)
        this.setState({html: format(this.node.innerHTML, ' '.repeat(4))})
      }
    } else {
      if (this.props.font !== prevProps.font || this.props.color !== prevProps.color || this.props.fontColor !== prevProps.fontColor) {
        this.node=document.querySelector('#css style');
        this.setState({html: format(this.node.innerHTML, ' '.repeat(4))})
      }
    }

  }
  renderHTML () {

    return (
      `
      ${this.state.html}
    `
    )
  }

  render () {
    return (
      <PrismCode
        code={this.renderHTML()}
        language={this.props.type}
        plugins={["line-numbers"]}
        type={this.props.type}
      />
    )
  }
}

export default GenerateCode;

