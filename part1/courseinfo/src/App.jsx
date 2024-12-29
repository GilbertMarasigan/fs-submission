

const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({course}) => {
  return(
    course.parts.map((part) => <p key={part.id}>{part.part} {part.exercises}</p>)
  )
}

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  console.log('totalExercises', totalExercises);
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <p style={{fontWeight: "bold"}}>total of {totalExercises} exercises</p>
    </div>
  )
}

const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        part: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        part: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        part: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        part: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App