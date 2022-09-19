import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');

  const addPerson = (event) => {
    event.preventDefault()

    const found = persons.find(element => element.name.toLowerCase() === newName.toLowerCase());

    if (found) {
      alert(`${newName} is already added in phonebook`);
      setNewName('');
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      };
  
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber('');
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearch = (event) => {
    setNewSearch(event.target.value);
    console.log(event.target.value);
  }

  const personsToShow = persons.filter(each => {
    if (each.name.toLowerCase().includes(newSearch.toLowerCase())) {
      return each;
    }
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <input value={newSearch} onChange={handleSearch} />
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
                  onChange={handleNameChange}
                />
        </div>  
        <div>
          number: <input value={newNumber}
                    type='tel'
                    onChange={handleNumberChange}
                  />
        </div>   
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(each => 
          <li key={each.name}>{each.name} {each.number}</li>
        )}
      </ul>
    </div>
  )
}

export default App