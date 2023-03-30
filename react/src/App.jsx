
import './App.css'

import Input from './components/Input/Input'
import Form from './components/Form/Form'

function App() {
const alertButton = () => {
  alert("123123");
}

  return (
    <div>
      <Form buttonFunction={alertButton} buttonValue={'Clicar'}>
        <Input>Nome Completo</Input>
        <Input>Cpf</Input>
        <Input>Email</Input>
        <Input>Telefone</Input>
      </Form>
    </div>
  )
}

export default App
