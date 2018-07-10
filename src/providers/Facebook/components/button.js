// @flow
import * as React from "react";

// Define props type
type FacebookButtonProps = {
  title: string,
  url: string,
  buttonName: string,
  buttonTheme: "default" | "outlined" | "gradient",
  renderAs: string
};

// Define state type
type FacebookButtonState = {
  count: number
};

// Facebook Button class
export default class FacebookButton extends React.PureComponent<
  FacebookButtonProps,
  FacebookButtonState
> {
  // Set default props
  static defaultProps = {
    title: document.title,
    url: document.location.href,
    buttonName: "Facebook",
    buttonTheme: "default",
    renderAs: "button"
  };

  // Set default state
  state = {
    count: 0
  };

  /**
   * Beautify thousand integer and add `k` or `M` letter.
   *
   * @param {number} count
   * @return {string|number} a integer with or without letter
   */
  thousandIntBeautify = (count: number) => {
    if (count >= 1000 && count < 1000000) {
      // If count between 1 000 and 1 000 000
      return `${(count / 1000).toFixed(1)}k`;
    } else if (count >= 1000000) {
      // If count more than or equal 1 000 000
      return `${(count / 1000000).toFixed(2)}M`;
    }
    // Default return
    return count;
  };

  /**
   * Share window open function.
   *
   * @param {any} event
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

  /**
   * Share counter show function.
   *
   * @return {object} show share counter
   */
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
          if (result.share) {
            this.setState({
              count: parseInt(result.share.share_count)
            });
          }
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
    const ButtonTheme = `Facebook__theme_${this.props.buttonTheme}`;
    // Return element
    return (
      <Element
        className={`Facebook__container ${ButtonTheme}`}
        onClick={this.shareWindowOpen}
      >
        <span className="Facebook__share_link">{ButtonName}</span>
        <span className="Facebook__share_counter">
          {this.thousandIntBeautify(this.state.count)}
        </span>
      </Element>
    );
  }
}
