import { useReducer } from 'react';
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/counterReducer';
// import { doIncreaseBy, doReset } from './actions/actions';
// Para evitar hacer multiples importaciones:
import * as actions from './actions/actions';

const INITIAL_STATE: CounterState = {
  changes: 0,
  counter: 10,
  previous: 10,
};

export const CounterReducer = () => {
  const [CounterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch(actions.doReset());
  };

  const increaseBy = (value: number) => {
    dispatch(actions.doIncreaseBy(value));
  };

  return (
    <>
      <h1>Counter Reducer Segmentado:</h1>
      <pre>{JSON.stringify(CounterState, null, 2)}</pre>

      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
