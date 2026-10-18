import { useReducer } from 'react'

interface Count {
  count: number
}

const initialState: Count = {count:0}

enum Actions {
  DECREMENT = "DECREMENT",
  INCREMENT = "INCREMENT",
  INCREMENT_BY = "INCREMENT_BY",
  RESET = "RESET"
}

interface Action {
  type: string,
  payload?: number
}
const { DECREMENT, INCREMENT, INCREMENT_BY, RESET } = Actions

const actionCreator = (type: string, payload?:number): Action => ({type, payload})

const reducer = (state: Count = initialState, action: Action):Count => {
  switch(action.type){
    case DECREMENT:
      return {...state, count: state.count - 1}
    case INCREMENT:
      return {...state, count: state.count + 1}
    case INCREMENT_BY:
      return {...state, count: state.count + (action.payload ?? 0)}
    case RESET:
      return initialState
    default:
      throw new Error(`${action.type} is unavailable`)
  }
}

const TSCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const denomination: number = 10

  return (
    <div>
      <div>{state.count}</div>
      <button onClick={()=>dispatch(actionCreator(DECREMENT))}>-</button>
      <button onClick={()=>dispatch(actionCreator(INCREMENT))}>+</button>
      <button onClick={()=>dispatch(actionCreator(INCREMENT_BY, denomination))}>+{denomination}</button>
      <button onClick={()=>dispatch(actionCreator(RESET))}>{RESET}</button>
    </div>
  )
}

export default TSCounter