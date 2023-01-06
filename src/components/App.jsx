import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleLeaveFeedback(evt) {
    if (evt.target.name === 'good') {
      setGood(prevGood => prevGood + 1);
    }
    if (evt.target.name === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    }
    if (evt.target.name === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    const total = countTotalFeedback();
    const persentage = Math.round((good / total) * 100);
    return persentage ? persentage : 0;
  }

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
