import { renderHook, act, cleanup } from '@testing-library/react-hooks';
import { useUndoState } from '../src';

describe('use undo state should', () => {
	afterEach(cleanup);

	it('keep information in state', async () => {
		const { result } = renderHook(() => useUndoState('DeLorean'));

		expect(result.current[0]).toBe('DeLorean');
	});

	it('roll back state when its needed', async () => {
		const { result } = renderHook(() => useUndoState('DeLorean'));

		act(() => result.current[1]('GoTuFuture'));

		expect(result.current[0]).toBe('GoTuFuture');

		act(() => result.current[2]());

		expect(result.current[0]).toBe('DeLorean');
	});
});
