import './App.css'

import Input from './components/Input/Input'
import Form from './components/Form/Form'
import InfoCardComponent from './components/InfoCardComponent/InfoCardComponent'

import NavBar from './components/NavBar/NavBar'
import Button from './components/Button/Button'
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions'
import BalancePage from './pages/balance_page'


function App() {
const alertButton = () => {
  alert("123123");
}

const items = [<Button>Cadastrar</Button>, <Button>Registrar</Button>];

  return (
    <>
      {/* Exemplo de implementação. Remover depois de aplicado*/}
      <NavBar items={items}/>

      <Form 
        buttonFunction={alertButton} 
        buttonValue={'Clicar'}
        lowLinkRef='/'
        lowLinkValue='Possui uma conta? Entrar'>
        <Input>Nome Completo</Input>
        <Input>Cpf</Input>
        <Input>Email</Input>
        <Input>Telefone</Input>
      </Form>
      {/* Exemplo de implementação. Remover depois de aplicado*/}
      <div className="infoCardComponent">
        <InfoCardComponent title="Conta corrente" value="5.000,00" />
        <InfoCardComponent title="Investimentos" value="22.652,00"/>
        <InfoCardComponent title="Poupança"value="642,00"/>
      </div>

    </>
  )
}

export default App
