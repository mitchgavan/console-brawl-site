import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ConsoleDescription from '../components/console-list/console-description';

test('It renders correctly', () => {
  let tree = shallow(
    <ConsoleDescription
      description="A cool console"
      developer="Nintendo"
      name="Gamecube"
      released="September 14, 2001"
      reverseOrder={false}
    />,
  );
  expect(toJson(tree)).toMatchSnapshot();

  tree = shallow(
    <ConsoleDescription
      description="A cool console"
      developer="Nintendo"
      name="Gamecube"
      released="September 14, 2001"
      reverseOrder
    />,
  );
  expect(toJson(tree)).toMatchSnapshot();
});
