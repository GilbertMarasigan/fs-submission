import { useState } from "react"

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const MostVotes = ({ anecdotes, points }) => {

  const sumOfPoints = Object.values(points).reduce((acc, value) => acc + value, 0)

  if (sumOfPoints !== 0) {

    const highestScorer = Object.entries(points).reduce((max, [index, score]) => {
      return score > max.score ? { index, score } : max;
    }, { index: '', score: -Infinity });

    console.log(`highestScorer index: ${highestScorer.index}`)
    console.log(`highestScorer score: ${highestScorer.score}`)

    return (
      <>
        <h1>Anecdote with most votes</h1>
        <div>{anecdotes[highestScorer.index]}</div>
        <div>has {highestScorer.score} votes</div>
      </>
    )
  }

}


const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when daignosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const maxNumber = anecdotes.length
  const initialPoints = Array.from({ length: maxNumber }, (_, index) => index).reduce((acc, index) => {
    acc[index] = 0;
    return acc;
  },
    {})

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(initialPoints)

  console.log('points: ', points)

  const randomIndex = () => {
    const randomNumber = Math.floor(Math.random() * (maxNumber - 0) + 0);
    setSelected(randomNumber)
    console.log('showing', randomNumber)
  }

  const handleVote = () => {
    console.log('vote pressed for', selected);
    const newVote = {
      ...points,
      [selected]: points[selected] + 1
    }
    setPoints(newVote)
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <div>
        <Button handleClick={handleVote} text='vote' />
        <Button handleClick={randomIndex} text='next anecdote' />
      </div>
      <MostVotes anecdotes={anecdotes} points={points} />
    </div>
  )
}

export default App
