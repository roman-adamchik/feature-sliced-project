import { fireEvent, render, screen } from '@testing-library/react';
import {
  renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar test', () => {
  test('Sidebar renders', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Sidebar collapse class appear after click', () => {
    render(<Sidebar />);
    const toggleButton = screen.getByTestId('toggle-button');
    const sidebar = screen.getByTestId('sidebar');
    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass('collapsed');
  });

  test('Sidebar collapse class toggle 2 times', () => {
    render(<Sidebar />);
    const toggleButton = screen.getByTestId('toggle-button');
    const sidebar = screen.getByTestId('sidebar');
    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass('collapsed');
    fireEvent.click(toggleButton);
    expect(sidebar).not.toHaveClass('collapsed');
  });
});
