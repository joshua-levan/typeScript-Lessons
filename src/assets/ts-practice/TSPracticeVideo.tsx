// basic types
let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean =true;
let level;

const render = (level: string) => level

level = 'high'

//arrays
let numbers: number[] = [1,2,3]


const TSPracticeVideo = () => {
  return (
    <div>
      {/* <a href="https://www.youtube.com/watch?v=d56mG7DezGs">Mosh Tutorial</a> */}
      {/* ======basic types====== */}
      <p>{sales}</p>
      <p>{course}</p>
      <p>{is_published ? 'published' : 'not published'}</p>
      <p>{render(level)}</p>
      {/* ======arrays====== */}
      {numbers.map(num => <p>{num}</p>)}

    </div>
  )
}

export default TSPracticeVideo