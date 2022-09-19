const Persons = ({ personsToShow }) => {
    return (
        <ul>
        {personsToShow.map(each => 
          <li key={each.name}>{each.name} {each.number}</li>
        )}
      </ul>
    )
}

export default Persons