import React from 'react'

class Clock extends React.Component {
  state = { now: new Date() }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ now: new Date() })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  timeToDegrees(time) {
    return time / 60 * 360 + 90
  }

  renderClockHands = angle => (
    <div className="clock__hand" style={{ transform: `rotate(${angle}deg)` }} />
  )

  render() {
    const { now } = this.state

    const seconds = now.getSeconds()
    const mins = now.getMinutes()
    const hour = now.getHours()

    const secondsDegrees = seconds / 60 * 360
    const minsDegrees = mins / 60 * 360 + seconds / 60 * 6
    const hourDegrees = hour / 12 * 360 + mins / 60 * 30

    return (
      <main>
        <h2 className="main__title">Clock</h2>
        <div className="clock">
          <div className="clock__face">
            {this.renderClockHands(secondsDegrees)}
            {this.renderClockHands(hourDegrees)}
            {this.renderClockHands(minsDegrees)}
          </div>
        </div>
      </main>
    )
  }
}

export default Clock
