import React, { useState } from 'react'
import './Carrousel.css';
import SlideShow from './SlideShow';

const Carrousel = ({images, littleCarrousel=false}) => {

    const [translateTopSeller, setTranslateTopSeller] = useState(0);

  return (
  <>
    {littleCarrousel ? 
        <div className='carrousel-web'>
            <SlideShow 
                controles={true} 
                littleCarrousel={true} 
                translateTopSeller={translateTopSeller}
                setTranslateTopSeller={setTranslateTopSeller} >
                {images.map((el,i)=> (
                    <div className='slide little-slide' key={i}>
                        <a href="/">
                            <img src={el} alt={el}/>
                        </a>
                    </div>
                ))}
            </SlideShow>
        </div>:
        <div className='carrousel-web'>
        <SlideShow controles={true}>
            {images.map((el,i)=> (
                <div className='slide' key={i}>
                    <a href="/">
                        <img src={el} alt={el}/>
                    </a>
                </div>
            ))}
        </SlideShow>
    </div>
    }
    </>
  )
}

/**
 * https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61q5Pg3hO8L._SX3000_.jpg
 * 	https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71qid7QFWJL._SX3000_.jpg
 * 	https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61shpu9mvML._SX3000_.jpg
 * https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61shpu9mvML._SX3000_.jpg
 */

export default Carrousel;