// basic types
let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean =true;
let level;

const render = (level: string) => level

level = 'high'

//arrays
let numbers: number[] = [1,2,3]
//tuples
let user: [number, string] = [1, 'Mosh']
//tuple arrays
let users: [number, string][] = [[1, 'Mosh'], [2, 'Josh']]

//enums-- **'const enum' will compile more optimized js
enum Size {Small = 1, Medium, Large}
let mySize: Size = Size.Medium

enum Cola {PEPSI = 'Pepsi', COKE = 'COKE', RC_COLA = 'RC Cola'}
let myCola: Cola = Cola.PEPSI

const TSPracticeVideo = () => {
  return (
    <div>
      {/* <a href="https://www.youtube.com/watch?v=d56mG7DezGs">Mosh Tutorial</a> */}
      <h2>BASIC TYPES</h2>
      <p>{sales}</p>
      <p>{course}</p>
      <p>{is_published ? 'published' : 'not published'}</p>
      <p>{render(level)}</p>

      <hr /><h2>ARRAYS</h2>
      {numbers.map(num => <p key={num}>{num}</p>)}

      <hr /><h2>TUPLES</h2>
            <p>{`USER: ${user[1]} ID: ${user[0]}`}</p>

      <hr /><h2>TUPLE ARRAYS</h2>
        {users.map(user => <p key={user[0]}>{`USER: ${user[1]} ID: ${user[0]}`}</p>)}

        <hr /><h2>ENUMS</h2>
        <p>My shirt-size: {mySize}</p>
        <p>my cola: {myCola}</p>
    </div>
  )
}

export default TSPracticeVideo