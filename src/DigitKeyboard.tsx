import React from "react";

function DigitKey(props: any) {
    return (<button onClick={() => props.onClick()} disabled={props.disabled}>
        {props.value}
    </button>);
}

class DigitKeyboard extends React.Component<{ onClick: any, disabled: boolean }, {}> {

    renderKey(digit: number) {
        return <DigitKey value={digit} onClick={() => this.props.onClick(digit)} disabled={this.props.disabled} />;
    }

    render() {
        return (
            <div>
                <div>
                    {this.renderKey(0)}
                    {this.renderKey(1)}
                    {this.renderKey(2)}
                    {this.renderKey(3)}
                    {this.renderKey(4)}
                    <br />
                </div>
                <div>
                    {this.renderKey(5)}
                    {this.renderKey(6)}
                    {this.renderKey(7)}
                    {this.renderKey(8)}
                    {this.renderKey(9)}
                    <br />
                </div>
            </div>
        );
    }

}



export default DigitKeyboard;