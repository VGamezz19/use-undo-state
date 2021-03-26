<div align="center">
  <h1>
    <br/>
    <br/>
    :hourglass:
    <br />
    <br/>
    use-undo-state
  </h1>
    <p> Rollback your state</p>
    <br />
    <br />
    <pre>>  npm i <a href="https://www.npmjs.com/package/use-undo-state">use-undo-state</a> / >  yarn <a href="https://www.npmjs.com/package/use-undo-state">use-undo-state</a></pre>
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
