// @flow
import * as React from "react";
// Define props type
type FacebookCounterProps = {
  url: string,
  renderAs: string,
  className?: string
};
// Define state type
type FacebookCounterState = {
  count: number
};
// Provider class
export default class FacebookCounter extends React.PureComponent<
  FacebookCounterProps,
  FacebookCounterState
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
    const ClassName = this.props.className;
    // Return element
    return <Element className={ClassName}>{this.state.count}</Element>;
  }
}
