import { UserRole } from '@/entities/User';
import {
  getRouteAbout,
  getRouteAdminPanel,
  getRouteProfile,
} from '@/shared/const/router';
import { renderTestComponent } from '@/shared/lib/tests/renderTestComponent/renderComponent';
import { screen } from '@testing-library/react';
import AppRouter from './AppRouter';

describe('app/router/AppRouter', () => {
  test('Page should render', async () => {
    renderTestComponent(<AppRouter />, {
      route: getRouteAbout(),
    });

    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  test('Page not found', async () => {
    renderTestComponent(<AppRouter />, {
      route: '/some-wrong-url',
    });

    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });

  test('Redirect for unauthorized user to homepage', async () => {
    renderTestComponent(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: { authData: undefined },
      },
    });

    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('Should render authorized only page', async () => {
    renderTestComponent(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          _initialized: true,
          authData: {},
        },
      },
    });

    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });

  test('Should render forbidden page for wrong role', async () => {
    renderTestComponent(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          _initialized: true,
          authData: { roles: [] },
        },
      },
    });

    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });

  test('Should render admin page for approved role', async () => {
    renderTestComponent(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          _initialized: true,
          authData: { roles: [UserRole.ADMIN] },
        },
      },
    });

    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });
});
