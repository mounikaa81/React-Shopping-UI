import React from 'react'

const Collections = (props) => {

  const {title, image1, image2, image3, image4, image5, image6} = props.gentsFashion ;
 
  return (
    <div className='collectionSection' >
      <h2>{title}</h2>
      
      <div className="menImages">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
      </div>

    </div>
  )
}

export default Collections
