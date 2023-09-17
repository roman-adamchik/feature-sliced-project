import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button testing', () => {
  test('Button appears on the screen', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('clear class added to the button', () => {
    render(<Button variant={'clear'}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
