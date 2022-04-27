import React from "react";
import { BiEdit } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { productsAction } from "../../store/products-context";
import { useAppDispatch } from "../../store/hooks";
const ProductCard: React.FC<{
  id: number;
  image: string;
  name: string;
  price: number;
  rating: number;
}> = (props) => {
  const { id, image, name, price } = props;
  console.log(image)
  const dispatch = useAppDispatch();
  const onRemoveHandler = async () => {
    console.log("onRemoveHandler");
    try {
      const res = await fetch(
        "http://127.0.0.1:8000/api/manager/menu-item/delete",
        {
          method: "POST",
          body: JSON.stringify({
            id: id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        dispatch(productsAction.removeProductHandler(id));
      }
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="w-48 h-56 drop-shadow-lg bg-color-red border-solid border-2 rounded-lg cursor-pointer">
      <TiDelete
        onClick={onRemoveHandler}
        className="transition duration-75 ease-in-out hover:-translate-y-1 hover:scale-100 text-3xl absolute right-1 top-1 bg-white rounded-full"
        style={{ color: "#e9ba23" }}
      />
      <img
        className="w-48 h-36 object-fill rounded-t-lg"
        src={image}
        alt="productcard"
      />
      <div className="p-3">
        <p className="pb-2">{name}</p>
        <div className="flex justify-between items-center h-6">
          <div>${price}</div>
          <div className="flex items-center h-5 w-15">
            <BiEdit className="transition duration-75 ease-in-out hover:-translate-y-1 hover:scale-110 text-2xl text-lime-500 hover:text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
