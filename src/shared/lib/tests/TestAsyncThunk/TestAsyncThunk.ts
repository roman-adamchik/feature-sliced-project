import { type AsyncThunkAction } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import axios, { type AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue>
  = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;
  api: jest.MockedFunctionDeep<AxiosStatic>;

  constructor (
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>,
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);
    this.api = mockedAxios;
  }

  async callThunk (arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(
      this.dispatch,
      this.getState,
      {
        api: this.api,
      },
    );

    return result;
  }
}
