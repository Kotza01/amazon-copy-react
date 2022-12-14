import React from 'react'
import MAEProduct from './MAEProduct';

const MerchandiseContent = () => {
  return (
    <div className='merchandise-content'>
        <h4>Gaming merchandise</h4>
        <section className='merchandise-products'>
            <MAEProduct styles="merchandise-product" url='https://m.media-amazon.com/images/I/31y+QwIZnWL._SR419,421_.jpg' name="Apperl" />
            <MAEProduct styles="merchandise-product" url="https://m.media-amazon.com/images/I/21g1F3v5SML._SR419,421_.jpg" name="Hats"/>
            <MAEProduct styles="merchandise-product" url="https://m.media-amazon.com/images/I/31zdVJJOPCL._SR419,421_.jpg" name="Action Figures"/>
            <MAEProduct styles="merchandise-product" url="https://m.media-amazon.com/images/I/41Vq1DhHdQL._SR419,421_.jpg" name="Mugs"/>
        </section>
        <h6 style={{marginTop : "10px", fontSize : ".95rem"}} >See More</h6>
    </div>
  )
}
export default MerchandiseContent;