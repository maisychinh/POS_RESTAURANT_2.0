import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import FoodCategories from "./pages/FoodCategories";
import FoodCategoriesDetail from "./pages/FoodCategoryDetail";
import Menu from "./pages/Menu";
import Payment from "./pages/Payment";
import LayoutPayment from "./components/UI/LayoutPayment";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ManageMenu from "./pages/ManageMenu";
import ManageOrder from "./pages/ManageOrder";
import ManageKitchen from "./pages/ManageKitchen";
import StatusOfOrder from "./pages/StatusOfOrder";
function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home></Home>
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/manager/dashboard/menu" exact>
        <ManageMenu />
      </Route>
      <Route path="/manager/dashboard/order" exact>
        <ManageOrder />
      </Route>
      <Route path="/manager/dashboard/kitchen" exact>
        <ManageKitchen />
      </Route>
      <Route path="/signup" exact>
        <Signup />
      </Route>
      <Route path="/menu" exact>
        <Layout>
          <Menu></Menu>
        </Layout>
      </Route>
      <Route path="/status" exact>
          <StatusOfOrder />
      </Route>
      <Route path="/categories" exact>
        <FoodCategories></FoodCategories>
      </Route>
      <Route path="/categories/:categoryId">
        <FoodCategoriesDetail></FoodCategoriesDetail>
      </Route>
      <Route path="/payment">
        <LayoutPayment>
          <Payment></Payment>
        </LayoutPayment>
      </Route>
      <Route path="*">
        <Redirect to="/"></Redirect>
      </Route>
    </Switch>
  );
}

export default App;
