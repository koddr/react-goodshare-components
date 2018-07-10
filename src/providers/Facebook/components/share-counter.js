// @flow
import * as React from "react";
// Define props type
type FacebookShareCounterProps = {
  url: string,
  renderAs: string
};
// Define state type
type FacebookShareCounterState = {
  count: number
};
// Provider class
export default class FacebookShareCounter extends React.PureComponent<
  FacebookShareCounterProps,
  FacebookShareCounterState
> {
  // Set default props
  static defaultProps = {
    url: document.location.href,
    renderAs: "span"
  };
  // Set default state
  state = {
    count: 0
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
    // Return element
    return <Element>{this.state.count}</Element>;
  }
}
