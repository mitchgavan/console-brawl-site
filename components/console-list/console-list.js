import { compose, withState, withHandlers } from 'recompose';
import { developers, platformDetails } from '../../store/platforms';
import { breakpoints } from '../../constants/theme';
import ConsoleDetails from './console-details';
import ConsoleToggle from './console-toggle';

const isEven = val => !!(val % 2);

const withToggle = compose(
  withState('toggledOn', 'active', 'All'),
  withHandlers({
    toggle: ({ active }) => (e) => {
      active(e.target.innerText);
    },
  }),
);

const ConsoleList = withToggle(({ toggledOn, toggle }) => (
  <div className="root">
    <ConsoleToggle
      developers={developers}
      toggle={toggle}
      toggledOn={toggledOn}
    />
    {platformDetails.map((platform, index) => (
      <ConsoleDetails
        key={platform.slug}
        name={platform.name}
        released={platform.released}
        developer={platform.developer}
        description={platform.description}
        slug={platform.slug}
        reverseOrder={isEven(index)}
        toggledOn={toggledOn}
      />
    ))}

    <style jsx>{`
      .root {
        padding: 0 0 1rem;
      }
      @media ${breakpoints.medium} {
        .root {
          padding: 0 0 3rem;
        }
      }
  `}</style>
  </div>
));

export default ConsoleList;
