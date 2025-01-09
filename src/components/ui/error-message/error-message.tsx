import {useAppSelector} from '../../../utility/hooks.ts';
import './error-message.css';


export function ErrorMessage(): JSX.Element | null{
  const error = useAppSelector((state) => state.error);
  return(error)
    ? <div className='error-message'>{error}</div>
    : null;
}
