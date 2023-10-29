import React from "react";
import { connect } from "react-redux";
import ReactLoading from 'react-loading';
import CatFactDisplay from "./CatFactDisplay";

interface DailyCatFactProps {
  fact: string;
  loadingFact: boolean;
  loadingFactSuccess: boolean;
}

class DailyCatFact extends React.Component<DailyCatFactProps> {
  render() {
    const { fact, loadingFact, loadingFactSuccess } = this.props;
    return (
      <div>
        <h1>Daily Cat Fact</h1>
        {loadingFact ? 
          (<ReactLoading type="spin" color="#000" />) :
          (<CatFactDisplay fact={fact} loadingFactSuccess={loadingFactSuccess} />)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { fact, loadingFact, loadingFactSuccess } = state.catFacts;
  return { fact, loadingFact, loadingFactSuccess };
};

export default connect(mapStateToProps)(DailyCatFact)