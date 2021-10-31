import {Link} from 'react-router-dom'
//import classes from './MainNavigation.module.css'
//import {useContext} from 'react';
//import FavoritesContext from '../../store/Favorites-context';

function MainNavigation(){
//const favoritesCtx = useContext(FavoritesContext);

 return(
     <header >
         <div >React Meetups</div>
         <ul>
             <li>
            <Link to='/'>Home</Link>
             </li>
             <li>
            <Link to='/settings'>Settings
            </Link>
             </li>
             <li>
            <Link to='/board'>Board</Link>
             </li>
         </ul>
     </header>
 );   
}

export default MainNavigation;