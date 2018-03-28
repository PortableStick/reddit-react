import { rootReducer, initialState } from '../../src/reducers';

describe('RootReducer', () => {
  it('should return the initial state when nothing is passed', () => {
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });
});
