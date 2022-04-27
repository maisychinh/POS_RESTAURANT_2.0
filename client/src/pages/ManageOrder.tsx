import React, { useEffect, useState } from 'react'
import NavbarDashboard from '../components/NavbarDashboard/NavbarDashboard'
import OrderDashboard from '../components/OrderDashboard/OrderDashboard'
import Layout from '../components/UI/LayoutDashboard'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { orderActions } from '../store/order-context'
const ManageOrder = () => {
  
  return (
    <Layout>
        <NavbarDashboard />
        <OrderDashboard />
    </Layout>
  )
}

export default ManageOrder