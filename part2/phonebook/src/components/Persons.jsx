const Persons = ({ persons, search }) => {

    let numbersObject = persons

    if (search !== '') {
        numbersObject = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    }

    return numbersObject.map((person) => <div key={person.name}>{person.name} {person.number}</div>)
}

export default Persons