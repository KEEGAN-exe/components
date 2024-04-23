import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

export const Button = ({ text, color }) => {
  const [colorButton, setColorButton] = useState('')

  useEffect(() => {
    let cl = ''
    switch (color.toLowerCase()) {
      case 'teal':
        cl = 'bg-teal-500/90 hover:bg-teal-500 text-white'
        break
      case 'rose':
        cl = 'bg-rose-500/90 hover:bg-rose-500 text-white'
        break
      case 'emerald':
        cl = 'bg-emerald-500/90 hover:bg-emerald-500 text-white'
        break
      case 'orange':
        cl = 'bg-orange-500/90 hover:bg-orange-500 text-white'
        break
      case 'yellow':
        cl = 'bg-yellow-400 hover:bg-yellow-400/90 text-white'
        break
      case 'neutral':
        cl = 'bg-neutral-800/90 hover:bg-neutral-800 text-white'
        break
      case 'blue':
        cl = 'bg-blue-500/90 hover:bg-blue-500 text-white'
        break
      case 'indigo':
        cl = 'bg-indigo-500/95 hover:bg-indigo-500 text-white'
        break
      default:
        break
    }
    setColorButton(cl)
  }, [color])

  return (
    <button
      className={`w-full ${colorButton} px-2 py-[9px] rounded cursor-pointer transition-all font-semibold my-4`}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}
