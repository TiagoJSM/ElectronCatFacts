import React from "react";

interface ControlButtonProps {
  buttonText: string;
  buttonClick: () => void;
}

interface ControlButtonsProps {
  controlButtons: ControlButtonProps[];
}

class ControlButtons extends React.Component<ControlButtonsProps> {
  render() {
    const { controlButtons } = this.props;
    return (
      <div>
        {
          controlButtons.map((cb, i) => (<button key={i} onClick={cb.buttonClick}>{cb.buttonText}</button>))
        }
      </div>
    );
  }
}

interface CatFactDisplayProps {
  fact: string;
  loadingFactSuccess: boolean;
  controlButtons: ControlButtonProps[];
}

interface CatFactDisplayState {
  showControlButtons: boolean
}

export default class CatFactDisplay extends React.Component<CatFactDisplayProps, CatFactDisplayState> {
  constructor(props: CatFactDisplayProps) {
    super(props);
    this.state = {
      showControlButtons: false
    };
  }

  render() {
    const { fact, loadingFactSuccess, controlButtons } = this.props;
    const { showControlButtons } = this.state;

    if (!loadingFactSuccess) {
      return (<div>Error loading fact, try again later.</div>);
    }

    return (
      <div
        onMouseEnter={() => this.setState({ showControlButtons: true })}
        onMouseLeave={() => this.setState({ showControlButtons: false })}
      >
        <div>{fact}</div>
        {showControlButtons ? (<ControlButtons controlButtons={controlButtons} />) : null}
      </div>
    );
  }
}