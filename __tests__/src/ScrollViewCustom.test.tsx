import {render} from '@testing-library/react-native';
import ScrollViewCustom from '../../src/ScrollViewCustom';
import {Text} from 'react-native';

describe('scroll view test cases', () => {
  it('children test', () => {
    const {getByText} = render(
      <ScrollViewCustom>
        <Text>Hello scroll</Text>
      </ScrollViewCustom>,
    );
    expect(getByText('Hello scroll')).toBeTruthy();
  });
});
