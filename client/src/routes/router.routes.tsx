import { BrowserRouter, Route } from "react-router-dom"
import { RoutesWithNotFound } from '../utils'
import { PATH_AUTH } from '.';
import { lazy } from "react";

const Signup = lazy(() => import('../pages/Signup'));
const Login = lazy(() => import('../pages/Login'));

const Router = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path={PATH_AUTH.login} element={<Login />} />
        <Route path={PATH_AUTH.signup} element={<Signup />} />
      </RoutesWithNotFound>
    </BrowserRouter>
  )
}
export default Router