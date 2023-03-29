import { getQueryParams } from './addQueryParams';

describe('addQueryParams.test', () => {
  test('1 param', () => {
    const search = getQueryParams({ order: 'asc' });
    expect(search).toEqual('?order=asc');
  });

  test('multiple params', () => {
    const search = getQueryParams({
      order: 'asc',
      search: 'javascript',
      sort: 'views',
    });
    expect(search).toEqual('?order=asc&search=javascript&sort=views');
  });

  test('with param undefined', () => {
    const search = getQueryParams({
      order: 'asc',
      search: undefined,
      sort: 'views',
    });
    expect(search).toEqual('?order=asc&sort=views');
  });
});
