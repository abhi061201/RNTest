import {render} from '@testing-library/react-native';
import MockEx from '../../src/MockEx';

test('', () => {
  const mockOnSelectedItem = jest.fn();
  const {toJSON} = render(
    <MockEx
      onSelectedItem={mockOnSelectedItem}
      val="Hello"
      bool={false}></MockEx>,
  );
  expect(toJSON()).toMatchSnapshot();
});
