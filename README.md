

<div align="center">
  <h1>
    :hourglass:
    <br/>
    use-undo-state
  </h1>
    <p> Rollback your state</p>
  
</div>

## Description

A simple hook to rollback your state, and stand at your previous modified state.

## Usage

```js
import {useUndoState} from 'use-undo-state';

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
  }, [setList, rollbackList]);

 return { list, addElementToList };
}
```

You could check [this example](https://github.com/VGamezz19/use-undo-state/blob/main/examples/ViewTodoList.js)
