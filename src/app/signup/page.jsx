import NavBar from "../components/navbar";
import SignupComponent from "../components/signup";
import 'bootstrap/dist/css/bootstrap.min.css';




export default function Signup(){
    return(
        <>
        <main className="flex min-h-screen flex-col items-center justify-between py-0 bg-white">
            <div className="z-10 max-w-full h-screen w-full items-center justify-between font-mono text-sm bg-white">

                <NavBar></NavBar>
                <SignupComponent></SignupComponent>


            </div>
        </main>
        </>
    )
}