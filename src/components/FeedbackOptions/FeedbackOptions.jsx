import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <Button type="button" name="good" onClick={onLeaveFeedback}>
        Good
      </Button>
      <Button type="button" name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </Button>
      <Button type="button" name="bad" onClick={onLeaveFeedback}>
        Bad
      </Button>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
