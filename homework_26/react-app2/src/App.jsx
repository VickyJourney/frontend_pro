import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BtnResetResult from "./components/BtnResetResult";
import Header from "./components/Header";
import BtnShowResult from "./components/BtnShowResult";
import EmojiBox from "./components/EmojiBox";

const App = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const jsonActivities = localStorage.getItem("activities");
    const savedActivities = jsonActivities ? JSON.parse(jsonActivities) : [];

    setActivities(savedActivities);
  }, []);

  const addActivity = (text, count) => {
    let updatedActivities = [...activities];
    const existing = updatedActivities.find(
      (activity) => activity.text === text
    );

    if (existing) {
      existing.count = count;
    } else {
      updatedActivities.push({ text, count });
    }
    setActivities(updatedActivities);
    localStorage.setItem("activities", JSON.stringify(updatedActivities));
  };

  const resetCount = () => {
    const resetedCount = activities.map((activity) => {
      return { ...activity, count: 0 };
    });
    setActivities(resetedCount);
    localStorage.setItem("activities", JSON.stringify(resetedCount));
  };

  const getWinners = () => {
    if (!activities.length) return [];

    const maxCount = Math.max(...activities.map((a) => a.count));

    if (maxCount === 0) return [];

    return activities.filter((a) => a.count === maxCount);
  };

  return (
    <>
      <Header text="Vote for your favorite activities" />
      <div className="emoji-container">
        <EmojiBox
          text="🏄🏻‍♀️"
          count={
            activities.find((activity) => activity.text === "🏄🏻‍♀️")?.count || 0
          }
          addActivity={addActivity}
        />
        <EmojiBox
          text="🤿"
          count={
            activities.find((activity) => activity.text === "🤿")?.count || 0
          }
          addActivity={addActivity}
        />
        <EmojiBox
          text="🏂"
          count={
            activities.find((activity) => activity.text === "🏂")?.count || 0
          }
          addActivity={addActivity}
        />
        <EmojiBox
          text="🎾"
          count={
            activities.find((activity) => activity.text === "🎾")?.count || 0
          }
          addActivity={addActivity}
        />
        <EmojiBox
          text="🏃🏻‍♀️"
          count={
            activities.find((activity) => (activity.text = "🏃🏻‍♀️"))?.count || 0
          }
          addActivity={addActivity}
        />
      </div>
      <BtnShowResult getWinners={getWinners} />
      <BtnResetResult resetCount={resetCount} />
    </>
  );
};

export default App;
