import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

export const Label = ({ text, position, color }) => {
  const [positionLabel, setPositionLabel] = useState('')
  const [colorLabel, setColorLabel] = useState('')
  useEffect(() => {
    let ps = ''
    let cl = ''
    switch (position) {
      case 'start':
        ps = 'text-start'
        break
      case 'center':
        ps = 'text-center'
        break
      case 'end':
        ps = 'text-end'
        break
      default:
        ps = 'text-start'
        break
    }

    switch (color) {
      case 'teal':
        cl = 'hover:text-teal-400'
        break
      case 'rose':
        cl = 'hover:text-rose-400'
        break
      case 'emerald':
        cl = 'hover:text-emerald-400'
        break
      case 'orange':
        cl = 'hover:text-orange-400'
        break
      case 'yellow':
        cl = 'hover:text-yellow-400'
        break
      case 'neutral':
        cl = 'hover:text-neutral-400'
        break
      case 'blue':
        cl = 'hover:text-blue-400'
        break
      case 'indigo':
        cl = 'hover:text-indigo-400'
        break
      default:
        cl = 'hover:text-inherit'
        break
    }
    setColorLabel(cl)
    setPositionLabel(ps)
  }, [position, color])
  return (
    <div className={`w-full ${positionLabel} text-xs mt-2 ${colorLabel}`}>
      <label className="w-full cursor-pointer transition-all">{text}</label>
    </div>
  )
}

Label.propTypes = {
  text: PropTypes.string,
  position: PropTypes.string,
  color: PropTypes.string
}
