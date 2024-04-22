import PropTypes from 'prop-types'
import { Eye } from '../assets/Eye'
import { useEffect, useState } from 'react'
import { CloseEye } from '../assets/CloseEye'

export const Input = ({ placeholder, type, title }) => {
  const [typeState, setTypeState] = useState('')
  useEffect(() => {
    setTypeState(type)
  }, [type])

  return (
    <section className="text-sm leading-6 group w-[300px] my-2">
      <label
        className={`${
          placeholder === undefined ? 'block' : 'hidden'
        } text-white text-xs px-[1px]`}
      >
        {title}
      </label>
      <div className='relative my-2'>
        <input
          type={`${typeState}`}
          className={`p-2 outline-none w-full rounded-[3px] text-white/60 transition-all focus:text-white/80 ring-[2px] ring-transparent border-gray-700/35 focus:ring-emerald-500/70 border focus:border-emerald-500 bg-neutral-900/95 duration-[400ms]${
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
  title: PropTypes.string
}
