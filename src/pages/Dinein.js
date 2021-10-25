import {React  , useState} from "react";
import { Tab , Tabs  , ForhandleShow , Button, Modal } from "react-bootstrap";
import Sidebar from '../components/Sidebar'

const Dinein = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <>
            <Sidebar />
            <div className="dashboard_conatnt">
                <h2 className="dashboard_title mysales_title">Dinein</h2>
                    <div className="mysales_contant"> 
                       <span className="sales_count">BHD20.00</span> 

                        <div className="mysales_outer">

                        <Tabs defaultActiveKey="request" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="request" title="New Request">
                            <div className="dinein_tab_contant_wrapper">
                                <div className="new_request">
                                    <span className="request_number">Request Number:#65645641</span>
                                    <ul className>
                                        <li><h6>Hussain</h6><span className="valuedinen">+973-6556456145</span></li>
                                        <li><h6>Request Type</h6><span className="valuedinen">Dine in</span></li>
                                        <li><h6>Dine in Date and time</h6><span className="valuedinen">15 Sep. 2021, 07:00 PM</span></li>
                                        <li><h6>No. of persons</h6><span className="valuedinen">10 Persons</span></li>
                                        <li><h6>Special Note</h6><span className="valuedinen">I want table in the corner</span></li>
                                        <li><h6>Request Status</h6><span className="valuedinen">Unknown</span></li> 
                                    </ul>
                                    <div className="tabs_Action">
                                        <a href="#" className="btn"><i class="fas fa-check"></i>Accept</a>
                                        <a href="#" className="btn redisclr"><i class="fas fa-times"></i>Decline</a>
                                    </div>
                                    </div>
                                </div>

                                <div className="dinein_tab_contant_wrapper">
                                <div className="new_request">
                                    <span className="request_number">Request Number:#65645641</span>
                                    <ul className>
                                        <li><h6>Hussain</h6><span className="valuedinen">+973-6556456145</span></li>
                                        <li><h6>Request Type</h6><span className="valuedinen">Dine in</span></li>
                                        <li><h6>Dine in Date and time</h6><span className="valuedinen">15 Sep. 2021, 07:00 PM</span></li>
                                        <li><h6>No. of persons</h6><span className="valuedinen">10 Persons</span></li>
                                        <li><h6>Special Note</h6><span className="valuedinen">I want table in the corner</span></li>
                                        <li><h6>Request Status</h6><span className="valuedinen">Unknown</span></li> 
                                    </ul>
                                    <div className="tabs_Action">
                                        <a href="#" className="btn"><i class="fas fa-check"></i>Accept</a>
                                        <a href="#" className="btn redisclr"><i class="fas fa-times"></i>Decline</a>
                                    </div>
                                    </div>
                                </div> 
                            </Tab>
                            <Tab eventKey="Weekly" title="Confirmed">
                                 xyz
                            </Tab>
                            <Tab eventKey="Quarterly" title="Cancelled">
                                 xyz..
                            </Tab>
                            <Tab eventKey="Monthly" title="Calendar">
                                 <div className="calender" onClick={handleShow}>
                                     <img src="./assets/images/calender.png" />
                                 </div>
                            </Tab>
  
                        </Tabs> 
                        </div> 

                    </div>  

             </div>


       

      <Modal show={show} onHide={handleClose} className="select_date_modal_outer">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>   
            <div className="select_date">
                <ul>
                    <li><p><h6>Order No. :</h6> <span>#4534534523324</span></p><p><h6>Time:</h6> <span> 10:30 PM 21 Sep. 2021</span></p></li>
                    <li><p><h6>Order No. :</h6> <span>#4534534523324</span></p><p><h6>Order No. :</h6> <span>12:30 PM 19 Sep. 2021</span></p></li>
                    <li><p><h6>Order No. :</h6> <span>#4534534523324</span></p><p><h6>Order No. :</h6> <span>12:30 PM 19 Sep. 2021</span></p></li> 
                </ul>
             </div>

        </Modal.Body>
      </Modal>




        </>
    )
}
export default Dinein;