import React, { useEffect, useState } from "react";
import NavbarDashboard from "../components/NavbarDashboard/NavbarDashboard";
import Products from "../components/Products/Products";
import SortBar from "../components/Sortbar/Sortbar";
import LayoutDashboard from "../components/UI/LayoutDashboard";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import Modal from "../components/UI/Modal";
import AddMealForm from "../components/AddMealForm";
import { productsAction } from "../store/products-context";
const ManageMenu = () => {
  const products = useAppSelector((state) => state.products.items);
  const dispatch = useAppDispatch();
  const showForm = useAppSelector((state) => state.showhide.showForm);
  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch("http://127.0.0.1:8000/api/order");
      const data = await res.json();
      dispatch(productsAction.setProduct(data));
    };
    getProduct();
  }, []);
  return (
    <LayoutDashboard>
      {showForm && (
        <Modal>
          <AddMealForm />
        </Modal>
      )}
      <NavbarDashboard></NavbarDashboard>
      <SortBar />
      <Products products={products} />
    </LayoutDashboard>
  );
};

export default ManageMenu;
