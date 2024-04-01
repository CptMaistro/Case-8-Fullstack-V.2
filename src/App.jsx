import { Outlet } from 'react-router-dom'
import './App.css'

export default function () {

  console.log(sessionStorage);

  return <>
    {/* <Header /> */}
    <Outlet />
    {/* <Footer /> */}
  </>
}