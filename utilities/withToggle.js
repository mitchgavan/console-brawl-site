import { compose, withState, withHandlers } from 'recompose';

const withToggle = compose(
  withState('toggledOn', 'active', 'All'),
  withHandlers({
    toggle: ({ active }) => (e) => {
      active(e.target.innerText);
    },
  }),
);

export default withToggle;
