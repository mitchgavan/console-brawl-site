import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ConsoleDescription from '../console-list/console-description';

test('It renders correctly', () => {
  const tree = shallow(
    <ConsoleDescription
      description="A cool console"
      developer="Nintendo"
      name="Gamecube"
      released="September 14, 2001"
      reverseOrder={false}
    />,
  );
  expect(toJson(tree)).toMatchSnapshot();

  const treeWithReverse = shallow(
    <ConsoleDescription
      description="A cool console"
      developer="Nintendo"
      name="Gamecube"
      released="September 14, 2001"
      reverseOrder
    />,
  );
  expect(toJson(treeWithReverse)).toMatchSnapshot();
});
