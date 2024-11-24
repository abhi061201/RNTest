import React from 'react';
import {Toggle} from '../../src/Toggle';
import {render} from '@testing-library/react-native'; // From @testing-library/react-native

test('toggle test', () => {
  const mockHandleValueChange = jest.fn();

  const {toJSON} = render(
    <Toggle
      text="Hello"
      handleValueChange={mockHandleValueChange}
      value={false}></Toggle>,
  );

  expect(toJSON()).toMatchSnapshot();
});
