import { developers, platformDetails } from '../../store/platforms';
import { breakpoints } from '../../constants/theme';
import withToggle from '../../utilities/withToggle';
import isEven from '../../utilities/isEven';
import ConsoleDetails from './console-details';
import ConsoleToggle from './console-toggle';

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
