// This documentation comes from React.

// Unlike the class component setState, the updates are not allowed to be partial
declare type SetStateAction<S> = S | ((prevState: S) => S);
/**
 * Returns a stateful value, and a function to update it.
 *
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#usestate
 */
declare function useUndoState<S>(
	initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>];

export { useUndoState };
