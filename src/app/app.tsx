import {ReactNode} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import MainScreen from '../pages/main-screen/main-screen.tsx';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen.tsx';
import LoginScreen from '../pages/login-screen/login-screen.tsx';
import FavoriteScreen from '../pages/favorites-screen/favorite-screen.tsx';
// import FavoriteScreen from "../pages/favorites-screen/favorite-screen.tsx";
// import FavoritesEmptyScreen from "../pages/favorites-empty-screen/favorites-empty-screen.tsx";
// import LoginScreen from "../pages/login-screen/login-screen.tsx";
// import MainEmptyScreen from "../pages/main-empty-screen/main-empty-screen.tsx";
// import OfferScreen from "../pages/offer-screen/offer-screen.tsx";
// import OfferNotLoggedScreen from "../pages/offer-not-logged-screen/offer-not-logged-screen.tsx";


type AppProps = {
  offersCount: number;
}

export default function App({offersCount}: AppProps): ReactNode {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<MainScreen offersCount={offersCount}/>}
        />
        <Route
          path='/login'
          element={<LoginScreen/>}
        />
        <Route
          path='/favorites'
          element={<FavoriteScreen/>}
        />
        <Route
          path='*'
          element={<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
