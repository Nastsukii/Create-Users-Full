import React, { useState, useRef} from 'react'
//                  Todos a cima sao React Hooks
import People from '../../assets/people.svg'
import ButtonSeta from '../../assets/arrow.svg'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

import H1 from '../../components/title'
import Main from '../../components/Main'
import Button from '../../components/button'

import {
    Box,
    Imagem,
    Label,
    Input,
    SpanH1,
    ButtonUsers
} from "./styles"


const App = () => {
    const [users, setUsers] = useState([]);
    const inputAge = useRef();
    const inputName = useRef();
    const history = useHistory()


    function nextPage (){
            history.push("/users")
    }
    async function addNewUser() {
if(inputName.current.value ===""||inputAge.current.value === ""){
            alert("Por favor, preencha todos os campos.");}
else{

        const {data:newUser} = await axios.post("http://localhost:3001/users",
        {name: inputName.current.value, 
        age: inputAge.current.value})
        console.log(newUser)
            setUsers([...users, newUser])
            history.push("/users")
    }}

    return (
        <Box>
            <Imagem alt='image-logo' src={People} />
            <Main>
                <H1>Faça o seu <br></br><SpanH1>Cadastro!!</SpanH1></H1>

                <Label>Name</Label>
                <Input ref={inputName} placeholder='Your name...' />

                <Label>Age</Label>
                <Input ref={inputAge} placeholder='Your age...' />
                <Button onClick={addNewUser} >Register <img alt="seta" src={ButtonSeta} /></Button> 
                <ButtonUsers onClick={nextPage}> Users</ButtonUsers>
            </Main>
        </Box>
    )
}

export default App