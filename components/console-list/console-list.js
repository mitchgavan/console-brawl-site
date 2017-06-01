import { platformDetails } from '../../store/platforms';
import { breakpoints } from '../../constants/theme';
import ConsoleDetails from './console-details';

const isEven = val => !!(val % 2);

const ConsoleList = () => (
  <div className="root">
    {platformDetails.map((platform, index) => (
      <ConsoleDetails
        key={platform.slug}
        name={platform.name}
        released={platform.released}
        developer={platform.developer}
        description={platform.description}
        slug={platform.slug}
        reverseOrder={isEven(index)}
      />
    ))}
    <style jsx>{`
      .root {
        padding: 1rem 0;
      }
      @media ${breakpoints.medium} {
        .root {
          padding: 3rem 0;
        }
      }
  `}</style>
  </div>
);

export default ConsoleList;
