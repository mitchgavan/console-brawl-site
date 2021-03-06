import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ConsoleDetails from '../components/console-list/console-details';

test('It renders correctly', () => {
  const tree = shallow(
    <ConsoleDetails
      key="playstation-1"
      name="Playstation 1"
      released="December 3, 1994"
      developer="Sony"
      description="Very cool."
      slug="playstation-1"
      reverseOrder={false}
      toggledOn="All"
    />,
  );
  expect(toJson(tree)).toMatchSnapshot();
});

test('It renders in reverse order', () => {
  const tree = shallow(
    <ConsoleDetails
      key="playstation-1"
      name="Playstation 1"
      released="December 3, 1994"
      developer="Sony"
      description="Very cool."
      slug="playstation-1"
      reverseOrder
      toggledOn="All"
    />,
  );
  expect(toJson(tree)).toMatchSnapshot();
});

test('It renders Nintendo consoles only', () => {
  const tree = shallow(
    <ConsoleDetails
      key="playstation-1"
      name="Playstation 1"
      released="December 3, 1994"
      developer="Sony"
      description="Very cool."
      slug="playstation-1"
      reverseOrder={false}
      toggledOn="Nintendo"
    />,
  );
  expect(toJson(tree)).toMatchSnapshot();
});
