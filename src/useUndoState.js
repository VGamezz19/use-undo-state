import { useState, useCallback } from 'react';

export function useUndoState(initial) {
	const [state, setState] = useState(initial);
	const [stateBackup, setStateBackup] = useState(initial);

	const setMixState = useCallback((cb) => {
		setState((prevState) => {
			setStateBackup(prevState);
			return cb instanceof Function ? cb(prevState) : cb;
		});
	}, []);

	const undu = useCallback(() => {
		setState(stateBackup);
	}, [stateBackup]);

	return [state, setMixState, undu];
}
