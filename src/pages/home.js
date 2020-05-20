import React from "react"
import './style.css'
import Header from '../components/Header'
import Form from '../components/Form'

import Image3 from '../fotos/a3.jpg'
const Home = () => {
	return (
        <>
        <Header />
        <div className="container p-0">
        <h1 className='text-success'>Testendo bootstrap</h1>
        <div className='row'>
        	<div className="col-12 col-sm-4">
        		 <img className="img-fluid" src={Image3} />
        	</div>
        	<div className="col-12 col-sm-4">
        		 <img className="img-fluid" src={Image3} />
        	</div>
        	<div className="col-12 col-sm-4">
        		 <img className="img-fluid" src={Image3} />
        	</div>
       
        </div>
        </div>
         <div className='container p-2 p-sm-0'>
        <Form />
        </div>
        
        </>
	)
}

export default Home