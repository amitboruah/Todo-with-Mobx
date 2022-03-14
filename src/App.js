import React from 'react'
import {Todo} from './components/Todo'
import Todostore  from './components/TodoStore'

export default function App() {
  return (
  <>
  <Todo todostore={Todostore}/>
  </>
  )
}
