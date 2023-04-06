import './App.css'

import Input from './components/Input/Input'
import Form from './components/Form/Form'
import InfoCardComponent from './components/InfoCardComponent/InfoCardComponent'

import NavBar from './components/NavBar/NavBar'
import Button from './components/Button/Button'
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions'
import BalancePage from './pages/balance_page'
import Register from './pages/register'
import TransferPage from './pages/transfer_page/TransferPage'

function App() {
const alertButton = () => {
  alert("123123");
}

const items = [<Button key="1" label="Cadastre-se" backgroundColor={"var(--secondary-color)"} hover={"var(--primary-color-light)"} click={() => {alert('1')}} width={""} />,
              <Button key="1" label="Login" backgroundColor={"var(--primary-color-light)"} hover={"var(secondary-color)"} click={() => {alert('1')}} width={"100px"} />];

  return (
    <>

      {/* <BalancePage /> */}

      {/* <Register /> */}

      <TransferPage />

    </>
  )
}

export default App
