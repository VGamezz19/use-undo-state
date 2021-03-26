# useUndoState

## Example

```js
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
```
