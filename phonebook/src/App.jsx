import { useState } from 'react'

const Persons = ({ persons, search }) => {

  let numbersObject = persons

  if (search !== '') {
    numbersObject = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
  }

  return numbersObject.map((person) => <div key={person.name}>{person.name} {person.number}</div>)
}

const Filter = ({ search, setSearch }) => {

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase()
    setSearch(searchTerm)
  }

  return (<div>filter shown with <input type='text' id='input-search' onChange={handleSearch} /></div>)
}

const PersonForm = ({persons, setPersons}) => {

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleInputChange = (event) => {
    event.target.id === 'name' ? setNewName(event.target.value) : setNewNumber(event.target.value)
  }


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

  return (
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
    </form>
  )
}

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [search, setSearch] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} setSearch={setSearch} />
      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={persons} search={search} />
    </div>
  )
}

export default App
