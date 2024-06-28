import { useState, useEffect, useReducer } from 'react'
import './App.css'

import {DecrementAction, IcrementAction, store } from './store'


function App() {

 



  return (
    <>
    
        <p>
          Edit <code>src/App.tsx</code> and save to dfdfdftest HMR
        </p>
      <Counter counterId="first"/><br/>
      <Counter counterId="second"/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}



export function Counter({counterId }: { counterId: CounterId}) {
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
      <div>counter   {store.getState().counters[counterId]?.counter}</div>
      <div className="card">
        <button onClick={() => store.dispatch({ type: 'increment', payload: {counterId}} satisfies IcrementAction)}>
          increment 
        </button>
        <button onClick={() => store.dispatch({ type: 'decrement', payload: {counterId}} satisfies DecrementAction)}>
          decriment
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to dfdfdftest HMR
        </p>
      </div>
    </>
  )
}






export default App
