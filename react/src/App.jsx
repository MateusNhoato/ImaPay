
import './App.css'

import Input from './components/Input/Input'
import Form from './components/Form/Form'
import TopTitle from './components/TopTitle/TopTitle'
import InfoCardComponent from './components/InfoCardComponent/InfoCardComponent'

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
      {/* Exemplo de implementação. Remover depois de aplicado*/}
      <div>
        <TopTitle title="Bom dia, Ana!" subtitle="Saldo atual:" styleTitle={ styleTopTitle } styleSubtitle={ styleSubtitle } />
      </div>
      <Form buttonFunction={alertButton} buttonValue={'Clicar'}>
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
    </div>
  )
}

export default App
