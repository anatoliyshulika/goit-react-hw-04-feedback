import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const capitalizeFirst = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function FeedbackOptions({ objState, onLeaveFeedback }) {
  const feedbackList = Object.keys(objState);
  return feedbackList.map(key => (
    <Button type="button" name={key} onClick={onLeaveFeedback} key={key}>
      {capitalizeFirst(key)}
    </Button>
  ));
}

FeedbackOptions.propTypes = {
  objState: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
