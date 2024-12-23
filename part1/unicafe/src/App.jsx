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
  console.log(feedback)
  return (
    <>
      <div>
        good {feedback.good}
      </div>
      <div>
        neutral {feedback.neutral}
      </div>
      <div>
        bad {feedback.bad}
      </div>
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
