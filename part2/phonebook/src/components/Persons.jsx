
const Filter = ({ filter, handleChangeFilter }) => (
    <div>
        filter shown with <input value={filter} onChange={handleChangeFilter} />
    </div>
)

const PersonForm = ({
    newName,
    newNumber,
    handleChangeName,
    handleChangeNumber,
    addName
}) => (
    <form onSubmit={addName}>
        <div style={{ paddingBottom: '10px' }}>  name: <input value={newName} onChange={handleChangeName} />        </div>
        <div style={{ paddingBottom: '10px' }}> number: <input value={newNumber} onChange={handleChangeNumber} /> </div>
        <div> <button type="submit">add</button> </div>
    </form>
)

const Persons = ({ persons }) => (
   <ul>
    {persons.map(person => (
      <li key={person.id}>
        {person.name} — {person.number}
      </li>
    ))}
  </ul>
)



export {
    Filter,
    PersonForm,
    Persons
} 