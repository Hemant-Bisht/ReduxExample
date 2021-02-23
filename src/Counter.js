import { connect } from 'react-redux';
import React from "react";
import './counter.css';
class Counter extends React.Component {
    render() {
        const { ctr } = this.props;
        return (
            <>
                <h1 className="headings">
                    ANOTHER COMPONENT
            </h1>
                <p className="heading">counter value here is {ctr}</p>
            </>
        )
    }
}
const mapStateToProps = state => {
    console.log("state", state)
    return {
        ctr: state.counter
    }
}
//   const mapDispatchToProps = dispatch => {
//     return {
//       onIncrementCounter: () => dispatch({type: 'INCREMENT'})
//     };
//   }
export default connect(mapStateToProps)(Counter);