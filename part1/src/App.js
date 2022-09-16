// const Header = (props) => {
//   return (
//     <h1>{props.course.name}</h1>
//   )
// }

// const Part = (props) => {
//   return (
//     <p>{props.part} {props.exercises}</p>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
//       <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
//       <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
//     </div>
//   )
// }

// const Total = (props) => {
//   const sum = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
//   return (
//     <p>Number of exercises {sum}</p>
//   )
// }


// const App = () => {

//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }


//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//     </div>
//   )
// }

import { useState } from "react"

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}

export default App