import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const addPerson = (event) => {

    event.preventDefault()

    const newNameObject = {
      name: newName,
      number: newNumber
    }

    // check for duplicates
    const countMatchingPerson = persons.filter(person => person.name === newName).length
    countMatchingPerson === 1 ? alert(`${newName} is already added to phonebook`) : setPersons(persons.concat(newNameObject))

  }

  const handleInputChange = (event) => {
    event.target.id === 'name' ? setNewName(event.target.value) : setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase()
    setSearch(searchTerm)
  }

  const showNumbers = () => {
    
    let numbersObject = persons

    if (search !== '') {
      numbersObject = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    }
  
    return numbersObject.map((person) => <div key={person.name}>{person.name} {person.number}</div>)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input type='text' id='input-search' onChange={handleSearch} /></div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input id='name' onChange={handleInputChange} />
        </div>
        <div>
          number: <input id='number' type="text" onChange={handleInputChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
        <div>debug: {newName}</div>
      </form>
      <h2>Numbers</h2>
      <div>
        {showNumbers()}
      </div>
    </div>
  )
}

export default App
