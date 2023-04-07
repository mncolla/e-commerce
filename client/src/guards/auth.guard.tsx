import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { PATH_AUTH } from '../routes';
import { AppStore } from '../redux/store';
import { PropsWithChildren } from 'react';

export const AuthGuard = (props: PropsWithChildren) => {

  const userState = useSelector((store: AppStore) => store.user);
  return userState.username ? (
    <Outlet />
  ) : (
    <Navigate replace to={PATH_AUTH.login} />
  );
};

export default AuthGuard;