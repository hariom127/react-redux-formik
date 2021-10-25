import React from 'react';
import { Accordion, Col, Row , Form } from "react-bootstrap";
import FigureCaption from 'react-bootstrap/esm/FigureCaption';
import Sidebar from '../components/Sidebar'

const Itempage = () => {
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
 
                        <div className="catring_type_pack">
                            <div className="prest_header">
                                <h4>Package 1</h4>
                                <a href="#" className="btn btn-primary view_packeg">View Packages</a>
                            </div>  

                            <Row className="package_column">
                                <Col xl={4} lg={6}>
                                    <Form.Control type="text" placeholder="BHD20.00" />          
                                <div className="catering_menu_selection">
                                    <div className="cetring_head">
                                         <strong>Catering menu selection</strong>       
                                        <div className="add_bar">
                                            <button className="sort_btn"><img src="./assets/images/sort.png" />Sort</button>
                                            <button className="sort_btn"><img src="./assets/images/plus.png" />Add</button>
                                        </div>
                                    </div>
                                <div className="accordian_outer">
                                   <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Starter</Accordion.Header>
                                            <Accordion.Body>
                                                <div className="add_point">
                                                    <div className="add_point_item"><input type="checkbox" /><div className="list_contant"><span>Cold drink</span><img src="./assets/images/addplus.png" /></div></div>
                                                    <div className="add_point_item"><input type="checkbox" /><div className="list_contant"><span>Cold drink</span><img src="./assets/images/addplus.png" /></div></div>
                                                    <div className="add_point_item"><input type="checkbox" /><div className="list_contant"><span>Cold drink</span><img src="./assets/images/addplus.png" /></div></div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Main</Accordion.Header>
                                            <Accordion.Body>
                                                <div className="add_point">
                                                    <div className="add_point_item"><input type="checkbox" /><div className="list_contant"><span>Cold drink</span><img src="./assets/images/addplus.png" /></div></div>
                                                    <div className="add_point_item"><input type="checkbox" /><div className="list_contant"><span>Cold drink</span><img src="./assets/images/addplus.png" /></div></div>
                                                    <div className="add_point_item"><input type="checkbox" /><div className="list_contant"><span>Cold drink</span><img src="./assets/images/addplus.png" /></div></div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Beverages</Accordion.Header>
                                            <Accordion.Body>
                                                <div className="add_point">
                                                    <div className="add_point_item"><input type="checkbox" /><div className="list_contant"><span>Cold drink</span><img src="./assets/images/addplus.png" /></div></div>
                                                    <div className="add_point_item"><input type="checkbox" /><div className="list_contant"><span>Cold drink</span><img src="./assets/images/addplus.png" /></div></div>
                                                    <div className="add_point_item"><input type="checkbox" /><div className="list_contant"><span>Cold drink</span><img src="./assets/images/addplus.png" /></div></div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>Cold Drinks</Accordion.Header>
                                            <Accordion.Body>
                                                <div className="add_point">
                                                    <div className="add_point_item"><input type="checkbox" /><div className="list_contant"><span>Cold drink</span><img src="./assets/images/addplus.png" /></div></div>
                                                    <div className="add_point_item"><input type="checkbox" /><div className="list_contant"><span>Cold drink</span><img src="./assets/images/addplus.png" /></div></div>
                                                    <div className="add_point_item"><input type="checkbox" /><div className="list_contant"><span>Cold drink</span><img src="./assets/images/addplus.png" /></div></div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>Mocktails</Accordion.Header>
                                            <Accordion.Body>
                                                <div className="add_point">
                                                    <div className="add_point_item"><input type="checkbox" /><div className="list_contant"><span>Cold drink</span><img src="./assets/images/addplus.png" /></div></div>
                                                    <div className="add_point_item"><input type="checkbox" /><div className="list_contant"><span>Cold drink</span><img src="./assets/images/addplus.png" /></div></div>
                                                    <div className="add_point_item"><input type="checkbox" /><div className="list_contant"><span>Cold drink</span><img src="./assets/images/addplus.png" /></div></div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item> 
                                    </Accordion> 
                                    </div> 
                                </div> 
                             </Col>


                             <Col xl={8} lg={6}>
                                <div className="pack_menu_item">
                                    <div className="search_form"><input type="text" placeholder="Menu Item" /><button className="search_btn"><img src="./assets/images/search-icon.png" /></button></div>

                                <div className="packege_list_item">
                                    <div class="list_inner">
                                        <figure><img src="./assets/images/chart.jpg" /></figure>
                                        <div className="past-order_detail">
                                        <h5><a href="#">Mexican Green Wave</a></h5>
                                        <div className="statusflow">
                                            <small className="veg">Veg</small>                                              
                                        </div>   
                                        </div>                                        
                                        <div className="item_right">  <a href="#" className="btn"> Add</a> </div> 
                                    </div> 

                                    <div class="list_inner">
                                        <figure><img src="./assets/images/chart.jpg" /></figure>
                                        <div className="past-order_detail">
                                        <h5><a href="#">Mexican Green Wave</a></h5>
                                        <div className="statusflow">
                                            <small className="veg">Veg</small>                                              
                                        </div>   
                                        </div>                                        
                                        <div className="item_right">  <a href="#" className="btn"> Add</a> </div> 
                                    </div> 

                                    <div class="list_inner">
                                        <figure><img src="./assets/images/chart.jpg" /></figure>
                                        <div className="past-order_detail">
                                        <h5><a href="#">Mexican Green Wave</a></h5>
                                        <div className="statusflow">
                                            <small className="veg">Veg</small>                                              
                                        </div>   
                                        </div>                                        
                                        <div className="item_right">  <a href="#" className="btn"> Add</a> </div> 
                                    </div> 


                                  </div> 
                                </div>
                            </Col> 
                          </Row> 
                        </div> 
                     </form> 
                  </div>  
             </div>
        </>
    )
}
export default Itempage;