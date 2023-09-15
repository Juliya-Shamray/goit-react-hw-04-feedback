import PropTypes from 'prop-types';

export const Statistics = ({ total, positivePercentage, state }) => {
  const stateForMarkup = Object.entries(state);
  return (
    <>
      <ul style={{ listStyle: 'none', paddingLeft: '15px' }}>
        {stateForMarkup.map(item => (
          <li key={item}>
            <p style={{ textTransform: 'capitalize' }}>
              {item[0]}: {item[1]}
            </p>
          </li>
        ))}

        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive feedback: {positivePercentage}%</p>
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
  state: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
};
