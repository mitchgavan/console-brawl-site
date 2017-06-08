import { developers, platformDetails } from '../../store/platforms';
import ConsoleDetails from './console-details';
import ConsoleToggle from './console-toggle';

const isEven = val => !!(val % 2);

const ConsoleList = () => (
  <div className="root">
    <ConsoleToggle developers={developers} />
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
  </div>
);

export default ConsoleList;
