import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ConsoleToggle from '../components/console-list/console-toggle';
import { developers } from '../store/platforms';

test('It renders correctly', () => {
  const tree = shallow(
    <ConsoleToggle
      developers={developers}
      toggle={() => false}
      toggledOn="All"
    />,
  );
  expect(toJson(tree)).toMatchSnapshot();
});

test('It renders with Nintendo tab selected', () => {
  const tree = shallow(
    <ConsoleToggle
      developers={developers}
      toggle={() => false}
      toggledOn="Nintendo"
    />,
  );
  expect(toJson(tree)).toMatchSnapshot();
});
