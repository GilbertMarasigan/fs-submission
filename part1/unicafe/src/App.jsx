import { useState } from 'react'

const Header = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Stat = ({ feedback }) => {

  const sum = Object.values(feedback).reduce((acc, value) => acc + value, 0)
  const average = sum / 3
  const positive = (sum !== 0) ? (feedback.good / sum) * 100 : null

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{feedback.good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{feedback.neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{feedback.bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{sum}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{positive} %</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

function App() {

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleGoodFeedback = () => {
    const newFeedback = {
      ...feedback,
      good: feedback.good + 1
    }
    setFeedback(newFeedback)
  }

  const handleNeutralFeedback = () => {
    const newFeedback = {
      ...feedback,
      neutral: feedback.neutral + 1
    }
    setFeedback(newFeedback)
  }

  const handleBadFeedback = () => {
    const newFeedback = {
      ...feedback,
      bad: feedback.bad + 1
    }
    setFeedback(newFeedback)
  }

  return (
    <>
      <Header title='give feedback' />
      <Button handleClick={handleGoodFeedback} text='good' />
      <Button handleClick={handleNeutralFeedback} text='neutral' />
      <Button handleClick={handleBadFeedback} text='bad' />
      <Header title='statistics' />
      <Stat feedback={feedback} />
    </>
  )
}

export default App
