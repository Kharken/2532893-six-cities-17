
import OfferMark from '../../ui/offer-mark/offer-mark.tsx';
import {IMocksData} from '../../../mocks/offers.ts';
import {FavoritesLocationsItemPropsType} from '../favorites-locations-item/favorites-locations-item.tsx';
import {Link} from 'react-router-dom';
import {RoutePath} from '../../../data/routes.ts';

export default function FavoriteCard({cityName, offers}: FavoritesLocationsItemPropsType){

  const offer: IMocksData | undefined = offers.find((item) => item.city.name === cityName);

  return (
    <article className="favorites__card place-card">
      {offer?.isPremium ? <OfferMark status={'Premium'}/> : null}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={RoutePath.OFFER}>
          <img className="place-card__image"
            src={offer?.previewImage}
            width="150"
            height="110"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer?.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg className="place-card__bookmark-icon"
              width="18"
              height="19"
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '100%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={RoutePath.OFFER}>Nice, cozy, warm big bed apartment</Link>
        </h2>
        <p className="place-card__type">{offer?.type}</p>
      </div>
    </article>
  );
}
