import { Component } from "react";
import Button from "react-bootstrap/Button";

class BtnResetResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultIsCleared: false,
    };
  }
  handleClick = () => {
    this.setState({ resultIsCleared: true });
    this.props.resetCount();
  };
  render() {
    return (
      <>
        <Button variant="outline-warning" onClick={this.handleClick}>
          Clear results!
        </Button>
      </>
    );
  }
}

export default BtnResetResult;
