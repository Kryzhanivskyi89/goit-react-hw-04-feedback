import { useState } from "react";
import Statistics  from "./Stratistics/Statistics";
import FeedbackOptions  from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification  from "./Notafication/Notification";

  const App = () => {
        
    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
    const { good, neutral, bad } = feedback;
    
    const handleFeedback = name => {
      setFeedback(lastState => ({...lastState, [name]: lastState[name] + 1}));    
    };
    
    const countTotalFeedback = () => good + neutral + bad
    let total = countTotalFeedback();
    
    const countPositiveFeedbackPercentage = () => {
      return Math.round((good/total) * 100) 
    };

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys (feedback)}
            onLeaveFeedback={handleFeedback}
          />
        </Section>
          
        <Section title="Statistics">
          {total === 0 ? (<Notification message="There is no feedback" />) :
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
          }
        </Section>             
      </>
    );
  };

export default App;
