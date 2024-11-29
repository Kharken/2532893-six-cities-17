// noinspection JSDeprecatedSymbols

import Header from '../header/header.tsx';
import {Outlet} from 'react-router-dom';

export default function Layout():JSX.Element{
  return(
    <>
      <Header/>
      <Outlet/>
    </>
  );
}

