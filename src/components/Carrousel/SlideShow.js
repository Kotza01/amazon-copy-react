import React, { useCallback, useEffect, useRef } from 'react';

import {ReactComponent as FlechaIzquierda} from '../../assets/iconmonstr-angel-left-thin.svg';
import {ReactComponent as FlechaDerecha} from '../../assets/iconmonstr-angel-right-thin.svg';

const SlideShow = ({
    children,
    controles = false,
    autoplay = false,
    velocidad="500",
    intervalo="5000",
	littleCarrousel=false,
	translateTopSeller,
	setTranslateTopSeller
}) => {
    const slideshow = useRef(null);
	const intervaloSlideshow = useRef(null);
	
	const siguiente = useCallback(() => {
		// Comprobamos que el slideshow tenga elementos
		if(slideshow.current.children.length > 0){

			if(littleCarrousel){
				let maxTranslate = 0;
				for(let i =0; i<slideshow.current.children.length; i++){
					maxTranslate += slideshow.current.children[i].offsetWidth+8;
				}
				
				// Establecemos la transicion para el slideshow.
				slideshow.current.style.transition = `${velocidad}ms ease-out all`;

				let sizeSlide = slideshow.current.offsetWidth;
				maxTranslate= maxTranslate-sizeSlide;

				let sizeTranslate = translateTopSeller + sizeSlide;

				if(sizeTranslate>maxTranslate){
					if(translateTopSeller===maxTranslate) {
						// Move the slideshow
						slideshow.current.style.transform = `translateX(-${translateTopSeller+30}px)`;
						const transicionTwo = () => {
							// Reiniciamos la posicion del Slideshow.
							slideshow.current.style.transition = `${velocidad}ms ease-out all`;
							slideshow.current.style.transform = `translateX(-${translateTopSeller}px)`;
		
							// Tomamos el primer elemento y lo mandamos al final.		
							slideshow.current.removeEventListener('transitionend', transicionTwo);
						}
		
						// Eventlistener para cuando termina la animacion.
						slideshow.current.addEventListener('transitionend', transicionTwo);
					} else {
						setTranslateTopSeller(maxTranslate);
						// Move the slideshow
						slideshow.current.style.transform = `translateX(-${maxTranslate}px)`;
					}
				}  else {
					setTranslateTopSeller(translateTopSeller + sizeSlide);
					// Move the slideshow
					slideshow.current.style.transform = `translateX(-${sizeTranslate}px)`;
				}

			} else {
				// Obtenemos el primer elemento del slideshow.
				const primerElemento = slideshow.current.children[0];

				// Establecemos la transicion para el slideshow.
				slideshow.current.style.transition = `${velocidad}ms ease-out all`;

				const tamañoSlide = slideshow.current.children[0].offsetWidth;

				// Movemos el slideshow
				slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

				const transicion = () => {
					// Reiniciamos la posicion del Slideshow.
					slideshow.current.style.transition = 'none';
					slideshow.current.style.transform = `translateX(0)`;

					// Tomamos el primer elemento y lo mandamos al final.
					slideshow.current.appendChild(primerElemento);

					slideshow.current.removeEventListener('transitionend', transicion);
				}

				// Eventlistener para cuando termina la animacion.
				slideshow.current.addEventListener('transitionend', transicion);
			}
		}
	}, [velocidad, littleCarrousel, translateTopSeller, setTranslateTopSeller]);
	
	const anterior = () => {
		
		if(slideshow.current.children.length > 0){
			if(littleCarrousel){ 
				if(translateTopSeller===0) {
					slideshow.current.style.transition = `${velocidad}ms ease-out all`;
					slideshow.current.style.transform = `translateX(30px)`;
					
					const timeOut = setTimeout(() => {
						slideshow.current.style.transition = `${velocidad}ms ease-out all`;
						slideshow.current.style.transform = `translateX(0)`;
					}, 500);
					
				} else if(translateTopSeller>slideshow.current.offsetWidth) {
					slideshow.current.style.transition = `${velocidad}ms ease-out all`;
					slideshow.current.style.transform = `translateX(-${translateTopSeller-slideshow.current.offsetWidth}px)`;
					setTranslateTopSeller(translateTopSeller-slideshow.current.offsetWidth);
				} else {
					slideshow.current.style.transition = `${velocidad}ms ease-out all`;
					slideshow.current.style.transform = `translateX(0)`;
					setTranslateTopSeller(0);
				}
			} else {
				// Obtenemos el ultimo elemento del slideshow.
				const index = slideshow.current.children.length - 1;
				const ultimoElemento = slideshow.current.children[index];
				slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
				
				slideshow.current.style.transition = 'none';
				const tamañoSlide = slideshow.current.children[0].offsetWidth;
				slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
			
				setTimeout(() => {
					slideshow.current.style.transition = `${velocidad}ms ease-out all`;
					slideshow.current.style.transform = `translateX(0)`;
				}, 30);
			}
		}
	}

	useEffect(() => {
		if(autoplay){
			intervaloSlideshow.current = setInterval(() => {
				siguiente();
			}, intervalo);
	
			// Eliminamos los intervalos
			slideshow.current.addEventListener('mouseenter', () => {
				clearInterval(intervaloSlideshow.current);
			});
	
			// Volvemos a poner el intervalo cuando saquen el cursor del slideshow
			slideshow.current.addEventListener('mouseleave', () => {
				intervaloSlideshow.current = setInterval(() => {
					siguiente();
				}, intervalo);
			});
		}
	}, [autoplay, intervalo, siguiente]);

	return (littleCarrousel ? 
		<div className='carrousel-container'>
			<div className='carrousel-container-slide-show' ref={slideshow}>
				{children}
			</div>
			{controles && <div className='controls little-controls'>
				<button onClick={anterior}>
					<i className="bi bi-chevron-left"></i>
					
				</button>
				<button onClick={siguiente}>
					<i className="bi bi-chevron-right"></i>
					
				</button>
			</div>}
		</div>
		:
		<div className='carrousel-container'>
			<div className='carrousel-container-slide-show' ref={slideshow}>
				{children}
			</div>
			{controles && <div className='controls'>
				<button onClick={anterior}>
					<FlechaIzquierda />
				</button>
				<button onClick={siguiente}>
					<FlechaDerecha />
				</button>
			</div>}
		</div>
	);
}

export default SlideShow;