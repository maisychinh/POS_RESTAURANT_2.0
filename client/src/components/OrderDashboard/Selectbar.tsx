import { Categories } from "../../store/categories-context";
import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { productsAction } from "../../store/products-context";
const SelectBar = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useAppDispatch();
  const onChangeHandler = (event:React.FormEvent<HTMLSelectElement>)=>{  
    // setSelectedValue(event.currentTarget.value)
    // console.log(event.currentTarget.value)
    // dispatch(productsAction.filterByCategoryHandler({ value: event.currentTarget.value }));
  }
  return (
    <div className="flex justify-end">
      <div className="xl:w-40">
        <select
        //   value={selectedValue}
          onChange={onChangeHandler}
          className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
        >
          <option selected value={Categories.ALL}>All</option>
          <option value={Categories.CUPCAKE}>Waiting</option>
          <option value={Categories.DRINK}>Completed</option>
          <option value={Categories.ICESCREAM}>Rejected</option>
        </select>
      </div>
    </div>
  );
};

export default SelectBar;
