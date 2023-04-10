import React from "react";

import Button from "../../components/Button/Button"
import NavBar from "../../components/NavBar/NavBar";

import styles from "./styles.css";

import imagem from "../../assets/card-image-home.svg"
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate()
    const items = [<Button
        label={'Cadastre-se'}
        width={''}
        backgroundColor={'var(--secondary-color)'}
        click={() => navigate('/register')}
        hoverColor={'var(--primary-color)'}
        leaveColor={'var(--secondary-color)'}
    />,
    <Button
        label={'Login'}
        width={''}
        backgroundColor={'var(--primary-color)'}
        click={() => navigate('/login')}
        hoverColor={'var(--secondary-color)'}
        leaveColor={'var(--primary-color)'}
    />];

    return (
      <div>
        
                <NavBar items={items} />
            <div className="home-container">
                <div>
                    <div className="imagem-principal">
                        <h3>Abra já a sua conta e ganhe o seu azulzinho.</h3>
                        <p>Cartão de crédito com anuidade zero. Conta digital prática e sem custos. Rende mais que a poupança, sem taxa de manutenção nem tarifas escondidas. Moderno, simples e gratuito. Tudo para deixar o controle com você. Use o Pix para fazer pagamentos e transferências instantâneas a qualquer hora. Sem burocracia e sem custo, do jeito ImaPay.</p>
                        {/* <Button label="Clique aqui para saber mais" onClick /> */}
                        <Button
                            label={'Clique aqui para saber mais'}
                            width={''}
                            backgroundColor={'var(--secondary-color)'}
                            hoverColor={'var(--primary-color)'}
                            leaveColor={'var(--secondary-color)'}
                        />
                    </div>
                </div>
                <div className="img-card"><img src={imagem} alt="" /></div>
            </div>
        <div className="code-breakers">
            <a href="https://github.com/MateusNhoato/ImaPay" alt="GitHub">@CodeBreakers</a>
        </div>
    </div>
);
}
  
  
  
  export default HomePage;