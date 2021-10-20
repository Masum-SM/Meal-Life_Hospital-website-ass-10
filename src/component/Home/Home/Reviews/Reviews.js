import React from 'react';
import './Reviews.css'

const Reviews = () => {
    return (
        <div className='review-container'>
            <h2>Welcome to Mend Life Hospital Reviews</h2>
            <p>Rate your doctor, hospital, dentist and healthcare professional in the USA, Canada & the world with our fast and easy to use forms.

                Your review is done anonymously to ensure your privacy, no registration required.</p>
            <div className='sigle-review'>
                <div className="row ">
                    <div className="col-12 col-lg-4 review">
                        <h3>Humaira Habib</h3>
                        <p>Great experience as a first timer. I barely waited to be helped when I checked in. The staff and Dr.Noman Ahmed were all very friendly and helpful. I especially loved how Dr.Noman Ahmed really took his time to explain my conditions with me as well as my treatment options. I had a great visit and the doctor’s demeanor has really put me at ease so I highly recommend this clinic.</p>
                    </div>
                    <div className="col-12 col-lg-4 review">
                        <h3>Younus Munshi</h3>

                        <p>Dr.Ishtiak Ahmed gets it. From his excellent treatment, curiosity, investigative mind and ability to connect, you know where you stand immediately and what next steps look like. Attention doctors if you want a masterclass in watching a doctor bring medical knowledge and build rapport so that message is heard by patient and therefore delivered watch this guy.</p>
                    </div>
                    <div className="col-12 col-lg-4 review">
                        <h3>Mahmudul Hasan</h3>
                        <p> Dr. Nawrin Sultana is incredible. Not only has she taken great care of my health, but also she is lovely to speak with at every appointment. It’s rare to find a doctor that combines such personal touches and care for a patient as a person with outstanding quality of medical care. I highly recommend becoming her patient!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;