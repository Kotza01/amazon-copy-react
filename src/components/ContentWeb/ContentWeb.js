import React from 'react'
import Carrousel from '../Carrousel/Carrousel';
import './ContentWeb.css'
import { dataForFirstContainer, dataForSecondContainer } from '../../constant/dataForContainers';
import ContainerOne from './ContainerOne';
import { imagesTop, imagesTopSellerBooks, imagesTopSellerToys } from '../../constant/dataForCarrousel';


const ContentWeb = () => {
  return (
    <div className='content-web'>
        <div className='content-web-container'>
            <Carrousel images={imagesTop} />
            <ContainerOne dataForContainer={dataForFirstContainer}/>
            <div className='container-second'>
              <h4>Top Sellers in Books for you</h4>
              <Carrousel images={imagesTopSellerBooks} littleCarrousel={true} />
            </div>
            <div className='container-second margin-top'>
              <h4>Top Sellers in Toys for you</h4>
              <Carrousel images={imagesTopSellerToys} littleCarrousel={true} />
            </div>
            <ContainerOne positionRelative={true} dataForContainer={dataForSecondContainer}/>
            
        </div>
    </div>
  )
}

export default ContentWeb;