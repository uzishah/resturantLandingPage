import React from 'react'
import PickMeals from '../assets/pick-meals-image.png'
import ChooseMeals from '../assets/choose-image.png'
import deliveryMeals from '../assets/delivery-image.png'


const WorkInfo = () => {
    
    const workData = [
        {
            image: PickMeals,
            title: "pick Meals",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum."
        }, {
            image: deliveryMeals,
            title: "Fast Deliveries",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum."
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum."
        },
        
    ];
    return (
        
      <div className='work-section-wrapper'>
          <div className='work-section-top'>
              <p className='primary-subheading'>Work</p> 
              <h1 className='primary-heading'> How It works</h1>
              <p className='primary-text'>
              Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.
              </p>
            </div>
          <div className='work-section-bottom'>
              {workData.map((data) => (
                  <div className='work-section-info'>
                      <div className='info-boxes-img-container'>
                          <img src={data.image} alt=''/>
                      </div>
                      <h2>{ data.title}</h2>
                      <p>{data.text}</p>

                  </div>
              ))}
              
          </div>
    </div>
  )
}

export default WorkInfo