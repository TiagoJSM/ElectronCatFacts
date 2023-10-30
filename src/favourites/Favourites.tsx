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
  removeFromFavourites: (id: number) => void;
}

class Favourites extends React.Component<FavouritesProps> {
  render() {
    const { favourites, removeFromFavourites } = this.props;

    return (
      <div>
        <h1>Favourite Facts</h1>
        {
          favourites.map((f, i) => {
            const controlButtonProps = [
              {
                buttonText: "Remove from favourites",
                buttonClick: () => removeFromFavourites(f.id)
              }
            ]
            return (<CatFactDisplay key={i.toString()} fact={f.fact} loadingFactSuccess controlButtons={controlButtonProps} />);
          })
        }
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