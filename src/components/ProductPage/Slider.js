import React, { useRef, useState } from 'react';
import { useEventListener } from 'usehooks-ts';

const Slider = ({images}) => {
  const [slideIndex, setSlideIndex] = useState(1);

    let refContainerSlider = useRef();
    
    const handleDotContainer = (event) => {
      let scrollY = refContainerSlider.current.scrollLeft;
      if(scrollY>358 && scrollY<361){
        setSlideIndex(2)
      } else if(scrollY>719&&scrollY<721) {
        setSlideIndex(3);
      } else if(scrollY>0&&scrollY<2){
        setSlideIndex(1);
      }
    };
    
    useEventListener('scroll', handleDotContainer, refContainerSlider);
    
    return (

        <>
        <article className="carousel">
            <section className="carousel-container" ref={refContainerSlider}>
                {images.map((el, i) => {
                  return (
                    <div key={i} className="carousel-slide">
                        <img src={el} alt='imageSlider' />
                    </div>
                  )
                })}
          </section>
        </article>
        <div className="container-dots">
              {Array.from({length: images.length}).map((item, index) => (
                  <div 
                  key={index}
                  className={slideIndex === index + 1 ? "dot active" : "dot"}
                  ></div>
              ))}
          </div>
        </>
    )
}

export default Slider;