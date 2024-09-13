// Definiendo los tipos de los valores de las acciones de un reducer
export type CounterAction =
  | { type: 'increaseBy'; payload: { value: number } }
  | { type: 'reset' };

// export const doReset = (): CounterAction => {
//   return { type: 'reset' };
// }

// Forma PRO de hacer lo anterior:
export const doReset = (): CounterAction => ({ type: 'reset' });

export const doIncreaseBy = (value: number): CounterAction => ({
  type: 'increaseBy',
  payload: { value },
});
