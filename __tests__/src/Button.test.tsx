import React from 'react';
import {render} from '@testing-library/react-native';
import Button from '../../src/Button';

test('renders Button correctly', () => {
  const {toJSON} = render(<Button label="Click Me" onPress={() => {}} />);
  expect(toJSON()).toMatchSnapshot();
});
