import { useState } from 'react'

const Header = ({ header }) => (
  <h1>{header}</h1>
)

const Button = ({ handleEvent, text }) => (
  <button onClick={handleEvent}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0]);

  const maxVote = votes.indexOf(Math.max(...votes));

  const generateRandom = () => {
    setSelected(Math.floor((Math.random() * anecdotes.length)));
  }

  const vote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }


  return (
    <div>
      <Header header={'Anecdote of the day'} />
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleEvent={generateRandom} text='next anecdote' />
      <Button handleEvent={vote} text='vote' />

      <Header header={'Anecdote with most votes'} />
      <p>{anecdotes[maxVote]}</p>
    </div>
  )
}

export default App