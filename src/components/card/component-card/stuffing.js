import * as React from "react";

export class Stuffing extends React.Component {
    render() {
        const {stuff} = this.props;
        return (
            <h3>{stuff}</h3>
        );
    }
}