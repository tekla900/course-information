import { useState } from 'react'

const Header = ({ header }) => (
    <h1>{header}</h1>
)

const Button = ({ handleEvent, text }) => (
  <button onClick={handleEvent}>
    {text}
  </button>
)

const Stats = ({ name, quantity }) => (
  <p>{name} {quantity}</p>
)

const Statistics = ({ good, neutral, bad }) => {
  const allRating = good + neutral + bad;

  if (!allRating) {
    return (<p>No feedback given</p>)
  }
  return (
    <div>
      <Stats name="good" quantity={good} />
      <Stats name="neutral" quantity={neutral} />
      <Stats name="bad" quantity={bad} />
      <Stats name="all" quantity={allRating} />
      <Stats name="average" quantity={(good - bad)/allRating} />
      <Stats name="positive" quantity={good/allRating*100} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGood = () => {
    setGood(good + 1);
  }

  const handleNeutral= () => {
    setNeutral(neutral + 1);
  }

  const handleBad= () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <Header header={'give feedback'} />
      <Button handleEvent={handleGood} text="good" />
      <Button handleEvent={handleNeutral} text="neutral" />
      <Button handleEvent={handleBad} text="bad" />

      <Header header={'statistics'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App