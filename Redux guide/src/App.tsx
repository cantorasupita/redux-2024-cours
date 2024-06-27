import { useState, useEffect, useReducer } from 'react'
import './App.css'

import {DecrementAction, IcrementAction, store } from './store'


function App() {

  //de obnovlit UI
  const [, forceUpdate] = useReducer((x) => x + 1 , 0)
  
  //subscribe la redux store
  //
  useEffect(()=>{
    const unsubscribe = store.subscribe(()=>{
      forceUpdate();
    })
    return unsubscribe;//clear component
  },[])



  return (
    <>
      <h1>Vite + React</h1>
      <div>counter   {store.getState().counter}</div>
      <div className="card">
        <button onClick={() => store.dispatch({ type: 'increment'} satisfies IcrementAction)}>
          increment 
        </button>
        <button onClick={() => store.dispatch({ type: 'decrement'} satisfies DecrementAction)}>
          decriment
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to dfdfdftest HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
