import React from 'react';
import Intro from '../../src/intro';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Intro></Intro>);
  expect(tree).toMatchSnapshot();
});
