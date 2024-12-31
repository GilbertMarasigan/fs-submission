import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '123-456-789'
     }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {

    event.preventDefault()

    const newNameObject = {
      name: newName,
      number: newNumber
    }

    // check for duplicates
    const countMatchingPerson = persons.filter(person => person.name === newName).length
    countMatchingPerson === 1 ? alert(`${newName} is already added to phonebook`) :     setPersons(persons.concat(newNameObject))

  }

  const handleInputChange = (event) => {
    event.target.id === 'name' ? setNewName(event.target.value) : setNewNumber(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input id='name' onChange={handleInputChange} />
        </div>
        <div>
          number: <input id='number' type="text" onChange={handleInputChange}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
        <div>debug: {newName}</div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => <div key={person.name}>{person.name} {person.number}</div>)}
      </div>
    </div>
  )
}

export default App
