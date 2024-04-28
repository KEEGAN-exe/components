import { Form } from './components/Form'

function App() {
  return (
    <>
      {/* El componente recibe 2 parametros: size y title en donde el primero permite los valores {sm,md,lg y xl} y mientras el title sea dado por el usuario este lo creara */}
      <Form title="Iniciar Sesion - EuroCity" size="lg" />
    </>
  )
}

export default App
