import React from 'react'
import ExploreDepartementContent from './ExploreDepartementContent';
import KeepExploringContent from './KeepExploringContent';
import MerchandiseContent from './MerchandiseContent';
import RefreshHome from './RefreshHome';
import ShopContent from './ShopContent';
import SingContent from './SingContent';
import TopPageContent from './TopPageContent';

const Content = () => {
  return (
    <div className='content'>
        <RefreshHome/>
        <SingContent/>
        <ShopContent url={'https://m.media-amazon.com/images/I/51GxHAoKfsL._SR1242,450_.jpg'}/>
        <ShopContent url={'https://m.media-amazon.com/images/I/51dtbAAbcML._SR1242,450_.jpg'}/>
        <MerchandiseContent/>
        <KeepExploringContent/>
        <ExploreDepartementContent/>
        <TopPageContent/>
    </div>
  )
}

export default Content;