import { useReducer } from 'react';

interface CounterState {
  changes: number;
  counter: number;
  previous: number;
}

const INITIAL_STATE: CounterState = {
  changes: 0,
  counter: 10,
  previous: 10,
};

// Definiendo los tipos de los valores de las acciones de un reducer
type CounterAction =
  | { type: 'increaseBy'; payload: { value: number } }
  | { type: 'reset' };

// Creacion del reducer
const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  const { counter, changes } = state;

  switch (action.type) {
    case 'reset':
      return {
        changes: 0,
        counter: 0,
        previous: 0,
      };
    case 'increaseBy':
      return {
        changes: changes + 1,
        counter: counter + action.payload.value,
        previous: state.counter,
      };
    default:
      return state;
  }
};

export const CounterReducer = () => {
  const [CounterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  const increaseBy = (value: number) => {
    dispatch({ type: 'increaseBy', payload: { value } });
  };

  return (
    <>
      <h1>Counter Reducer:</h1>
      <pre>{JSON.stringify(CounterState, null, 2)}</pre>

      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
