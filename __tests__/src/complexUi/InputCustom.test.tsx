import {fireEvent, render} from '@testing-library/react-native';
import InputCustom from '../../../src/complexUi/InputCustom';

describe('InputCustomTest', () => {
  const onChangeMock = jest.fn();
  const onFocusMock = jest.fn();
  const onChangeTextMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('test 1', () => {
    const {getByTestId} = render(
      <InputCustom
        testID="customTextInput"
        onChange={onChangeMock}
        onFocus={onFocusMock}
        onChangeText={onChangeTextMock}></InputCustom>,
    );
    fireEvent(getByTestId('customTextInput'), 'focus', {});

    expect(onFocusMock).toHaveBeenCalledTimes(1);
  });

  test('test 2', () => {
    const {getByTestId} = render(
      <InputCustom
        testID="customTextInput"
        onChange={onChangeMock}
        onFocus={onFocusMock}
        onChangeText={onChangeTextMock}></InputCustom>,
    );
    fireEvent(getByTestId('customTextInput'), 'change', {});

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
