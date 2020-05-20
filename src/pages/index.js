import React from "react"
import './style.css'
import Header from '../components/Header'
import Form from '../components/Form'

import Image1 from '../fotos/a1.jpg'
const Index = () => {
	return (
        <>
        <Header />
        <div className="container p-0">
        <h1 className='text-success'>Testendo bootstrap</h1>
        <div className='row'>
        	<div className="col-12 col-sm-4">
        		 <img className="img-fluid" src={Image1} />
        	</div>
        	<div className="col-12 col-sm-4">
        		 <img className="img-fluid" src={Image1} />
        	</div>
        	<div className="col-12 col-sm-4">
        		 <img className="img-fluid" src={Image1} />
        	</div>
       
        </div>
        </div>
         <div className='container p-2 p-sm-0'>
        <Form />
        </div>
        
        </>
	)
}

export default Index