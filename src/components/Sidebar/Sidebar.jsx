import './Sidebar.css';
import { assets } from '../../assets/assets';
import { useDispatch } from 'react-redux';
import { setPage } from '../../global/sideBar/createSlice';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleChange = (page) => () => {
    dispatch(setPage(page));
  // console.log(page); 

  }


  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <button onClick={handleChange("add")} className="sidebar-option">
          <img src={assets.add_icon} />
          <p>Add Items</p>
        </button>
        <button onClick={handleChange("list")} className="sidebar-option">
          <img src={assets.order_icon}/>
          <p>List Items</p>
        </button>
        <button onClick={handleChange("orders")} className="sidebar-option">
          <img src={assets.order_icon} />
          <p>Orders</p>
        </button>
        <button onClick={handleChange("account")} className="sidebar-option">
          <img src={assets.account_image} height="30" />
          <p>Account</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;