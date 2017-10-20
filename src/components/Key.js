import React from 'react'
import PropTypes from 'prop-types'

function Key({ activeKey, item, handleClick, handleActiveEnd }) {
  return (
    <div
      className={`key${activeKey === item.code ? ' playing' : ''}`}
      onClick={() => handleClick(item)}
      onTransitionEnd={handleActiveEnd}
    >
      <kbd>{item.name}</kbd>
      <span className="sound">{item.sound}</span>
    </div>
  )
}

Key.propTypes = {
  item: PropTypes.object.isRequired,
  activeKey: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleActiveEnd: PropTypes.func.isRequired
}

export default Key
