import FavoriteCard from '../favorite-card/favorite-card.tsx';
import {IMocksData} from '../../../mocks/offers.ts';
import {FavoritesLocationsItemPropsType} from '../favorites-locations-item/favorites-locations-item.tsx';


// noinspection JSDeprecatedSymbols
export default function FavoritePlaces({cityName, offers}: FavoritesLocationsItemPropsType): JSX.Element{
  const favoriteOffersList: IMocksData[] = offers.filter((offer) => offer.isFavorite);
  const favoriteOffer = favoriteOffersList.find((item) => item.city.name === cityName);
  const cityFavoritesOffersList: IMocksData[] = favoriteOffersList.filter((offer) => offer.city.name === cityName);
  return (
    <div className="favorites__places">
      {cityFavoritesOffersList.length ? cityFavoritesOffersList.map((item) => (<FavoriteCard {...favoriteOffer} key={item.id}/>)) : null}
    </div>
  );
}
