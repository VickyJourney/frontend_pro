import { Component } from "react";
import Button from "react-bootstrap/Button";
import Winner from "./Winner";

class BtnShowResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWinnerHidden: true,
    };
  }

  handleToggleWinner = () => {
    this.setState({ isWinnerHidden: !this.state.isWinnerHidden });
  };

  render() {
    const winners = this.props.getWinners?.() || [];
    return (
      <>
        <Button variant="outline-success" onClick={this.handleToggleWinner}>
          {this.state.isWinnerHidden ? "Show the winner" : "Hide results"}
        </Button>
        {!this.state.isWinnerHidden && winners.length > 0 && (
          <Winner winners={winners} />
        )}
      </>
    );
  }
}

export default BtnShowResult;
