import React from 'react'

const ContainerOne = ({dataForContainer, positionRelative=false}) => {
  
  return (
    <div className={positionRelative ? 'container-principals-options position-relativee':  'container-principals-options'}>
        {dataForContainer.data.map((el,i)=> (
        !el.hasOwnProperty('img') ?
        <div key={i} className='option'>
            <div className='option-header'>
                <span>{el.nameBlock}</span>
            </div>
            <div className='option-content'>
            <div className='option-content-grid'>
                {el.item.map((item, i) => (
                <div className={el.hasOwnProperty('extraClass') ? `option-content-grid-element ${el.extraClass}`:'option-content-grid-element'} key={i}>
                    <img src={item.url} alt={item.name} />
                    <div>
                    <span>
                        {item.name}
                    </span>
                    </div>
                </div>
                ))}
            </div>
            </div>
            <div className='option-footer'>
            <span>Shop now</span>
            </div>
        </div>:
        <div className={el.nameBlock==='Shop activity trackers and smartwatches'?  'option image-small':'option'} key={i}>
            <div className='option-header'>
                <span>{el.nameBlock}</span>
            </div>
            <div className='option-content one-item'>
                <img src={el.img} alt={el.nameBlock} />
            </div>
            <div className='option-footer'>
            <span>Shop now</span>
            </div>
        </div>
        ))}
    </div>
  )
}

export default ContainerOne;