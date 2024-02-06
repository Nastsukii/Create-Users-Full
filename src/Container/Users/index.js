import React, { useState, useEffect} from 'react'
//                  Todos a cima sao React Hooks
import Avatar from '../../assets/avatar.svg'
import ButtonSeta from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

import H1 from '../../components/title'
import Main from '../../components/Main'

import {
    Box,
    Button,
    Imagem,
    SpanH1,
    User
} from "./styles"


const Users = () => {
    const [users, setUsers] = useState([]);
    const history = useHistory()

    function goBackPage(){
        history.push("/")
    }



    useEffect(()=>{
        async function fetchUsers(){
        const {data:newUsers} = await axios.get("http://localhost:3001/users")
        setUsers(newUsers)
    }   
        fetchUsers()
    },[])
    // UseEffect = Efeito colateral 
    // Chamado quando a pagina inicia
    // Quando o estado que esta no array é mudado

    

    async function deleteUser(userId) {
        await axios.delete(`http://localhost:3001/users/${userId}`)
        const newUsers = users.filter(users => users.id !== userId)
        setUsers(newUsers)
    }
    return (
        <Box>
            <Imagem alt='image-logo' src={Avatar} />
            <Main isBlur={true}>
                <H1><SpanH1>Usuarios!!</SpanH1></H1>
                <ul>
                    {users.map(user => (
                        <User key={user.id}>
                            <p>{user.name}</p>  <p>{user.age}</p>
                            <button isBack={true} onClick={() => deleteUser(user.id)}>
                                <img src={Trash} alt="lata-de-lixo" />
                            </button>
                        </User>
                    ))
                    }
                </ul>
                <Button onClick={goBackPage} >
                <img alt="seta" src={ButtonSeta}/> Voltar
                </Button>
            </Main>
        </Box>
    )
}

export default Users