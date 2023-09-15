import PropTypes from 'prop-types';

export const FeedbackOptions = ({ handleBtnClick, arrForMarkup }) => {
  return (
    <ul
      style={{ display: 'flex', listStyle: 'none', gap: '10px', padding: '0' }}
    >
      {arrForMarkup.map(item => (
        <li key={item}>
          <button
            style={{
              padding: '7px 15px',
              borderRadius: '10px',
              fontSize: '16px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              backgroundColor: 'lightBlue',
            }}
            onClick={() => handleBtnClick(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  handleBtnClick: PropTypes.func,
  arrForMarkup: PropTypes.arrayOf(PropTypes.string),
};
