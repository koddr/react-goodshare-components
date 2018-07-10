// @flow
import * as React from "react";
// Define props type
type FacebookButtonProps = {
  title: string,
  url: string,
  buttonName: string,
  renderAs: string,
  className?: string
};
// Define state type
type FacebookButtonState = {
  count: number
};
// Provider class
export default class FacebookButton extends React.PureComponent<
  FacebookButtonProps,
  FacebookButtonState
> {
  // Set default props
  static defaultProps = {
    title: document.title,
    url: document.location.href,
    buttonName: "Facebook",
    renderAs: "button",
    className: "Facebook__theme_default"
  };
  // Set default state
  state = {
    count: 0
  };
  // Share window open function
  shareWindowOpen = (event: any) => {
    event.preventDefault();
    return window.open(
      // prettier-ignore
      `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.props.url)}&t=${this.props.title}`,
      "Share this",
      "width=640,height=480,location=no,toolbar=no,menubar=no"
    );
  };
  // Share counter show function
  componentDidMount() {
    // Fetch counter data
    fetch(
      // prettier-ignore
      `https://graph.facebook.com/?id=${encodeURIComponent(this.props.url)}`
    )
      .then(response => response.json())
      .then(
        result => {
          // Set state with share counter
          this.setState({
            count: parseInt(result.share.share_count)
          });
        },
        error => {
          // Console errors
          console.log(error);
        }
      );
  }
  // Render provider
  render() {
    // Define attributes
    const Element = this.props.renderAs;
    const ButtonName = this.props.buttonName;
    const ClassName = this.props.className;
    // Return element
    return (
      <Element className={ClassName} onClick={this.shareWindowOpen}>
        <span className="Facebook__share_link">{ButtonName}</span>
        <span className="Facebook__share_counter">{this.state.count}</span>
      </Element>
    );
  }
}
