import { platformDetails } from '../../store/platforms';
import ConsoleDetails from './console-details';

const isEven = val => !!(val % 2);

const ConsoleList = () => (
  <div>
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
