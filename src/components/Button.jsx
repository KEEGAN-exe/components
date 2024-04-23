import PropTypes from 'prop-types'

export const Button = ({ text }) => {
  return (
    <button className="w-full bg-emerald-600/90 p-2 rounded cursor-pointer transition-all hover:bg-emerald-600 font-semibold my-4">
    {text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string
}
