import './App.css';
import { useState } from 'react';
import SectionTitle from './components/SectionTitle/SectionTitle.jsx';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './components/Statistics/Statistics.jsx';

const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const { neutral, good, bad } = state;

  const handleIncrement = e => {
    const { id } = e.target;
    setState({ ...state, [id]: state[id] + 1 });
    // setState(prevstate => ({...prevstate, [id]:prevstate[id] + 1 }));
  };

  const countTotalFeedback = () => {
    return neutral + good + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const sum = neutral + good + bad;
    const result = (good * 100) / sum;
    return result ? Math.floor(result) : 'no data';
  };

  return (
    <>
      <SectionTitle />
      <FeedbackOptions handleIncrement={handleIncrement} />
      <Statistics
        countTotalFeedback={countTotalFeedback}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </>
  );
};

export default App;
