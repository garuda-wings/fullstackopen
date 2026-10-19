import { useState } from 'react'
import { Filter, PersonForm,Persons } from './components/Persons'

const App = () => {
   const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person =>person.name === newName)
    if(newName.trim() === '' || newNumber.trim() === '') {
      alert('Name and number fields cannot be empty!')
      return;
    }
    
    if (nameExists) {
      alert(`${ newName } is already added in  the phonebook!`)
      return;
    }

    const generateId = () => {
        const maxId = persons.length > 0
          ? Math.max(...persons.map(n => n.id))
          : 0
      return maxId + 1
    }

    const nameObject = {
      name: newName,
      id: generateId(),
      number: newNumber
    }
    setPersons(previousPersons => previousPersons.concat(nameObject))
    setNewName('')
    setNewNumber('')
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

  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  )
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleChangeFilter={handleChangeFilter}/>
      <h2>add a new contact</h2>
      <PersonForm  
        newName={newName} 
        newNumber={newNumber} 
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
        addName={addName}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons}/>
      
    </div>
  )
}

export default App