
import './App.css'

import Input from './components/Input/Input'
import Form from './components/Form/Form'
import TopTitle from './components/TopTitle/TopTitle'

function App() {
const alertButton = () => {
  alert("123123");
}

const styleTopTitle = {
  left: '200px',
  top: '0px',
  fontSize: '1.7rem',
}

const styleSubtitle = {
  left: '94px',
  top: '49px',
  fontSize: '1.3rem',
}

  return (
    <div>
      <div>
        <TopTitle title="Bom dia, Ana!" subtitle="Saldo atual:" styleTitle={ styleTopTitle } styleSubtitle={ styleSubtitle } />
      </div>
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
