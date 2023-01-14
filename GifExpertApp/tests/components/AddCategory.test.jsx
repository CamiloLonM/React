import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Test in <AddCategory/>', () => {
  test('You must change the value of the text box', () => {
    const inputValue = 'Game of Thrones';

    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
  });

  // Submit del formulario

  test('  You must call NewCategory if the input has a value', () => {
    const inputValue = 'Game of Thrones';

    const OnNewCategory = jest.fn();

    render(<AddCategory onNewCategory={OnNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe('');

    expect(OnNewCategory).toHaveBeenCalled();
    expect(OnNewCategory).toHaveBeenCalledTimes(1);
    expect(OnNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('It should not call onNewCategory if the input is empty', () => {
    const OnNewCategory = jest.fn();

    render(<AddCategory onNewCategory={OnNewCategory} />);

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(OnNewCategory).not.toHaveBeenCalled();
  });
});
