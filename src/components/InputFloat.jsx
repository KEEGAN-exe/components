import PropTypes from 'prop-types'
import { Eye } from '../assets/Eye'
import { useEffect, useState } from 'react'
import { CloseEye } from '../assets/CloseEye'

export const InputFloat = ({ type, title }) => {
  const [typeState, setTypeState] = useState('')
  const [inputValue, setInputValue] = useState('')
  useEffect(() => {
    setInputValue('')
  }, [])
  useEffect(() => {
    setTypeState(type)
  }, [type])
  return (
    <section className="text-xs leading-6 group w-[300px] my-4 relative">
      <label
        className={`absolute -translate-y-1/2 mx-[4px] bg-neutral-900/95 px-[5px] text-white/60 pointer-events-none ${
          inputValue.length === 0
            ? 'group-focus-within:top-0 group-focus-within:text-white/90 top-1/2'
            : 'text-white/90 top-0 '
        } transition-all duration-[400ms]`}
      >
        {title}
      </label>
      <input
        type={`${typeState}`}
        className={`p-2 outline-none w-full rounded-[3px] text-white/60 transition-all focus:text-white/80 ring-[2px] ring-transparent border-gray-700/35 focus:ring-emerald-500/70 border focus:border-emerald-500 bg-neutral-900/95 duration-[400ms]${
          typeState === 'password' ? 'pr-[40px]' : ''
        }`}
        onChange={(e) => setInputValue(e.target.value)}
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
    </section>
  )
}

InputFloat.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string
}
