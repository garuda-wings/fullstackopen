const Filter = ({ filter, handleChangeFilter }) => (
    <div className="textos"> 
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
        <div> <button className="btn liquid" type="submit">add</button> </div>
    </form>
)

const Persons = ({ persons, handleDeleter }) => (
   <ul>
    {persons.map(person => (
      <li key={person.id} style={{paddingLeft: '2px'}}>
        {person.name} — {person.number} <button className="btn liquid" onClick={() => handleDeleter(person.id)}> Delete Me</button>
      </li>
    ))}
  </ul>
)



export {
    Filter,
    PersonForm,
    Persons
} 