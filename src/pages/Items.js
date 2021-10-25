import React from 'react';
import { Nav, Button , Form } from "react-bootstrap";
import FigureCaption from 'react-bootstrap/esm/FigureCaption';
import Sidebar from '../components/Sidebar'

const Items = () => {
    return (

        <>
            <Sidebar />
            <div className="dashboard_conatnt">
                <h2 className="dashboard_title">Items</h2>
                    <div className="past_order_contant">
                    <form>  
                        <div className="form_search_item">
                            <select>
                                <option value="volvo">Search by Name</option>
                                <option value="saab">Monday</option>
                                <option value="opel">Tuesday</option>
                                <option value="audi">wednesday</option>
                            </select>

                            <select>
                                <option value="volvo">Search by Type</option>
                                <option value="saab">Monday</option>
                                <option value="opel">Tuesday</option>
                                <option value="audi">wednesday</option>
                            </select>

                            <select>
                                <option value="volvo">Search by Category</option>
                                <option value="saab">Monday</option>
                                <option value="opel">Tuesday</option>
                                <option value="audi">wednesday</option>
                            </select>            
                            <Button className="btn search_btn">Search</Button>

                           </div>  
                           
                                                        
                     </form>           

                               
            <div className="pastorder_list items_page">       

                    <div className="order_list_outer">
                        <div className="items_page_head">
                         <strong className="strong_cont">Category 1</strong>
                           <div className="item_action">
                               <a href="#" className="btn item_btn">Add Item</a>
                                <a href="#" className="btn item_btn">Show Item</a>
                            </div> 
                        </div>

                        <div class="list_inner">
                            <figure><img src="./assets/images/chart.jpg" /></figure>
                             <div className="past-order_detail">
                             <h5><a href="#">Mexican Green Wave</a></h5>
                              <div className="statusflow">
                              <span className="veg">Veg</span>
                                <div className="item_condition"><strong>Customized :</strong><span>Veg</span></div>
                                <div className="item_condition"><strong>Category  :</strong><span>Pizza</span></div> 
                               </div>   
                             </div>
                            
                            <div className="item_right">
                            <span className="switch"> <span className="line_condition">Status</span><input type="checkbox" /><span class="overswitch"></span></span>
                             <div className="item_review_action">
                                <a href="#" className="edit_icon"><i class="fas fa-pen"></i></a> 
                                <a href="#" className="edit_icon"><i class="fas fa-times"></i></a>                                  
                             </div>  
                             <span className="item_value">BHD20.00</span> 
                            </div> 
                        </div>

                        <div class="list_inner">
                            <figure><img src="./assets/images/chart.jpg" /></figure>
                             <div className="past-order_detail">
                             <h5><a href="#">Mexican Green Wave</a></h5>
                              <div className="statusflow">
                              <span className="veg">Veg</span>
                                <div className="item_condition"><strong>Customized :</strong><span>Veg</span></div>
                                <div className="item_condition"><strong>Category  :</strong><span>Pizza</span></div> 
                               </div>   
                             </div>
                            
                            <div className="item_right">
                            <span className="switch"> <span className="line_condition">Status</span><input type="checkbox" /><span class="overswitch"></span></span>
                             <div className="item_review_action">
                                <a href="#" className="edit_icon"><i class="fas fa-pen"></i></a> 
                                <a href="#" className="edit_icon"><i class="fas fa-times"></i></a>                                  
                             </div>  
                             <span className="item_value">BHD20.00</span> 
                            </div> 
                        </div>

                        <div class="list_inner">
                            <figure><img src="./assets/images/chart.jpg" /></figure>
                             <div className="past-order_detail">
                             <h5><a href="#">Veggies Paradise</a></h5>
                              <div className="statusflow">
                              <span className="veg">Veg</span>
                                <div className="item_condition"><strong>Customized :</strong><span>Veg</span></div>
                                <div className="item_condition"><strong>Category  :</strong><span>Pizza</span></div> 
                               </div>   
                             </div>
                            
                            <div className="item_right">
                            <span className="switch"> <span className="line_condition">Status</span><input type="checkbox" /><span class="overswitch"></span></span>
                             <div className="item_review_action">
                                <a href="#" className="edit_icon"><i class="fas fa-pen"></i></a> 
                                <a href="#" className="edit_icon"><i class="fas fa-times"></i></a>                                  
                             </div>  
                             <span className="item_value">BHD20.00</span> 
                            </div> 
                        </div>
               
                    
              

                    </div> 
            </div>
                  
      
 
                    </div>  
             </div>
        </>
    )
}
export default Items;