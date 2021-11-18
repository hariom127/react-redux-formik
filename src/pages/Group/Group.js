import React, { useEffect ,useState} from "react";
import { Tab, Tabs, Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import Layout from "../../components/Layout";
import AddGroupForm from "./AddGroupForm";
import PermissionForm from "./PermissionForm";
import ApiRoutes from "../../helper/ApiRoutes";
import { toast } from "react-toastify";
import Http from "../../helper/Http";
import Swal from "sweetalert2";
import  EditGroupForm from "./EditGroupForm";
import EditPermissionForm  from "./EditPermissionForm";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { getGroups } from "../../redux/action/GroupAction";
import { getPermissions } from "../../redux/action/PermissionAction";
import { getGroupPermissions,updateGroupPermissions } from "../../redux/action/GroupPermissionAction";
// import { updateGroups } from "../../redux/action/GroupAction";
const swalWithBootstrapButtonsDelete = Swal.mixin({
  customClass: {
    confirmButton: "btn-pill mx-1 btn btn-danger",
    cancelButton: "btn-pill mx-1 btn btn-neutral-secondary",
  },
  buttonsStyling: false,
});

export default function Group() {
  const dispatch = useDispatch();
 let [groupList, setGroupList] =  useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [is_EditGroup, setIs_EditGroup] = useState(false);
  const [is_EditPermission, setIs_EditPermission] = useState(false);
  const [Item,setItem] = useState({});
  const [group_id,setgroup_id] = useState("");
  let [permission_ids ,setpermission_ids] = useState([]);
  let array_permisssions = permission_ids;
   useEffect(() => {
      dispatch(getGroups());
      dispatch(getPermissions());
      dispatch(getGroupPermissions())
    }, []);

    const groupData = useSelector((state) => state.GroupReducer);
    groupList = groupData && groupData.group_data ? groupData.group_data : [];
    const PermissionData = useSelector((state) => state.PermissionReducer);
   let  PermissionList = PermissionData && PermissionData.permission_data ? PermissionData.permission_data : [];
   const GroupPermissionData = useSelector((state) => state.GroupPermissionReducer);
   let  GroupPermissionList = GroupPermissionData && GroupPermissionData.group_permission_data ? GroupPermissionData.group_permission_data : [];

 


 const  deleteGroup = async(itemId, index) =>{
    swalWithBootstrapButtonsDelete
    .fire({
      title: "<h5><b>Are you sure you want to delete this Group?</b></h5>",
      text: "You cannot undo this operation.",
      type: "error",
      width: 315,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: '<span class="btn-wrapper--label">Delete</span>',
      cancelButtonText: '<span class="btn-wrapper--label">Cancel</span>',
      reverseButtons: true,
    })
    .then(async (result) => {
      if (result.value) {
    let path = ApiRoutes.DELETE_GROUP + "/" + itemId;
    const res = await Http("DELETE", path);
    if (res) {
      const resJson = await res.json();

      if (res.status == 200) {
      dispatch(getGroups());
      toast(resJson.message, { type: "success", autoClose: 3000 });
       
      } else {
        toast(resJson.message, { type: "error", autoClose: 3000 });
      }
    } else {
      toast("Server Error", { type: "error", autoClose: 3000 });
    }
  }
})
 }

 const  deletePermission = async(itemId, index) =>{
  swalWithBootstrapButtonsDelete
  .fire({
    title: "<h5><b>Are you sure you want to delete this Permission?</b></h5>",
    text: "You cannot undo this operation.",
    type: "error",
    width: 315,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    confirmButtonText: '<span class="btn-wrapper--label">Delete</span>',
    cancelButtonText: '<span class="btn-wrapper--label">Cancel</span>',
    reverseButtons: true,
  })
  .then(async (result) => {
    if (result.value) {
  let path = ApiRoutes.DELETE_PERMISSION + "/" + itemId;
  const res = await Http("DELETE", path);
  if (res) {
    const resJson = await res.json();

    if (res.status == 200) {
    dispatch(getPermissions());
    toast(resJson.message, { type: "success", autoClose: 3000 });
     
    } else {
      toast(resJson.message, { type: "error", autoClose: 3000 });
    }
  } else {
    toast("Server Error", { type: "error", autoClose: 3000 });
  }
}
})
}

const handleChange =(e) =>{
  if(e.target.value){
  setpermission_ids([]);
 setgroup_id(e.target.value)
if(GroupPermissionList.length > 0 ){
let grouppermission =  GroupPermissionList.filter(element => e.target.value === element.group_id)
 grouppermission[0] && setpermission_ids(grouppermission[0].permission_ids) 

 }

}
}


const checkedpermission =(event) =>{
  const {checked} = event.target
  const val = event.target.value
   if(checked){
    val && array_permisssions.push(val);
    array_permisssions.length > 0  &&  setpermission_ids(array_permisssions)
   }
  else {
    permission_ids.splice(permission_ids.indexOf(val), 1)
  }
 }

   const clickHandle =()=>{
    let formData = new FormData();
    formData.append("group_id", group_id);
    formData.append("permissions", JSON.stringify(permission_ids));
    dispatch(updateGroupPermissions(formData))
   }
  return (
    <Layout sidebar header>
      <div className="dashboard_conatnt">
        <div className="mysales_outer add_group_contant">
          <Tabs
            defaultActiveKey="add_group"
            id="uncontrolled-tab-example"
            className="mb-2"
          >
            <Tab eventKey="add_group" title="Create Group">
              <div className="add_group_contant">
                { is_EditGroup ? <EditGroupForm groupdata={Item}/> : <AddGroupForm />
                 } 
                {/* Group form end */}
              </div>

              <div className="grp_listing_outer">
                <h2 className="dashboard_title">List Of Groups</h2>
                <ul>
                {groupList && groupList.length >0 && groupList.length >0 && groupList.map((item,index) =>{
                  return ( 
                    <li key={index}>
                    {" "}
                    <span className="">{item.name}</span>
                    <div className="item_review_action">
                      <a href={void 0} className="edit_icon" onClick={(e) => { setIs_EditGroup(true);setItem(item) }}>
                   
                        <i class="fas fa-pen"></i>
                        
                      </a>{" "}
                      <a href={void 0} className="edit_icon" onClick={(e) =>
                                   deleteGroup(item._id, index)
                                }>
                        <i class="fas fa-times"></i>
                      </a>
                    </div>
                  </li>
                  )
                  
                })
              }
                  
          </ul>
              </div>
            </Tab>

            <Tab eventKey="create_permission" title="Create Permission">
              <div className="add_group_contant">
                {/* Permission Form */}
             { is_EditPermission ? <EditPermissionForm  permissionData={Item}/> : <PermissionForm /> }   
                
                {/* Permission Form end */}
              </div>

              <div className="grp_listing_outer">
                <h2 className="dashboard_title">List Of Permission </h2>
                <ul>
                {PermissionList && PermissionList.length >0 && PermissionList.map((item,index) =>{
                  return ( 
                    <li key={index}>
                    {" "}
                    <span className="">{item.name}</span>
                    <div className="item_review_action">
                      <a href={void 0} className="edit_icon" onClick={(e) => { setIs_EditPermission(true);setItem(item) }}>
                   
                        <i class="fas fa-pen"></i>
                        
                      </a>{" "}
                      <a href={void 0} className="edit_icon" onClick={(e) =>
                                   deletePermission(item._id, index)
                                }>
                        <i class="fas fa-times"></i>
                      </a>
                    </div>
                  </li>
                  )
                  
                })
              }
                    {/* <span className="">Store Timings</span>
                    <div className="item_review_action">
                      <a href="#" className="edit_icon">
                        <i class="fas fa-pen"></i>
                      </a>{" "}
                      <a href="#" className="edit_icon">
                        <i class="fas fa-times"></i>
                      </a>
                    </div>
                  </li> */}
                </ul>
              </div>
            </Tab>

            <Tab eventKey="assign_permission" title="Assign Permission">
              <div className="add_group_contant">
              <Formik
               
              enableReinitialize
              
               >
                 
              {(formik) => (
                <Form className="theme_form">
                  <div className="form_row">
                    <Form.Group className="form-group fullwidth" controlId="">
                      <Form.Label>Select Role</Form.Label>
                      <Form.Select aria-label="Default select example"  onChange={handleChange}>
                      <option value ="">Select Role</option>
                      { groupList && groupList.length >0 &&  groupList.map((item)=>{
                        return (
                       <option value={item._id} >{item.name}</option>
                       )})}
                      </Form.Select>
                    </Form.Group>
                  </div>

                  <div className="grp_listing_outer">
                    <h2 className="dashboard_title">Assign Permission</h2>

                    <ul>
                    {PermissionList && PermissionList.length > 0 && PermissionList.map((item,index)=>{
                        return (
                    <li>
                        {" "}
                        <span className="">{item.name}</span>
                        <div className="item_review_action" >
                          <span className="switch">
                            {" "} 
                           <input type="checkbox" name="permission_id" value={item._id} onClick={checkedpermission} className={(permission_ids && permission_ids.includes(item._id))?"checkbox-b":false} /> 
                            
                            <span className="overswitch"></span>
                          </span>
                        </div>
                     </li>
                      )
                    }) }
                    </ul>
                  </div>
                 <Button className="btn green_btn" onClick={clickHandle} >Submit</Button>
                </Form>
                 )}
                </Formik>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </Layout>
  );

 }

