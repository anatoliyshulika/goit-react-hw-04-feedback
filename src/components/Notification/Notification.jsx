import PropTypes from 'prop-types';
import { Mesaage } from './Notification.styled';

export default function Notification({ message }) {
  return <Mesaage>{message}</Mesaage>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
