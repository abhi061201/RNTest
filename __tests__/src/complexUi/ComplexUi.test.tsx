import {fireEvent, render} from '@testing-library/react-native';
import ComplexUI from '../../../src/complexUi/ComplexUI';

describe('complex ui testing', () => {
  const mockfn1 = jest.fn();
  const mockfn2 = jest.fn();
  const mockfn1Title = 'button1';
  const mockfn2Title = 'button2';
  const title = 'mytitle';
  const image = {uri: 'image link'};

  // jitne bhi test case run honge uske baad m chahta hoo saare mocks clear ho jaye
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('button1test', () => {
    const {getByText} = render(
      <ComplexUI
        image={image}
        press1={mockfn1}
        press1Title={'hello'}
        title={title}></ComplexUI>,
    );
    fireEvent.press(getByText('hello'));
    // expect(getByText('hello')).toBeTruthy();
    expect(mockfn1).toHaveBeenCalledTimes(1);
  });
  it('button2test', () => {
    const {getByText} = render(
      <ComplexUI
        image={image}
        press1={mockfn1}
        press1Title={'hello'}
        press2={mockfn2}
        press2Title={mockfn2Title}
        title={title}></ComplexUI>,
    );
    fireEvent.press(getByText(mockfn2Title));
    fireEvent.press(getByText(mockfn2Title));

    expect(mockfn2).toHaveBeenCalledTimes(2);
  });
});
