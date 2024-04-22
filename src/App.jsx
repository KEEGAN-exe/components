import { Input } from './components/Input'
import { InputFloat } from './components/InputFloat'

function App() {
  return (
    <>
      {/* 
        A diferencia del componente Input, este recibe solo 2 parámetros: title y type.
        El título actúa como un label que inicialmente aparece como placeholder.
        Cuando el input obtiene el foco, el título se desplaza a la parte superior del input.
        El título permanece en la parte superior cuando el input tiene valores.
      */}
      <InputFloat title="Username" type="text" />
      <InputFloat title="Password" type="password" />
    </>
  )
}

export default App
