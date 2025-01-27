import React from "react";
import "./CustomizableButton.css";
import { useDispatch, useSelector } from "react-redux";
import { setisCustomizable } from "../../global/AddForm/customizableButtonSlice";

function CustomizableSelector() {
  const dispatch = useDispatch();
  const isCustomizable = useSelector((state) => state.add.customBtn);

  const handleCustomizable = (event) => {
    const isChecked = event.target.checked;
    dispatch(setisCustomizable(isChecked));
    console.log(isCustomizable);
  };

  return (
    <div>
      <h1>Set Customizable</h1>
      <div className="customizable">
      <label htmlFor="checkbox">isCustomizable</label>
      <input
        type="checkbox"
        name="isCustomize"
        checked={isCustomizable}
        onChange={handleCustomizable}
      />
      </div>
      
    </div>
  );
}

export default CustomizableSelector;