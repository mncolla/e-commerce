import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { RoutesWithNotFound } from '../utils'
import { PATH_AUTH, PATH_PAGE } from '.';
import { lazy } from "react";
import AuthGuard from "../guards/auth.guard";

const Signup = lazy(() => import('../pages/Signup'));
const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));
const Dashboard = lazy(() => import('../pages/Dashboard'));

const Router = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path="/" element={<Home />} />
        <Route path={PATH_AUTH.login} element={<Login />} />
        <Route path={PATH_AUTH.signup} element={<Signup />} />
        {/* routes only for logged users */}
        <Route element={<AuthGuard />}>
          <Route path={PATH_PAGE.dashboard} element={<Dashboard />} />
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  )
}
export default Router