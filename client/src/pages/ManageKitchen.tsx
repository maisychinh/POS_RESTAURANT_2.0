import React from 'react'
import Kitchen from '../components/Kitchen/Kitchen'
import NavbarDashboard from '../components/NavbarDashboard/NavbarDashboard'
import Layout from '../components/UI/LayoutDashboard'

const ManageKitchen = () => {
  return (
    <Layout>
        <NavbarDashboard />
        <Kitchen />
    </Layout>
  )
}

export default ManageKitchen