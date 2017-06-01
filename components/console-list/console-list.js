import { platformDetails } from '../../store/platforms';
import ConsoleDetails from './console-details';

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
        reverseOrder={!!(index % 2)}
      />
    ))}
  </div>
);

export default ConsoleList;
