import React from 'react'

const WomenCollections = (props) => {

    const {title, image1, image2, image3, image4, image5, image6, image7, image8} = props.LadiesFashion;

  return (
    
    <div className='collectionSection' >
        <h2>{title}</h2>
        <div className="bannerBox">
        <img src="assets/LadiesBanner.gif" alt="" />

        </div>
        

        


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

export default WomenCollections
