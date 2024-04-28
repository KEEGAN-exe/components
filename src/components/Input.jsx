import PropTypes from 'prop-types'
import { Eye } from '../assets/Eye'
import { useEffect, useState } from 'react'
import { CloseEye } from '../assets/CloseEye'

export const Input = ({ placeholder, type, title, color }) => {
  const [typeState, setTypeState] = useState('')
  const [colorInput, setColorInput] = useState('')

  useEffect(() => {
    setTypeState(type)
  }, [type])

  useEffect(() => {
    let cl = ''
    switch (color) {
      case 'teal':
        cl = 'focus:ring-teal-500/70 focus:border-teal-500'
        break
      case 'rose':
        cl = 'focus:ring-rose-500/70 focus:border-rose-500'
        break
      case 'emerald':
        cl = 'focus:ring-emerald-500/70 focus:border-emerald-500'
        break
      case 'orange':
        cl = 'focus:ring-orange-500/70 focus:border-orange-500'
        break
      case 'yellow':
        cl = 'focus:ring-yellow-400/70 focus:border-yellow-400'
        break
      case 'neutral':
        cl = 'focus:ring-neutral-800/70 focus:border-neutral-800'
        break
      case 'blue':
        cl = 'focus:ring-blue-500/70 focus:border-blue-500'
        break
      case 'indigo':
        cl = 'focus:ring-indigo-500/80 focus:border-indigo-500 text-white'
        break
      default:
        cl = 'focus:ring-inherit/70 focus:border-inherit'
        break
    }
    setColorInput(cl)
  }, [color])

  return (
    <section className="text-xs leading-6 group w-full my-2">
      <label
        className={`${
          placeholder === undefined ? 'block' : 'hidden'
        } text-white text-xs px-[1px]`}
      >
        {title}
      </label>
      <div className="relative">
        <input
          type={`${typeState}`}
          className={`p-2 outline-none w-full rounded-[3px] text-white/60 transition-all focus:text-white/80 ring-[2px] ring-transparent border-gray-700/35 ${colorInput} border  bg-neutral-900/95 duration-[400ms]${
            typeState === 'password' ? 'pr-[40px]' : ''
          }`}
          placeholder={placeholder}
        />
        <span
          className={`${
            type !== 'password' ? 'hidden' : 'block'
          } bg-neutral-800/60 hover:bg-neutral-800/90 absolute top-1/2 -translate-y-1/2 right-[1px] h-[calc(100%-2px)] flex justify-center items-center rounded-r-sm border-transparent px-2 cursor-pointer transition-all`}
          onClick={() =>
            setTypeState(typeState === 'password' ? 'text' : 'password')
          }
        >
          {typeState === 'password' ? <Eye /> : <CloseEye />}
        </span>
      </div>
    </section>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  color: PropTypes.string
}
