// @flow
import * as React from "react";
import { StyleSheet, css } from "aphrodite/no-important";

// Share counter component
import FacebookShareCounter from "./share-counter";

// CSS-in-JS styles
import { styles } from "../../../";

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
    const left = screen.width / 2 - width / 2;
    const top = screen.height / 2 - height / 2;

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
    const ButtonName = this.props.buttonName;

    // Define styles
    let CONTAINER_BACKGROUND,
      CONTAINER_BACKGROUND_HOVER,
      CONTAINER_FONT_COLOR,
      CONTAINER_FONT_COLOR_HOVER,
      CONTAINER_BORDER,
      SHARE_COUNTER_BORDER_LEFT;

    // Define styles
    switch (this.props.buttonTheme) {
      case "outlined":
        CONTAINER_BACKGROUND = "rgb(255, 255, 255)";
        CONTAINER_BACKGROUND_HOVER = "rgb(59, 89, 152)";
        CONTAINER_FONT_COLOR = "rgb(59, 89, 152)";
        CONTAINER_FONT_COLOR_HOVER = "rgb(255, 255, 255)";
        CONTAINER_BORDER = "1px solid rgb(59, 89, 152)";
        SHARE_COUNTER_BORDER_LEFT = "1px solid rgba(59, 89, 152, 0.4)";
        break;
      case "gradient":
        CONTAINER_BACKGROUND =
          "linear-gradient(to top, rgb(59, 89, 152), rgb(89, 119, 182))";
        CONTAINER_BACKGROUND_HOVER =
          "linear-gradient(to top, rgb(89, 119, 182), rgb(59, 89, 152))";
        CONTAINER_FONT_COLOR = "rgb(255, 255, 255)";
        CONTAINER_FONT_COLOR_HOVER = "rgb(255, 255, 255)";
        CONTAINER_BORDER = "1px solid rgb(59, 89, 152)";
        SHARE_COUNTER_BORDER_LEFT = "1px solid rgba(255, 255, 255, 0.4)";
        break;
      default:
        CONTAINER_BACKGROUND = "rgb(59, 89, 152)";
        CONTAINER_BACKGROUND_HOVER = "rgb(59, 99, 162)";
        CONTAINER_FONT_COLOR = "rgb(255, 255, 255)";
        CONTAINER_FONT_COLOR_HOVER = "rgb(255, 255, 255)";
        CONTAINER_BORDER = "1px solid rgb(59, 89, 152)";
        SHARE_COUNTER_BORDER_LEFT = "1px solid rgba(255, 255, 255, 0.4)";
        break;
    }

    const Theme = StyleSheet.create({
      container: {
        background: CONTAINER_BACKGROUND,
        color: CONTAINER_FONT_COLOR,
        border: CONTAINER_BORDER,
        ":hover": {
          background: CONTAINER_BACKGROUND_HOVER,
          color: CONTAINER_FONT_COLOR_HOVER
        }
      },
      share_counter: {
        borderLeft: SHARE_COUNTER_BORDER_LEFT
      }
    });

    // Return element
    return (
      <Element
        className={css(styles.container, Theme.container)}
        onClick={this.shareWindowOpen}
      >
        <span className={css(styles.share_link)}>{ButtonName}</span>
        <FacebookShareCounter
          className={css(styles.share_counter, Theme.share_counter)}
        />
      </Element>
    );
  }
}
