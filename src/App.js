import React from 'react';
import Student from './components/Student'

/*const students = [
  { id: 1234, name: 'test' },
  { id: 12345, name: 'test2' },
  { id: 12346, name: 'test3' },
];*/

const App = () => {
  const [ students, setStudents ] = React.useState([])
  const [ error, setError ] = React.useState(null)

  React.useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setStudents(json))
        .catch(err => setError(err.message))
    }
  )

  return (
    error
      ? <span>{ error }</span>
      : <ul>
          { students.map((student, index) => <Student key={ index.toString() }
                                                      settings={ student }
                                                      index={ index }/>) }
        </ul>
  )
}

export default App;
