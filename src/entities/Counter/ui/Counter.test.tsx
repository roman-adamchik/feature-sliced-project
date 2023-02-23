import { fireEvent, screen } from '@testing-library/react';
import { renderTestComponent } from 'shared/lib/tests/renderTestComponent/renderComponent';
import { Counter } from './Counter';

describe('Counter test', () => {
  test('Counter renders', () => {
    renderTestComponent(<Counter />);
    expect(screen.getByTestId('counter')).toBeInTheDocument();
  });

  test('counter has proper initial value', () => {
    renderTestComponent(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    const value = screen.getByTestId('value');
    expect(value).toHaveTextContent('10');
  });

  test('value incremented after click', () => {
    renderTestComponent(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    const incrementButton = screen.getByTestId('increment-btn');
    const value = screen.getByTestId('value');
    fireEvent.click(incrementButton);
    expect(value).toHaveTextContent('11');
  });

  test('value decrement after click', () => {
    renderTestComponent(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    const incrementButton = screen.getByTestId('decrement-btn');
    const value = screen.getByTestId('value');
    fireEvent.click(incrementButton);
    expect(value).toHaveTextContent('9');
  });
});
