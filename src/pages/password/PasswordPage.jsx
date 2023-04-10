import { React, useState, useRef } from "react";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import NavBar from "../../components/NavBar/NavBar";
import InfoCardComponent from "../../components/InfoCardComponent/InfoCardComponent";

import "../../App.css";
import "./PasswordPage.css";
const PasswordPage = () => {
  const [recoveryEmail, setRecovertyEmail] = useState("");

  const alertInvalidFields = useRef();

  const items = [
    <Button
      label={"Cadastre-se"}
      width={""}
      backgroundColor={"var(--secondary-color)"}
      click={() => {
        alert("Cadastre-se");
      }}
      hoverColor={"var(--primary-color)"}
      leaveColor={"var(--secondary-color)"}
    />,
    <Button
      label={"Login"}
      width={""}
      backgroundColor={"var(--primary-color)"}
      click={() => {
        alert("Login");
      }}
      hoverColor={"var(--secondary-color)"}
      leaveColor={"var(--primary-color)"}
    />,
  ];

  return (
    <div>
      <NavBar items={items} />

      <div className="form-box">
        <Form
          title={"Recuperação de senha"}
          buttonValue={"Enviar"}
          buttonWidth={"90%"}
          gradient={true}
          handleSubmit={(event) => {
            event.preventDefault();
            if (!recoveryEmail) {
              alertInvalidFields.current.innerText =
                "Tipo da conta não informado";
              return;
            }
            
          }}
        >
          <p className="alert-invalid-fields" ref={alertInvalidFields}></p>
          <h3 className="form-h3">
            Forneça o E-mail cadastrado e enviaremos o código para alterar a
            senha
          </h3>
          <div className="form-input">
            <Input
              type={"text"}
              value={recoveryEmail}
              onChange={(e) => {
                setRecovertyEmail(e.target.value);
              }}
            >
              E-mail
            </Input>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PasswordPage;
