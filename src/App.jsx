import { Input } from './components/Input'

function App() {
  return (
    <>
      {/* El componente Input recibe 3 parámetros: type, placeholder y title. No se pueden haber simultáneamente un title y un placeholder. Si el type se establece como "password", se mostrará un botón para ver la contraseña. */}
      <Input type="text" placeholder="Username" />
      <Input type="password" title="Password" />
    </>
  )
}

export default App
