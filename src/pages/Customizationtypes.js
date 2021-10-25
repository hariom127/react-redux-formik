import React from 'react';
import { Accordion, Col, Row , Table } from "react-bootstrap";
import FigureCaption from 'react-bootstrap/esm/FigureCaption';
import Sidebar from '../components/Sidebar'

const Customizationtypes = () => {
    return (

        <>
         <Sidebar />
            <div className="dashboard_conatnt customizatin_page">
                    <h2 className="dashboard_title">Customization Types</h2>

            <div className="customizarion_form">
                 <div className="search_form"><input type="text" placeholder="Menu Item" /><button className="search_btn"><img src="./assets/images/search-icon.png" /></button></div>
                 <button className="btn btn-primary">Reset</button>
            </div>


        <div className="customization_table">
            <div className="customiz_head">
                1-10 of 15
                <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                </select>
            </div>


            <Table responsive bordered hover>
                <thead>
                    <tr>
                    <th>S.No.</th>
                    <th>Sub Type Name</th>
                    <th>Type Name</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>01</td>
                    <td>150 ml</td>
                    <td>Volume</td>
                    <td>
                        <div className="table_action">
                            <a href="#"><img src="./assets/images/edit.png" /></a>
                            <a href="#"><img src="./assets/images/delete.png" /></a>
                        </div>

                    </td>
                    </tr>

                    <tr>
                    <td>01</td>
                    <td>150 ml</td>
                    <td>Volume</td>
                    <td>
                        <div className="table_action">
                            <a href="#"><img src="./assets/images/edit.png" /></a>
                            <a href="#"><img src="./assets/images/delete.png" /></a>
                        </div>

                    </td>
                    </tr>

                    <tr>
                    <td>01</td>
                    <td>150 ml</td>
                    <td>Volume</td>
                    <td>
                        <div className="table_action">
                            <a href="#"><img src="./assets/images/edit.png" /></a>
                            <a href="#"><img src="./assets/images/delete.png" /></a>
                        </div>

                    </td>
                    </tr>


                    <tr>
                    <td>01</td>
                    <td>150 ml</td>
                    <td>Volume</td>
                    <td>
                        <div className="table_action">
                            <a href="#"><img src="./assets/images/edit.png" /></a>
                            <a href="#"><img src="./assets/images/delete.png" /></a>
                        </div>

                    </td>
                    </tr>


                    <tr>
                    <td>01</td>
                    <td>150 ml</td>
                    <td>Volume</td>
                    <td>
                        <div className="table_action">
                            <a href="#"><img src="./assets/images/edit.png" /></a>
                            <a href="#"><img src="./assets/images/delete.png" /></a>
                        </div>

                    </td>
                    </tr>

                    <tr>
                    <td>01</td>
                    <td>150 ml</td>
                    <td>Volume</td>
                    <td>
                        <div className="table_action">
                            <a href="#"><img src="./assets/images/edit.png" /></a>
                            <a href="#"><img src="./assets/images/delete.png" /></a>
                        </div>

                    </td>
                    </tr>


                </tbody>
                </Table>


        </div>
















            </div>        
        </>
    )
}
export default Customizationtypes;