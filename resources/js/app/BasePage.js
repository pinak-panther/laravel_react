import React, { Suspense, lazy } from "react";
import {Redirect, Switch, Route, BrowserRouter} from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import ListProduct from "./pages/Product/ListProduct";
import AddProduct from "./pages/Product/AddProduct";
import EditProduct from "./pages/Product/EditProduct";

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (

      <Suspense fallback={<LayoutSplashScreen />}>
        <Switch>
            {
              /* Redirect from root URL to /dashboard. */
              <Redirect exact from="/" to="/product-list" />
            }
            <ContentRoute path="/dashboard" component={DashboardPage} />
            <ContentRoute path="/builder" component={BuilderPage} />
            {/*<ContentRoute path="/my-page" component={MyPage} />*/}
            <Route path="/my-page" component={MyPage} />
            <ContentRoute path="/product-list" component={ListProduct} />
            <ContentRoute path="/product-add" component={AddProduct} />
            <ContentRoute path="/product-edit/:id" component={EditProduct} />
            <Redirect to="error/error-v1" />
        </Switch>

    </Suspense>
  );
}
