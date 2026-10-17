//array
const fruit: string[] = ['🍎 apples', '🍊 oranges', '🍌 bananas']

//tuple
const person: [string, number, string] = ['Josh', 41, 'developer']

//tuple array
const coordinates : [number, number][] = [[1,2],[1,4]]

//literal
let direction: '▲ north' | '▼ south' | '▶ east' | '◀ west'
direction = '▲ north'

//Numeric Enum (Enumeration)
enum Size {
  Small = 1,
  Medium,
  Large
}

let size: Size = Size.Large

//String Enum
enum Cola {
  Pepsi = 'PEPSI',
  Coke = 'COKE',
  DietCoke = 'DIET COKE'
}

let cola: Cola = Cola.Coke

const TSExample = () => {
  return (
    <>
      {/* <a href="https://www.youtube.com/watch?v=iJkaAJUzeWQ&t=827s">TypeScript Full Course</a> */}
      <h1>Fruit</h1>
      {fruit.map(fruit => <h2>{fruit}</h2>)}
      <h1>Person</h1>
      {person.map(attr => <h2>{attr}</h2>)}
      <h1>Coordinates</h1>
      {coordinates.map(cood => <h2>{`${cood[0]} X and ${cood[1]} Y`}</h2>)}
      <h1>Direction</h1>
      <h2>{direction}</h2>
      <h1>Size</h1>
      <h2>{size}</h2>
      <h1>Cola</h1>
      <h2>{cola}</h2>
    </>
  )
}

export default TSExample