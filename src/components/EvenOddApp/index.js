import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  handleIncrement = () => {
    const randomValue = Math.floor(Math.random() * 100)
    this.setState(prevState => ({
      count: prevState.count + randomValue,
    }))
  }

  render() {
    const {count} = this.state
    const isEven = count % 2 === 0

    return (
      <div className="container">
        <h1>Count {count}</h1>
        {isEven ? (
          <p className="paragraph1">Count is Even</p>
        ) : (
          <p className="paragraph1">Count is Odd</p>
        )}
        <button className="button" type="button" onClick={this.handleIncrement}>
          Increment
        </button>
        <p className="paragraph">*Increase by Random number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
