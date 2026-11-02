import { useState, useEffect } from 'react'
// import axios from 'axios'
import { Filter, PersonForm, Persons } from './components/Persons.jsx'
import contactService from './services/persons.js'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  useEffect(() => {
    contactService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()

    const trimmedName = newName.trim()
    const trimmedNumber = newNumber.trim()

    if (trimmedName === '' || trimmedNumber === '') {
      alert('Name and number fields cannot be empty!')
      return
    }

    const existingPerson = persons.find(
      person => person.name.toLowerCase() === trimmedName.toLowerCase()
    )

    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${existingPerson.name} is already added to the phonebook. Replace the old number with a new one?`
      )

      if (confirmUpdate) {
        const updatedPerson = {
          ...existingPerson,
          number: trimmedNumber
        }

        contactService
          .update(existingPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(previousPersons =>
              previousPersons.map(person =>
                person.id === existingPerson.id ? returnedPerson : person
              )
            )

            setNewName('')
            setNewNumber('')
          })
      }

      return
    }

    const nameObject = {
      name: trimmedName,
      number: trimmedNumber
    }

    contactService
      .create(nameObject)
      .then(returnedContact => {
        setPersons(previousPersons => previousPersons.concat(returnedContact))
        setNewName('')
        setNewNumber('')
      })
  }

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleChangeFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleDeleteContact = (id) => {
    const person = persons.find(p => p.id === id)
    const confirmDelete = window.confirm(`Delete ${person.name}?`)

    if (confirmDelete) {
      contactService
        .remove(id)
        .then(() => {
          setPersons(previousPersons => previousPersons.filter(p => p.id !== id)
          )
        })
    }
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleChangeFilter={handleChangeFilter} />
      <h2>add a new contact</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
        addName={addName}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} handleDeleter={handleDeleteContact} />

    </div>
  )
}

export default App