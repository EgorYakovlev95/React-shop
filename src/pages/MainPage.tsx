import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories/Categories';
import Products from '../components/Products/Products';
import { Product } from '../model/model';
import s from './../styles/main.module.scss';


const MainPage = () => {

  return (
    <div className={s.wrapper_main}>
      <Categories />
      <Products />
    </div>
  )
}

export default MainPage;