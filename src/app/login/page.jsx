'use client'

import NavBar from "../components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { useState } from "react";


export default function LoginPage(){

    // Username and password for login
    const [username_log, setUsername_log] = useState('');
    const [password_log, setPassword_log] = useState('');


    // login handler
    const login = async (e) => {
        e.preventDefault();

        const data = {
            email: username_log,
            password: password_log,
        };

        try {
            const response = await fetch('http://127.0.0.1:8001/auth/login', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {

                const responseData = await response.json();
                const token = responseData.token;
                const userData = JSON.stringify(responseData.usercaResponse);


                if(token && userData){
                    alert('Sesión iniciada!');

                    localStorage.setItem('token', token);
                    localStorage.setItem('userData', userData);
                    console.log(userData);
                    
                    window.location.replace('/');
                    
                } else{
                    console.log('token no guardado en localStorage')
                }

            } 
            else {
                alert('Las credenciales no son válidas!');
            
            }
        } catch (error) {
            console.error('Error de red', error);
        }
    };


    return(
        <>
        <main className="flex min-h-screen flex-col items-center justify-between py-0 bg-white">
            <div className="z-10 max-w-full h-screen w-full items-center justify-between font-mono text-sm bg-white">

                    <NavBar></NavBar>

                    <div className='grid justify-items-center'>
                        <div className=' bg-white text-slate-600 p-10 md:mr-[70px] mt-[60px] shadow-[0_35px_60px_-5px_rgba(0,0,0,0.3)] rounded-md w-80'>
                            <h1 className='text-center text-2xl mb-5 font-bold'>Iniciar Sesión</h1>

                            <form method="post" onSubmit={login}>
                                <div className='mb-4'>
                                    <label htmlFor="nombreUsuario">Email: </label><br />
                                    <input id='nombreUsuario' type="text" placeholder='Ingrese su email'
                                        onChange={(e) => setUsername_log(e.target.value)}
                                        className='transition duration-300 ease-in-out ring-[0.5px] ring-slate-500 w-full mt-2 rounded-md p-1.5 focus:ring focus:ring-blue-500 outline-0 text-black text-sm placeholder:text-sm' 
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contrasena">Contraseña: </label><br />
                                    <input id='contrasena' type="password" placeholder='Ingrese su contraseña'
                                        onChange={(e) => setPassword_log(e.target.value)}
                                        className='transition duration-300 ease-in-out ring-[0.5px] ring-slate-500 w-full mt-2 rounded-md p-1.5 focus:ring focus:ring-blue-500 outline-0 text-black text-sm placeholder:text-sm'
                                    />
                                </div>
                                
                                <button 
                                    type='submit'  
                                    className="transition duration-300 ease-in-out hover:scale-105 mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Ingresar
                                </button>

                            </form>
                            <div className='mt-3'>
                                <span className='text-sky-500 text-sm'>Aún no tienes cuenta? Clickea </span> 
                                <Link href='/signup' className='text-sm text-sky-500 font-bold hover:underline hover:decoration-solid'>
                                    Aquí
                                </Link>
                            </div>

                        </div>
                </div>

            </div>
        </main>
        </>
    )
}