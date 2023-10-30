import React from "react";

interface ControlButtonProps {
  buttonText: string;
  buttonClick: () => void;
}

class ControlButton extends React.Component<ControlButtonProps> {
  render() {
    const { buttonText, buttonClick } = this.props;
    if (buttonText && buttonClick) {
      return (<button onClick={buttonClick}>{buttonText}</button>);
    }
    return null;
  }
}

interface ControlButtonsProps {
  leftButtonText: string;
  leftButtonClick: () => void;
  rightButtonText: string;
  rightButtonClick: () => void;
}

class ControlButtons extends React.Component<ControlButtonsProps> {
  render() {
    const { leftButtonText, leftButtonClick, rightButtonText, rightButtonClick } = this.props;
    return (
      <div>
        <ControlButton buttonText={leftButtonText} buttonClick={leftButtonClick} />
        <ControlButton buttonText={rightButtonText} buttonClick={rightButtonClick} />
      </div>
    );
  }
}

interface CatFactDisplayProps {
  fact: string;
  loadingFactSuccess: boolean;
  leftButtonText: string;
  leftButtonClick: () => void;
  rightButtonText: string;
  rightButtonClick: () => void;
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
    const { fact, loadingFactSuccess, leftButtonText, leftButtonClick, rightButtonText, rightButtonClick } = this.props;
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
        {showControlButtons ? (<ControlButtons leftButtonText={leftButtonText} leftButtonClick={leftButtonClick} rightButtonText={rightButtonText} rightButtonClick={rightButtonClick} />) : null}
      </div>
    );
  }
}