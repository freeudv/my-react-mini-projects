import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Key } from 'components'

class Drum extends Component {
  state = {
    keys: this.props.keys,
    audioSource: 'clap',
    activeKey: 0
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown)
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
  }

  playSound = key => {
    const audio = this.audioPlayer
    audio.currentTime = 0
    this.setState({ audioSource: key.sound, activeKey: key.code }, () =>
      audio.play()
    )
  }

  handleKeydown = event => {
    const keys = this.state.keys
    const pressedKey = keys.find(key => key.code == event.keyCode)
    if (pressedKey) this.playSound(pressedKey)
  }

  handleActiveEnd = event => {
    if (event.propertyName === 'transform') this.setState({ activeKey: 0 })
  }

  render() {
    const { keys, activeKey, audioSource } = this.state

    return (
      <main>
        <h2 className="main__title">DRUM</h2>
        <div className="keys">
          {keys.map(item => (
            <Key
              key={item.code}
              activeKey={activeKey}
              item={item}
              handleClick={this.playSound}
              handleActiveEnd={this.handleActiveEnd}
            />
          ))}
          <audio
            src={`sounds/${audioSource}.wav`}
            ref={audio => (this.audioPlayer = audio)}
          />
        </div>
      </main>
    )
  }
}

Drum.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Drum
