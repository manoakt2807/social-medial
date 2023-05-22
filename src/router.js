import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './module/header'
import Home from './Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
const Router = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default Router
