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
        const matchedPerson = persons.find(person => person.name === newName)

        if (matchedPerson) {
            if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
                const updatePerson = {
                    ...matchedPerson,
                    number: newNumber
                }

                personService
                    .replaceNumber(matchedPerson.id, updatePerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(person => 
                            person.id === updatePerson.id
                                ? returnedPerson : person
                        ))
                        setNewName('')
                        setNewNumber('')
                    })
            }
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