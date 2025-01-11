import { useEffect, useState } from 'react'
import personService from './services/persons'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const [search, setSearch] = useState('')

  const handleDelete = (person) => {
    console.log('handleDelete of id: ', person.id)
    if (window.confirm(`Delete ${person.name}`)) {
      personService
        .deletePerson(person.id)
        .then(returnedData => {
          console.log('returnedData.id',returnedData.id)
          setPersons(persons.filter(person => person.id !== returnedData.id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setSearch={setSearch} />
      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={persons} search={search} handleDelete={handleDelete} />
    </div>
  )
}

export default App
