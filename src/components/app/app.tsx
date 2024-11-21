import MainScreen from '../pages/main-screen/main-screen.tsx';

type AppProps = {
  offersCount: number;
}

export default function App({offersCount}: AppProps):JSX.Element{
  return (
    <MainScreen offersCount={offersCount}/>
  );
}
