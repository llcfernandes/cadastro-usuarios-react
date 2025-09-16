import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import {
  Container,
  ContainerInputs,
  Form,
  Input,
  InputLabel,
} from "./styles";

import UsersImage from "../../assets/users.png";
import DefaultButton from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import DefaultTitle from "../../components/Title";

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
     await api.post("/usuarios", {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,
    });

    navigate("/lista-de-usuarios");
  }

  return (
    <>
      <Container>
        <TopBackground>
          <img src={UsersImage} alt="Imagem Usuários" />
        </TopBackground>

        <Form>
          <DefaultTitle>Cadastrar Usuário</DefaultTitle>

          <ContainerInputs>
            <div>
              <InputLabel>
                Nome <span> *</span>
              </InputLabel>
              <Input
                type="text"
                placeholder="Nome do Usuário"
                ref={inputName}
              />
            </div>

            <div>
              <InputLabel>
                Idade <span> *</span>
              </InputLabel>
              <Input
                type="number"
                placeholder="Idade do Usuário"
                ref={inputAge}
              />
            </div>
          </ContainerInputs>

          <div style={{ width: "100%" }}>
            <InputLabel>
              Email <span> *</span>
            </InputLabel>
            <Input
              type="email"
              placeholder="E-mail do Usuário"
              ref={inputEmail}
            />
          </div>

          <DefaultButton type="button" onClick={registerNewUser} theme="primary">
            Cadastrar Usuário
          </DefaultButton>

          <DefaultButton type="button" onClick={()=> navigate("/lista-de-usuarios")}>
            Ver Lista de Usuários
          </DefaultButton>
        </Form>
      </Container>
    </>
  );
}

export default Home
