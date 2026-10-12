import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (

    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>

  )



}

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={good + neutral + bad} />
        <StatisticLine text="average" value={(good - bad) / (good + bad + neutral) || 0} />
        <StatisticLine text="positive" value={((good) / (good + neutral + bad)) * 100 + " %"} />
      </tbody>
    </table>
  )
}

const Button = ({ text, onClickHandler }) => {
  return (
    <button onClick={onClickHandler}>{text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClickHandler={() => setGood(good + 1)} text='good' />
      <Button onClickHandler={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClickHandler={() => setBad(bad + 1)} text='bad' />
      <p style={{ padding: '10px' }}></p>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App