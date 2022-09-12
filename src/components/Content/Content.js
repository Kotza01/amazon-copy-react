import React from 'react'
import ExploreDepartement from './ExploreDepartement';
import KeepExploring from './KeepExploring';
import MerchandiseContent from './MerchandiseContent';
import RefreshHome from './RefreshHome';
import ShopContent from './Shop';
import SingContent from './SingIn';
import TopPageContent from './TopPageContent';
import './Content.css';

const Content = ({clickProduct}) => {
  return (
    <div className='content'>
        <RefreshHome clickProduct={clickProduct}/>
        <SingContent/>
        <ShopContent url={'https://m.media-amazon.com/images/I/51GxHAoKfsL._SR1242,450_.jpg'}/>
        <ShopContent url={'https://m.media-amazon.com/images/I/51dtbAAbcML._SR1242,450_.jpg'}/>
        <MerchandiseContent/>
        <KeepExploring/>
        <ExploreDepartement/>
        <TopPageContent/>
    </div>
  )
}

export default Content;