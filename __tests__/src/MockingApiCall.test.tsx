import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import MockingApiCall from '../../src/MockingApiCall';

// Mock global fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {id: 1, name: 'John Doe'},
        {id: 2, name: 'Jane Smith'},
      ]),
  }),
) as jest.Mock;

test('renders UserList correctly', async () => {
  const {toJSON, getByText} = render(<MockingApiCall />);

  // Wait for the API response to be processed
  // this is just for checking k api call done or not
  await waitFor(() => getByText('John Doe'));

  // Take a snapshot
  expect(toJSON()).toMatchSnapshot();
});
