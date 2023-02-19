import { fireEvent, screen } from '@testing-library/react';
import { renderTestComponent } from 'shared/lib/tests/renderTestComponent/renderComponent';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar test', () => {
  test('Sidebar renders', () => {
    renderTestComponent(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Sidebar collapse class appear after click', () => {
    renderTestComponent(<Sidebar />);
    const toggleButton = screen.getByTestId('toggle-button');
    const sidebar = screen.getByTestId('sidebar');
    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass('collapsed');
  });

  test('Sidebar collapse class toggle 2 times', () => {
    renderTestComponent(<Sidebar />);
    const toggleButton = screen.getByTestId('toggle-button');
    const sidebar = screen.getByTestId('sidebar');
    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass('collapsed');
    fireEvent.click(toggleButton);
    expect(sidebar).not.toHaveClass('collapsed');
  });
});
