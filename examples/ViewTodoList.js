import { useCallback, useState } from 'react';
import { useUndoState } from '../src';

function useTodoList() {
	const [list, setList, rollbackList] = useUndoState([]);

	const addElementToList = useCallback(
		async (element) => {
			try {
				setList((prevList) => [...prevList, element]);
				await fetch(element); //simulating a put/post/etc
			} catch (error) {
				rollbackList();
				console.error(error);
			}
		},
		[setList, rollbackList]
	);

	return { list, addElementToList };
}

export function ViewTodoList() {
	const { list, addElementToList } = useTodoList(['potatoes']);
	const [text, setText] = useState('');

	function handleInput({ target }) {
		setText(target.value);
	}

	return (
		<>
			<input onChange={handleInput} value={text} />
			<button onClick={() => addElementToList(text)}>Add Element</button>

			<ul>
				{list.map((el, i) => (
					<li key={i}>{el}</li>
				))}
			</ul>
		</>
	);
}
