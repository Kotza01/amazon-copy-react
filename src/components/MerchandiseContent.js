import React from 'react'
import MerchandiseContentProduct from './MerchandiseContentProduct';

const MerchandiseContent = () => {
  return (
    <div className='merchandise-content'>
        <h4>Gaming merchandise</h4>
        <section className='merchandise-products'>
            <MerchandiseContentProduct url={'https://m.media-amazon.com/images/I/31y+QwIZnWL._SR419,421_.jpg'} name="Apperl" />
            <MerchandiseContentProduct url="https://m.media-amazon.com/images/I/21g1F3v5SML._SR419,421_.jpg" name="Hats"/>
            <MerchandiseContentProduct url="https://m.media-amazon.com/images/I/31zdVJJOPCL._SR419,421_.jpg" name="Action Figures"/>
            <MerchandiseContentProduct url="https://m.media-amazon.com/images/I/41Vq1DhHdQL._SR419,421_.jpg" name="Mugs"/>
        </section>
        <h6 style={{marginTop : "10px", fontSize : ".95rem"}} >See More</h6>
    </div>
  )
}
export default MerchandiseContent;