import { useState, useEffect } from "react";
import Header from "../components/Header";
import BtnShowResult from "../components/BtnShowResult";
import EmojiBox from "../components/EmojiBox";
import BtnResetResult from "../components/BtnResetResult";

const VotingPage = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const json = localStorage.getItem("activities");
    const data = json ? JSON.parse(json) : [];
    setActivities(data);
  }, []);

  const addActivity = (text, count) => {
    const updated = [...activities];
    const existing = updated.find((a) => a.text === text);

    if (existing) {
      existing.count = count;
    } else {
      updated.push({ text, count });
    }

    setActivities(updated);
    localStorage.setItem("activities", JSON.stringify(updated));
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
        {["🏄🏻‍♀️", "🤿", "🏂", "🎾", "🏃🏻‍♀️"].map((emoji) => (
          <EmojiBox
            key={emoji}
            text={emoji}
            count={activities.find((a) => a.text === emoji)?.count || 0}
            addActivity={addActivity}
          />
        ))}
      </div>
      <BtnShowResult getWinners={getWinners} />
      <BtnResetResult setActivities={setActivities} />
    </>
  );
};

export default VotingPage;
