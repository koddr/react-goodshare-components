// @flow
import * as React from "react";

// Define Facebook props type
type FacebookShareLinkProps = {
  title: string,
  url: string,
  buttonName: string,
  renderAs: string,
  className: string
};

// Facebook Share Link class
export default class FacebookShareLink extends React.PureComponent<
  FacebookShareLinkProps
> {
  // Set default props
  static defaultProps = {
    title: document.title,
    url: document.location.href,
    buttonName: "Facebook",
    renderAs: "span"
  };

  /**
   * Share window open function.
   *
   * @param {function} event
   * @return {object} open pop-up window
   */
  shareWindowOpen = (event: any) => {
    // Prevent default event
    event.preventDefault();

    // Define window size
    const width = 640;
    const height = 320;

    // Define window position
    let left = screen.width / 2 - width / 2;
    let top = screen.height / 2 - height / 2;

    // Open window
    return window.open(
      // prettier-ignore
      `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.props.url)}&t=${this.props.title}`,
      "Share this",
      `width=${width},height=${height},left=${left},top=${top},location=no,toolbar=no,menubar=no`
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
