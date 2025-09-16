import { useEffect, useState } from "react"
import DefaultButton from "../../components/Button";
import api from "../../services/api"
import TopBackground from "../../components/TopBackground"
import DefaultTitle from "../../components/Title"
import { AvatarUser, CardUsers, Container, ContainerUsers, TrashIcon } from "./styles";
import Trash from "../../assets/trash.svg"
import { useNavigate } from "react-router-dom";

function ListUsers() {

const navigate = useNavigate()

const [users, setUsers] = useState([])
  useEffect(()=>{
    async function getUsers() {
      const { data } = await api.get("/usuarios")

      setUsers(data)
    }
    getUsers()

  }, [])

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)

    const updatedUsers = users.filter( user => user.id !== id)

    setUsers(updatedUsers)
  }


  
  return (
    <Container>
      <TopBackground />

      <DefaultTitle>Lista de Usuários</DefaultTitle>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers>
            <AvatarUser
              src={`https://avatar.iran.liara.run/public?username=${user.id}`}
            />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>

            <TrashIcon src={Trash} onClick={() => deleteUsers(user.id)} />
          </CardUsers>
        ))}
      </ContainerUsers>

      <DefaultButton type="button" onClick={() => navigate("/")}>
        Voltar
      </DefaultButton>
    </Container>
  );
}

export default ListUsers
