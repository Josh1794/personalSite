import React from "react";
import MobileNav from "./mobileNav";
import NormalNav from "./normalNav";
import "../styles/bootstrap.min.css";
import "../styles/Nav.css";

export default class Navigation extends React.Component {
  state = {
    width: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return <MobileNav />;
    } else {
      return <NormalNav />;
    }
  }
}
