import { Component } from "react";

class Header extends Component {
  render() {
    const { text } = this.props;
    return (
      <header className="header">
        <h1>{text}</h1>
      </header>
    );
  }
}

export default Header;
