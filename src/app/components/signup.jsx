'use client'

import { SetStateAction, useState } from 'react';


export default function SignupComponent() {

// Username for signup
const [username_sig, setUsername_sig] = useState('');    

const [run_sig, setRun_sig] = useState('');
const [name, setName] = useState('');


// Hooks to match passwords
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [passwordsMatch, setPasswordsMatch] = useState(true);

const handlerPassword = (e) => {
const newPassword = e.target.value;
setPassword(newPassword);
if (newPassword == '') setPasswordsMatch(true);
};

const handlerConfirmPassword = (e) => {
const newConfirmPassword = e.target.value;
setConfirmPassword(newConfirmPassword);
setPasswordsMatch(password === newConfirmPassword);
if (newConfirmPassword == '') setPasswordsMatch(true);
};

// Signup handler
const register = async (e) => {
    e.preventDefault();

    const data = {
        run: run_sig,
        name: name,
        email: username_sig, 
        password: password, 
    };
    
    try {
    const response = await fetch('http://127.0.0.1:8001/auth/register', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        alert('Usuario registrado con éxito');
        window.location.replace('/login');

    } else {
        alert('El usuario ya existe!');
        window.location.reload();
    }
    } catch (error) {
        console.error('Error de red', error);
    }
};


return (
    <div className='grid justify-items-center'>
        <div className=' bg-white text-slate-600 p-10 md:mr-[70px] mt-[30px] shadow-[0_35px_60px_-5px_rgba(0,0,0,0.3)] rounded-md w-80'>
            <h1 className='text-center text-2xl mb-5 font-bold'>Regístrate</h1>
            <form method="post" onSubmit={register}>
                <div className='mb-4'>
                    <label htmlFor="run_reg">Run: </label><br />
                    <input id='run_reg' type="text" placeholder='Ingrese su RUN' onChange={(e) => setRun_sig(e.target.value)}
                        className='transition duration-300 ease-in-out ring-[0.5px] ring-slate-500 w-full mt-2 rounded-md p-1.5 focus:ring focus:ring-blue-500 outline-0 text-black text-sm placeholder:text-sm' 
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor="name">Nombre: </label><br />
                    <input id='name' type="text" placeholder='Ingrese su nombre' onChange={(e) => setName(e.target.value)}
                        className='transition duration-300 ease-in-out ring-[0.5px] ring-slate-500 w-full mt-2 rounded-md p-1.5 focus:ring focus:ring-blue-500 outline-0 text-black text-sm placeholder:text-sm' 
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor="nombreUsuario_reg">Email: </label><br />
                    <input id='nombreUsuario_reg' type="text" placeholder='Ingrese su email' onChange={(e) => setUsername_sig(e.target.value)}
                        className='transition duration-300 ease-in-out ring-[0.5px] ring-slate-500 w-full mt-2 rounded-md p-1.5 focus:ring focus:ring-blue-500 outline-0 text-black text-sm placeholder:text-sm' 
                    />
                </div>
                {!passwordsMatch && (
                    <p className="text-red-500 text-sm">Las contraseñas no coinciden</p>
                )}
                <div className='mb-4'>
                    <label htmlFor="contrasena_reg">Contraseña: </label><br />
                    <input id='contrasena_reg' type="password" placeholder='Ingrese una contraseña' onChange={handlerPassword}
                        className='transition duration-300 ease-in-out ring-[0.5px] ring-slate-500 w-full mt-2 rounded-md p-1.5 focus:ring focus:ring-blue-500 outline-0 text-black text-sm placeholder:text-sm'
                    />
                </div>

                <div>
                    <label htmlFor="rep_contrasena">Repetir contraseña: </label><br />
                    <input id='rep_contrasena' type="password" placeholder='Repita la contraseña' onChange={handlerConfirmPassword}
                        className='transition duration-300 ease-in-out ring-[0.5px] ring-slate-500 w-full mt-2 rounded-md p-1.5 focus:ring focus:ring-blue-500 outline-0 text-black text-sm placeholder:text-sm'
                    />
                </div>
                
                <button 
                    type='submit'

                    className="transition duration-300 ease-in-out hover:scale-105 mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Registrarse
                </button>

            </form>

        </div>
    </div>            
)
}