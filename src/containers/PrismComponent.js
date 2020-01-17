import React, {Fragment} from "react"
import Prism from "prismjs"
import format from "html-format"


export class PrismCode extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.copy = this.copy.bind(this)
  }
  componentDidMount() {
    this.highlight()
  }
  componentDidUpdate() {
    this.highlight()
  }
  highlight = () => {
    if (this.ref && this.ref.current) {
      Prism.highlightElement(this.ref.current)
    }
  }

  copy () {
    const textarea = document.createElement('textarea'),
      copyText = document.querySelector("code").textContent,
      target = document.querySelector('#copyCapture');

    textarea.id = "codeInput";
    target.appendChild(textarea);
    textarea.innerHTML = format(copyText, ' '.repeat(4));
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  }
  //https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
  render() {
    const { code, plugins, language } = this.props
    return (
    <div id={"copyCapture"} className={this.props.type}>
      <button onClick={this.copy} className="mdc-button mdc-button--dense" style={{display: "flex"}}>
        <i className="material-icons mdc-button__icon">code</i>
        <span className="mdc-button__label">Copy</span>
      </button>
        <pre>
          <code ref={this.ref} className={`language-${this.props.type}`}>
            {code.trim()}
          </code>
      </pre>
    </div>

    )
  }
}
