import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import {
  fetchItems,
  deleteItem,
  updateItemStatus,
} from "../../redux/action/ItemAction";
import Swal from "sweetalert2";

const Items = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  // get item data
  const ItemsData = useSelector((state) => state.ItemReducer);

  // ----------delete start----------
  const swalWithBootstrapButtonsDelete = Swal.mixin({
    customClass: {
      confirmButton: "btn-pill mx-1 btn btn-danger",
      cancelButton: "btn-pill mx-1 btn btn-neutral-secondary",
    },
    buttonsStyling: false,
  });
  const onDelete = (e) => {
    let itemId = e.target.id;
    console.log(itemId);

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
          dispatch(deleteItem(itemId));
        }
      });

    //dispatch(deleteItem(itemId));
  };
  //-----------delete end------------

  // ----------update status---------------
  const onClickToggle = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      e.target.classList.remove("checkbox-b");
      e.target.classList.checked = false;
      dispatch(updateItemStatus(e.target.id));
    } else {
      e.target.classList.add("checkbox-b");
      e.target.classList.checked = true;
      dispatch(updateItemStatus(e.target.id));
    }
  };

  // ----------update status end-----------

  return (
    <Layout sidebar header>
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
                  <Link exact to={`/vendor/add-item`} className="btn item_btn">
                    Add Item
                  </Link>
                  <a href="#" className="btn item_btn">
                    Show Item
                  </a>
                </div>
              </div>

              {ItemsData &&
              ItemsData.payload &&
              ItemsData.payload.data &&
              ItemsData.payload.data &&
              ItemsData.payload.data.docs ? (
                ItemsData.payload.data.docs.map((product) => (
                  <div className="list_inner" key={product._id}>
                    <figure>
                      <img src={product.image_thumb_url} />
                    </figure>
                    <div className="past-order_detail">
                      <h5>
                        <a href="#">{product.name.en}</a>
                      </h5>
                      <div className="statusflow">
                        <div className="item_condition">
                          <strong>No. of Add-ons :</strong>
                          <span>0</span>
                        </div>
                        <div className="item_condition">
                          <strong>No. of Variants :</strong>
                          <span>0</span>
                        </div>
                        <div className="item_condition">
                          <strong>Customized :</strong>
                          <span>Veg</span>
                        </div>
                        <div className="item_condition">
                          <strong>Category :</strong>
                          <span>{product.category.name.en}</span>
                        </div>
                      </div>
                    </div>

                    <div className="item_right">
                      <span className="switch">
                        <span className="line_condition">Status</span>
                        <input
                          type="checkbox"
                          // checked={product.is_active}
                          value={product.is_active}
                          id={product._id}
                          className={product.is_active ? "checkbox-b" : false}
                          onChange={onClickToggle}
                        />
                        <span className="overswitch"></span>
                      </span>
                      <div className="item_review_action">
                        <a href="#" className="edit_icon">
                          <i className="fas fa-pen"></i>
                        </a>
                        <a
                          href="javascript:void(0)"
                          onClick={onDelete}
                          className="edit_icon"
                        >
                          <i className="fas fa-times" id={product._id}></i>
                        </a>
                      </div>
                      <span className="item_value">BHD {product.price}</span>
                    </div>
                  </div>
                ))
              ) : (
                <h2>Product not found</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Items;
