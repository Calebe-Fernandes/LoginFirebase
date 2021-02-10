import React , { useRef, useState} from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import {useAuth} from '../context/authContext'
import { Link, useHistory } from 'react-router-dom'

export default function SignUp(){

   const emailRef = useRef()
   const passwordRef = useRef()
   const passwordConfirmRef = useRef()
   const { signup }  = useAuth()
   const [error, setError] = useState("")
   const [loading, setLoading] = useState(false)
   const history = useHistory()
   
async function handleSubmit(e){
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError('Passwords do not match')
    }

    try{
        setError('')
        setLoading(true)
        await  signup(emailRef.current.value, passwordRef.current.value)
        history.push('/')
    }catch{
        setError('Falha ao criar a conta')
    }
    setLoading(false)
}

    return(
        <>
            <Card>  
                <Card.Body>
                    <h2 className = "text-center mb-4" >Registre-se</h2>
                    {error && <Alert variant = 'danger'>{error}</Alert>}
                    <Form className = 'p-4' onSubmit = {handleSubmit} >
                        <Form.Group id = "email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type= 'email' ref={emailRef}  required/>
                        </Form.Group>

                        <Form.Group id = "password">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type= 'password' ref={passwordRef}  required/>
                        </Form.Group>

                        <Form.Group id = "password-confirm">
                            <Form.Label>Confirme sua senha</Form.Label>
                            <Form.Control type= 'password' ref={passwordConfirmRef}  required/>
                        </Form.Group>
                        <Button  disabled={loading} className = " w-100" type = "submit">Cadastre-se</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className = "w-100 text-center mt-2">
                 Já possui uma conta?  <Link to="/login">Entre aqui</Link> 
            </div>
          
        </>
    )
}