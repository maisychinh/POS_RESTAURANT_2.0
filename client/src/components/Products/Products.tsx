import React, { Fragment } from "react";
import ProductCard from "./ProductCard";
import { useAppDispatch } from "../../store/hooks";
import { showHideActions } from "../../store/showhide-context";
const Products: React.FC<{
  products: {
    id: number;
    image: string;
    category: number;
    name: string;
    price: number;
    extras: {
      name: string;
      price: number;
    }[];
  }[];
}> = (props) => {
  const ProductsList = props.products;
  const dispatch = useAppDispatch();
  const addMealHandler = ()=>{
    dispatch(showHideActions.showFormHandler())
  }
  return (
    <Fragment>
      <div className="text-right mx-11 mt-3">
        <button
          onClick={addMealHandler}
          style={{ backgroundColor: "#e9ba23" }}
          className="animate-bounce px-3 py-2 text-white rounded-lg font-bold"
        >
          <span>+ </span>
          <span>Add Meal</span>
        </button>
      </div>
      <div className="grid grid-cols-6 gap-2 p-10">
        {ProductsList.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            rating={product.price}
            price={product.price}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Products;
