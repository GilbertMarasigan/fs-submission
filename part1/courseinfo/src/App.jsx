

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({ course }) => {
  console.log('course: ', course)
  return (
    course.parts.map((part) => <p key={part.id}>{part.name} {part.exercises}</p>)
  )
}

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <p style={{ fontWeight: "bold" }}>total of {totalExercises} exercises</p>
    </div>
  )
}

const App = () => {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  


  return (
    <div>
      {courses.map((course) =>
      <div key={course.id}>
        {<Course course={course} />}
      </div> )}
    </div>
  )
}

export default App