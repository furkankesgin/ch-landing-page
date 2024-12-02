import React from 'react'
import LearnMoreCardRightImage from '../(components)/learnmore-card-right-image';
import LearnMoreCardLeftImage from '../(components)/learnmore-card-left-image';
import cardDefinitions from '../(components)/card-definitions';

const page = () => {
  return (
    <div>
      {
        cardDefinitions.map((service, index) => {
          return (
            <div key={index}>
              {index % 2 === 0 ? (
                <LearnMoreCardRightImage title={service.title} description={service.description} image={service.image} />
              ) : (
                <LearnMoreCardLeftImage title={service.title} description={service.description} image={service.image} />
              )}
            </div>
          )
        })
      }
    </div>
  )
}

export default page