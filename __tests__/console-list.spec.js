import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ConsoleList from '../components/console-list/console-list';

test('It renders correctly', () => {
  const tree = shallow(
    <ConsoleList />,
  );
  expect(toJson(tree)).toMatchSnapshot();
});
