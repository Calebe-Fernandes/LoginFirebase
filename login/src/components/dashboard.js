import React from 'react'
import {Button, Card} from 'react-bootstrap'

export default function  Dashboard() {
    function handleLogOut(){
        
    }
    
    return (
        
        <>
            <Card>

            </Card>
            <div className = "w-100 text-center mt-2">
                <Button variant = 'link' onClick ={handleLogOut}>Sair da Conta</Button>
            </div>
        </>
    )
}
