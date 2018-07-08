// @flow
import * as React from "react";
// Define Facebook props type
type FacebookShareProps = {
  title: string,
  url: string,
  buttonName: string,
  renderAs: string,
  className?: string
};
// Facebook provider class
export default class FacebookShare extends React.PureComponent<
  FacebookShareProps
> {
  // Set default props
  static defaultProps = {
    title: document.title,
    url: document.location.href,
    buttonName: "Facebook",
    renderAs: "span"
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
  // Render provider
  render() {
    // Define attributes
    const Element = this.props.renderAs;
    const ClassName = this.props.className;
    // Return element
    return (
      <Element className={ClassName} onClick={this.shareWindowOpen}>
        {this.props.buttonName}
      </Element>
    );
  }
}
