import { useState } from "react"
import personService from "../services/persons"

const PersonForm = ({ persons, setPersons }) => {

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
        if (countMatchingPerson === 1) {
            alert(`${newName} is already added to phonebook`)
        }
        else {

            // add to server
            personService
                .create(newNameObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                })
                
        }

    }

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input id='name' value={newName} onChange={handleInputChange} />
            </div>
            <div>
                number: <input id='number' value={newNumber} type="text" onChange={handleInputChange} />
            </div>
            <div>
                <button type='submit'>add</button>
            </div>
        </form>
    )
}

export default PersonForm