import { useEffect, useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'
import PropTypes from 'prop-types'
import { Label } from './Label'

export const Form = ({ title, size }) => {
  const [formSize, setFormSize] = useState('')

  useEffect(() => {
    let sz = ''
    switch (size) {
      case 'sm':
        sz = 'w-[300px]'
        break
      case 'md':
        sz = 'w-[350px]'
        break
      case 'lg':
        sz = 'w-[400px]'
        break
      case 'xl':
        sz = 'w-[450px]'
        break
      default:
        break
    }
    setFormSize(sz)
  }, [size])
  return (
    <form
      className={`${formSize} flex justify-center items-center flex-col p-3 font-mono`}
    >
      <h1
        className={`${
          title === undefined ? 'hidden' : ''
        } text-center w-full mb-6 text-xl`}
      >
        {title}
      </h1>
      <Label text="Username" />
      <Input placeholder="Username" color="rose" />
      <Label text="Password" />
      <Input placeholder="Password" type="password" color="rose" />
      <Label text="¿Olvidate tu contaseña?" position="end" color="rose" />
      <Button text="Iniciar Sesion" color="rose" />
    </form>
  )
}

Form.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string
}
