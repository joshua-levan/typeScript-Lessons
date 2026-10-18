import { act, useReducer } from 'react'

    interface InitialState {
        count:number
    }
    enum Actions {
        DECREMENT = "DECREMENT",
        INCREMENT = "INCREMENT",
        INCREMENT_BY = "INCREMENT_BY",
        RESET = ""
    }
    interface Action {
        type: string,
        payload?: number
    }

    const initialState: InitialState ={count:0}
    const { DECREMENT, INCREMENT, INCREMENT_BY, RESET } = Actions
    const actionCreator = (type: string, payload?:number):Action => ({type, payload})

    const reducer = (state: InitialState = initialState, action: Action):InitialState => {
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
                throw new Error(`${action.type} is not working`)
        }
    }

const TSCounterPractice = () => {


  return (
    <div>TSCounterPractice</div>
  )
}

export default TSCounterPractice