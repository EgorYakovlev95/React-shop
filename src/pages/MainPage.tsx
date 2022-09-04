import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories/Categories';
import Products from '../components/Products/Products';
import { Product } from '../model/model';
import s from './../styles/main.module.scss';


const MainPage = () => {

  const [items, setItems] = useState<Product[]>([])

  return (
    <div className={s.wrapper_main}>
      <Categories setItems={setItems}/>
      <Products items={items}/>
    </div>
  )
}

export default MainPage;