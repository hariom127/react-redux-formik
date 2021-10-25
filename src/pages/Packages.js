import React from 'react';
import { Nav, Button , Form } from "react-bootstrap";
import FigureCaption from 'react-bootstrap/esm/FigureCaption';
import Sidebar from '../components/Sidebar'

const Packages = () => {
    return (

        <>
           <Sidebar /> 
           <div className="dashboard_conatnt">
                <h2 className="dashboard_title">Packages</h2>

                <div className="pastorder_list items_page catering_Page_wrapper packages_Page"> 
                    <div className="order_list_outer">
                        <div className="items_page_head">
                        <strong className="strong_cont">Packages</strong>
                        
                        </div>

                        <div class="list_inner">
                            <figure><img src="./assets/images/chart.jpg" /></figure>
                            <div className="past-order_detail">
                            <h5><a href="#">Package 1</a></h5>
                            <div className="statusflow">
                                <small className="veg">Beverages</small>                                   
                            </div>   
                            </div>
                            
                            <div className="item_right">                           
                                <div className="item_review_action">                                  
                                    <a href="#" className="edit_icon"><i class="fas fa-times"></i></a>                                  
                                </div>                              
                            </div> 
                        </div>

                        <div class="list_inner">
                            <figure><img src="./assets/images/chart.jpg" /></figure>
                            <div className="past-order_detail">
                            <h5><a href="#">Package 1</a></h5>
                            <div className="statusflow">
                                <small className="veg">Beverages</small>                                
                            </div>   
                            </div>
                            
                            <div className="item_right">                           
                                <div className="item_review_action">                                  
                                    <a href="#" className="edit_icon"><i class="fas fa-times"></i></a>                                  
                                </div>                              
                            </div> 
                        </div>

                        <div class="list_inner">
                            <figure><img src="./assets/images/chart.jpg" /></figure>
                            <div className="past-order_detail">
                            <h5><a href="#">Package 1</a></h5>
                            <div className="statusflow">
                                <small className="veg">Beverages</small>                                 
                            </div>   
                            </div>
                            
                            <div className="item_right">                           
                                <div className="item_review_action">                                   
                                    <a href="#" className="edit_icon"><i class="fas fa-times"></i></a>                                  
                                </div>                              
                            </div> 
                        </div>

                    </div> 
                </div> 
            </div> 






        </>
    )
}
export default Packages;