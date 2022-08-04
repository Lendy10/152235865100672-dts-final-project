import React from 'react'
import { AuthForm } from '../Container/AuthForm'

export const Login = (props) => {
    return (
        <>
            <AuthForm note={props.note} />
        </>
    )
}
