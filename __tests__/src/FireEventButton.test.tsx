import {fireEvent, render} from '@testing-library/react-native';
import FireEventButton from '../../src/FireEventButton';

describe('FireEvent', () => {
  const mockOnSelectedItem = jest.fn();
  const {getByTestId, getByText} = render(
    <FireEventButton onSelectedItem={mockOnSelectedItem}></FireEventButton>,
  );
  test('onPressCalled', () => {
    fireEvent.press(getByTestId('myButton'));
    fireEvent.press(getByText('Fire Event'));
    expect(mockOnSelectedItem).toHaveBeenCalledTimes(2);
  });

  test('myTest2', () => {
    fireEvent.press(getByTestId('myButton'));
    expect(mockOnSelectedItem).toHaveBeenCalledTimes(3);
  });
});
