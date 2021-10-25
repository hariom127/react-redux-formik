import React from 'react';
import { Accordion, Col, Row , Form } from "react-bootstrap";
import FigureCaption from 'react-bootstrap/esm/FigureCaption';
import Sidebar from '../components/Sidebar'

const Itemaddprice = () => {
    return (

        <>
         <Sidebar />
            <div className="dashboard_conatnt">               
                    <div className="item_page">
                    <form className="theme_form">
                            <div className="upload_droaper">
                                <input type="file" /> 
                                <img className="draoper" src="./assets/images/camera.png"/> 
                                <span>Upload Photo</span>
                            </div> 
                        <div className="form_row">
                            <Form.Group className="form-group" controlId="">
                                <Form.Label>Catering Name (English)</Form.Label>
                                <Form.Control type="text" placeholder="" /> 
                            </Form.Group> 

                            <Form.Group className="form-group" controlId="">
                                <Form.Label>Catering Name (Arabic)</Form.Label>
                                <Form.Control type="text" placeholder="" /> 
                            </Form.Group>   
                        </div>

                        <div className="form_row">
                            <Form.Group className="form-group" controlId="">
                                <Form.Label>Catering Name (English)</Form.Label>
                                <Form.Control type="text" placeholder="" /> 
                            </Form.Group> 

                            <Form.Group className="form-group" controlId="">
                                <Form.Label>Catering Name (Arabic)</Form.Label>
                                <Form.Control type="text" placeholder="" /> 
                            </Form.Group>   
                        </div>

                        <div className="form_row">
                            <Form.Group className="form-group" controlId="">
                                <Form.Label className="p-0">Choose the type of Catering</Form.Label>
                                <Form.Check type="radio"  label="Customize Catering (The price will be depending on selections)" />
                                <Form.Check type="radio"  label="Preset  Catering (Add your price please}" checked/>
                            </Form.Group>  
                        </div>
 
                        <div className="add_price_form full_form">
                        <Form.Group className="form-group" controlId="">
                                <Form.Label>Catering Name (English)</Form.Label>
                                <Form.Control type="text" placeholder="" /> 
                            </Form.Group>  
                        </div>
                        <button type="button" class="btn green_btn btn btn-primary">Add Packages</button>

                     </form> 
                  </div>  
             </div>
        </>
    )
}
export default Itemaddprice;