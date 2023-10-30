import React from "react";
import { connect } from "react-redux";
import ReactLoading from 'react-loading';
import { AppState } from '../redux/store/store';
import CatFactDisplay from "../shared/CatFactDisplay";
import { removeFromFavourites } from "../redux/effects/effects";
import { Favourite } from "../redux/reducers/favourites";
import { AppDispatch } from '../redux/store/store';


interface FavouritesProps {
  favourites: Favourite[];
  loadingFact: boolean;
  loadingFactSuccess: boolean;
  removeFromFavourites: (id: number) => void;    
}
  
  class Favourites extends React.Component<FavouritesProps> {
    render() {
      const { favourites, loadingFact, loadingFactSuccess, removeFromFavourites } = this.props;
      return (
        <div>
          <h1>Favourite Facts</h1>
          {favourites.map((f, i) => (<CatFactDisplay key={i.toString()} fact={f.fact} loadingFactSuccess leftButtonText="Remove from favourites" leftButtonClick={() => removeFromFavourites(f.id)} rightButtonText={null} rightButtonClick={null} />))}
          {/* {loadingFact ? 
            (<ReactLoading type="spin" color="#000" />) :
            (favourites.map((f, i) => (<CatFactDisplay key={i.toString()} fact={f.fact} loadingFactSuccess={loadingFactSuccess} leftButtonText="Remove from favourites" leftButtonClick={() => removeFromFavourites(f.id)} rightButtonText={null} rightButtonClick={null} />)))} */}
        </div>
      );
    }
  }

  const mapStateToProps = (state: AppState) => {
    const favourites = state.favourites.favourites;
    return { favourites };
  };
  
  const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
      removeFromFavourites: (id: number) => dispatch(removeFromFavourites(id))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Favourites)