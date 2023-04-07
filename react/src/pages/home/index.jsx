import React from "react";
import Logo from "../../assets/img/logotipo.svg"
import Button from "../../components/Button/Button"
import styles from "./styles.css";
import imagem from "../../assets/card-image-home.svg"

function HomePage() {
    return (
      <html>
        <head>
          <title>Home Page</title>
        </head>
        <body> 
            <div className="home-header">
                <div className="div-image">
                <img src={Logo} alt="Logotipo" />
                </div>
                <div className="home-button">
                    <Button label="Cadastre-se" onClick />
                    <Button label="Login" onClick />
                </div>
            </div>    
            <div className="home-container">
                <div>
                    <div className="imagem-principal">
                        <h3>Abra já a sua conta e ganhe o seu azulzinho.</h3>
                        <p>Cartão de crédito com anuidade zero. Conta digital prática e sem custos. Rende mais que a poupança, sem taxa de manutenção nem tarifas escondidas. Moderno, simples e gratuito. Tudo para deixar o controle com você. Use o Pix para fazer pagamentos e transferências instantâneas a qualquer hora. Sem burocracia e sem custo, do jeito ImaPay.</p>
                        <Button label="Clique aqui para saber mais" onClick />
                    </div>
                </div>
                <div class="img-card"><img src={imagem} alt="" /></div>
            </div>  
        </body>
    </html>
);
}
  
  
  
  export default HomePage;