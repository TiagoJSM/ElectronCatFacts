import React from "react";
import { connect } from "react-redux";
import ReactLoading from 'react-loading';
import { AppState } from '../redux/store/store';
import CatFactDisplay from "../shared/CatFactDisplay";
import { fetchCatFact, addToFavourites } from "../redux/effects/effects"
import { AppDispatch } from '../redux/store/store';

interface DailyCatFactProps {
  id: number;
  fact: string;
  loadingFact: boolean;
  loadingFactSuccess: boolean;
  fetchCatFact: () => void;
  addToFavourites: (id: number) => void;    
}

class DailyCatFact extends React.Component<DailyCatFactProps> {
  render() {
    const { id, fact, loadingFact, loadingFactSuccess, fetchCatFact, addToFavourites } = this.props;
    const controlButtonProps = [
      {
        buttonText: "Add to favourites",
        buttonClick: () => addToFavourites(id)
      },
      {
        buttonText: "Refresh",
        buttonClick: fetchCatFact
      }
    ]
    return (
      <div>
        <h1>Daily Cat Fact</h1>
        {loadingFact ? 
          (<ReactLoading type="spin" color="#000" />) :
          (<CatFactDisplay fact={fact} loadingFactSuccess={loadingFactSuccess} controlButtons={controlButtonProps} />)}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  const { id, fact, loadingFact, loadingFactSuccess } = state.catFacts;
  return { id, fact, loadingFact, loadingFactSuccess };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    fetchCatFact: () => dispatch(fetchCatFact),
    addToFavourites: (id: number) => dispatch(addToFavourites(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyCatFact)