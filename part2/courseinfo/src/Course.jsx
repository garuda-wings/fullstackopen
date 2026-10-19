
const Header = () => {
  return <h1 style={{ fontWeight: 'bold' }}>Web development curriculum</h1>
}

const Part = ({ part}) => {
  return (
    <p id={part.id} >{part.name}: {part.exercises}</p>
  )
}

const Content = ({ courses }) => {

  console.log(courses)
  return (
    <div>
      {courses.map(c => {
        return (
          <div key={c.id}>
            <h2>{c.name}</h2>
            {c.parts.map(part => <Part key={part.id} part={part} />)}
          </div>
        )
      })}
    </div>
  )
}

const Total = ({ courses }) => {
  const totalExercise = courses.reduce((sum, course) => sum + course.parts.reduce((s, part) => s + part.exercises, 0), 0)
  return <p style={{fontWeight: 'bold'}}> total of {totalExercise} exercises </p>
}

const Course = ({ courses }) => {
  return (
    <div>
      <Header />
      <Content courses={courses} />
      <Total courses={courses}/>
    </div>
  )
}


export default Course;