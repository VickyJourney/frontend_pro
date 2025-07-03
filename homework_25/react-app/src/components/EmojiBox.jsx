import { Component } from "react";

class EmojiBox extends Component {
  handleClick = () => {
    const newCount = this.props.count + 1;
    this.props.addActivity(this.props.text, newCount);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          <span>{this.props.text}</span>
        </button>
        <p>{this.props.count}</p>
      </div>
    );
  }
}

export default EmojiBox;
