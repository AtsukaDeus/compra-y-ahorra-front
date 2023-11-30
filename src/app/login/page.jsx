import LoginComponent from "../components/login";
import NavBar from "../components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function LoginPage(){

    return(
        <>
        <main className="flex min-h-screen flex-col items-center justify-between py-0 bg-white">
            <div className="z-10 max-w-full h-screen w-full items-center justify-between font-mono text-sm bg-white">

                <NavBar></NavBar>
                <LoginComponent></LoginComponent>


            </div>
        </main>
        </>
    )
}