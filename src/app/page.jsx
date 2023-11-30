'use client'

import NavBar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import AlertMessage from './components/alert';



export default function Home() {

  const [token, setToken] = useState('');
  const [userData, setUserData] = useState();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(localStorage.getItem('token') ? true : false);


  useEffect(() => {
    if (!isUserLoggedIn) redirect('/login');
    
    setToken(localStorage.getItem('token'));
    setUserData(localStorage.getItem('userData'));
    
  }, [isUserLoggedIn])


  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-0 bg-white">
      <div className="z-10 max-w-full h-screen w-full items-center justify-between font-mono text-sm bg-white">
      
          <NavBar></NavBar>
          
          {isUserLoggedIn && (
            <div className='ml-[100px]'>
              <p>Token:</p>
              <p>{token}</p>
  
              <br /><br />
              
              <p>Datos usuario:</p>
              <p>{userData}</p>
            </div>
          )} 


      </div>
    </main>
  )
}
