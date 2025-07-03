import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BtnResetResult from "./components/BtnResetResult";
import Header from "./components/Header";
import BtnShowResult from "./components/BtnShowResult";
import EmojiBox from "./components/EmojiBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
    };
  }

  componentDidMount() {
    const jsonActivities = localStorage.getItem("activities");
    const activities = jsonActivities ? JSON.parse(jsonActivities) : [];

    this.setState({
      activities,
    });
  }

  addActivity = (text, count) => {
    let updatedActivities = [...this.state.activities];
    const existing = updatedActivities.find(
      (activity) => activity.text === text
    );

    if (existing) {
      existing.count = count;
    } else {
      updatedActivities.push({ text, count });
    }
    this.setState({
      activities: updatedActivities,
    });
    localStorage.setItem("activities", JSON.stringify(updatedActivities));
  };

  resetCount = () => {
    const resetedCount = this.state.activities.map((activity) => {
      return { ...activity, count: 0 };
    });
    this.setState({
      activities: resetedCount,
    });
    localStorage.setItem("activities", JSON.stringify(resetedCount));
  };

  getWinners = () => {
    const { activities } = this.state;
    if (activities.length === 0) return [];

    const maxCount = Math.max(...activities.map((a) => a.count));

    if (maxCount === 0) return [];

    return activities.filter((a) => a.count === maxCount);
  };

  render() {
    return (
      <>
        <Header text="Vote for your favorite activities" />
        <div className="emoji-container">
          <EmojiBox
            text="🏄🏻‍♀️"
            count={
              this.state.activities.find((activity) => activity.text === "🏄🏻‍♀️")
                ?.count || 0
            }
            addActivity={this.addActivity}
          />
          <EmojiBox
            text="🤿"
            count={
              this.state.activities.find((activity) => activity.text === "🤿")
                ?.count || 0
            }
            addActivity={this.addActivity}
          />
          <EmojiBox
            text="🏂"
            count={
              this.state.activities.find((activity) => activity.text === "🏂")
                ?.count || 0
            }
            addActivity={this.addActivity}
          />
          <EmojiBox
            text="🎾"
            count={
              this.state.activities.find((activity) => activity.text === "🎾")
                ?.count || 0
            }
            addActivity={this.addActivity}
          />
          <EmojiBox
            text="🏃🏻‍♀️"
            count={
              this.state.activities.find((activity) => (activity.text = "🏃🏻‍♀️"))
                ?.count || 0
            }
            addActivity={this.addActivity}
          />
        </div>
        <BtnShowResult getWinners={this.getWinners} />
        <BtnResetResult resetCount={this.resetCount} />
      </>
    );
  }
}

export default App;
