import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Homepage/Banner/Banner'
import Players from './components/Homepage/Players/Players'
import Navbar from './components/Navbar/Navbar'
 import { ToastContainer } from 'react-toastify';


const fetchPlayer = async()=>  {
  const res = await fetch("/data.json")
  return res.json();

}

function App() {

  const playerPromise = fetchPlayer();

  const [coin , setCoin] = useState("10000000")


  return (

    
    <>
     <Navbar coin = {coin}> </Navbar>
     <Banner></Banner>

     <Suspense fallback={<span className="loading loading-ball loading-xl"></span>} >
      <Players playerPromise = {playerPromise}
       setCoin={setCoin} 
       coin={coin}>

       </Players>

     </Suspense>

    {/* react tostfy  */}
     <ToastContainer />

    </>

  )
}

export default App
