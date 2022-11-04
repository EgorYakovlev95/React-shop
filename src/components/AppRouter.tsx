import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Adress from '../pages/Adress';
import AuthPage from '../pages/AuthPage';
import BoxPage from '../pages/BoxPage';
import DetailPage from '../pages/DetailPage';
import Feedback from '../pages/Feedback';
import MainPage from '../pages/MainPage';


const AppRouter = () => {

    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/feedback' element={<Feedback />} />
            <Route path='/adress' element={<Adress />} />
            <Route path='/products/:id' element={<DetailPage />} />
            <Route path='/login' element={<AuthPage />} />
            <Route path='/cart' element={<BoxPage/>} />
        </Routes>
    )
}

export default AppRouter;