import React from 'react';
import HomePage from '../HomePage';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <HomePage />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});