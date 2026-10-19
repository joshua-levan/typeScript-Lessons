//arrays
// let numbers: number[] = [1,2,3]
//tuples
let user: [number, string] = [1, 'Mosh']
//tuple arrays
let users: [number, string][] = [[1, 'Mosh'], [2, 'Josh']]

//enums-- **'const enum' will compile more optimized js
enum Size {Small = 1, Medium, Large}
let mySize: Size = Size.Medium

enum Cola {PEPSI = 'Pepsi', COKE = 'COKE', RC_COLA = 'RC Cola'}
let myCola: Cola = Cola.PEPSI

//functions
const logName = (name: string): void => console.log(name)
logName(user[1])

const addNum = (num1: number, num2?: number): number => num2 ? num1 + num2 : num1

//objects
let employee: {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
} = 
{
  id: 1,
  name: 'Mosh',
  retire: (date: Date) => {
    console.log(date)
  }
}

//type aliases/ interface
type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
}

const emoloyeeJosh: Employee = {
  id: 2,
  name: 'Josh',
  retire: (date: Date) => {
    console.log(date)
  }
}

//union types and narrowing
const kgtoLbs = (weight: number | string): number => typeof weight === 'number'? weight * 2.2 : parseInt(weight) * 2.2

//intersection
// type Draggable = {
//   drag: () => void
// }
// type Resizable = {
//   resize: () => void
// }
// type UIWidget = Draggable & Resizable

// let textbox: UIWidget = {
//   drag: () => {},
//   resize: () => {}
// }

//literals
type Quantity = 50 | 100
let quatity: Quantity = 100

type Metric = 'cm' | 'inch'
let metric: Metric = 'inch'

const TSPracticeVideo = () => {
  return (
    <div>
      {/* <a href="https://www.youtube.com/watch?v=d56mG7DezGs">Mosh Tutorial</a> */}

      <hr /><h2>TUPLES</h2>
            <p>{`USER: ${user[1]} ID: ${user[0]}`}</p>

      <hr /><h2>TUPLE ARRAYS</h2>
        {users.map(user => <p key={user[0]}>{`USER: ${user[1]} ID: ${user[0]}`}</p>)}

        <hr /><h2>ENUMS</h2>
        <p>My shirt-size: {mySize}</p>
        <p>my cola: {myCola}</p>

        <hr /><h2>Functions</h2>
        <p>{addNum(10_000,1_234)}</p>
        <p>{addNum(10_000)}</p>

       <hr /><h2>Objects</h2>
        <p>Name: {employee.name} ID: {employee.id}</p>

        <hr /><h2>Aliases</h2>
        <p>Name: {emoloyeeJosh.name} ID: {emoloyeeJosh.id}</p>

        <hr /><h2>Unions and narrowing</h2>
        <p>23kg is {kgtoLbs('23kg')}lbs</p>

        <hr /><h2>Literals</h2>
        <p>Quantity: {quatity} Metric: {metric}</p>

    </div>
    
  )
}

export default TSPracticeVideo