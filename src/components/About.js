import React from 'react'

function About() {
  return (
    <div className='container'>
           <div className="main">
        <div className="aboutleft">
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div>
            <h1 style={{fontSize: '42px'}}>Welcome to Aston</h1>
            <p  className="text2" style={{ width: '600px', height: '180px'}}>
            At Aston, we redefine hospitality in the heart of the bustling inner city. Nestled amidst the vibrant energy and rich cultural tapestry of the urban landscape, our hotel offers a sanctuary of modern luxury and unparalleled comfort. Experience the perfect blend of urban sophistication and genuine hospitality, where every detail is crafted to make your stay memorable.
            </p>
          </div>
          <div className='pic1'/>
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div>
              <h1>Exceptional Service</h1>
              <p  className="text2" style={{ width: '600px', height: '180px'}}>What truly sets us apart is our dedicated team of professionals who are committed to exceeding your expectations. From the moment you step through our doors until your departure, our staff is here to ensure that your stay is seamless and unforgettable.</p>
            </div>
            <div className='pic2'/>
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
          <div>
            <h1>Book Your Stay</h1>
            <p  className="text2" style={{ width: '600px', height: '180px'}}>
            Discover the allure of the inner city with [Hotel Name]. Whether you're a traveler seeking adventure or a business professional in need of a comfortable retreat, we invite you to experience the essence of urban hospitality. Book your stay today and let us make your visit to the inner city truly exceptional.
            </p>
          </div>
          <div className='pic3'/>
          </div>
        </div>
        <div className="aboutright">
        
        </div>
      </div>   
    </div>
  )
}

export default About