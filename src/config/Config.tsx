import React from "react";
import { connect } from "react-redux";
import { AppState } from '../redux/store/store';
import { setUpdateFactTime } from "../redux/effects/effects"
import { AppDispatch } from '../redux/store/store';
import Form from 'react-bootstrap/Form';

interface ConfigProps {
    updateInterval: number;
    setUpdateInterval: (updateInterval: number) => void;
}

class Config extends React.Component<ConfigProps> {
    render() {
        const { updateInterval, setUpdateInterval } = this.props;

        return (
            <div>
                <h1>Config</h1>
                <h2>Fact update time:</h2>
                <Form>
                    <Form.Check
                        inline
                        label="10 seconds"
                        name="10"
                        type="radio"
                        id="inline-radio-1"
                        checked={updateInterval == 10}
                        onChange={() => setUpdateInterval(10)}
                    />
                    <Form.Check
                        inline
                        label="30 seconds"
                        name="30"
                        type="radio"
                        id="inline-radio-2"
                        checked={updateInterval == 30}
                        onChange={() => setUpdateInterval(30)}
                    />
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return { updateInterval: state.config };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        setUpdateInterval: (id: number) => dispatch(setUpdateFactTime(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Config)