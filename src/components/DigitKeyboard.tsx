import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
        maxWidth: '120px', 
        maxHeight: '120px', 
        minWidth: '120px', 
        minHeight: '120px',
        backgroundColor: '#8F7EAA',
        color: 'white'
    },
}));

function DigitKey(props: any) {
    const classes = useStyles();
    return (
        <Fab color="primary" className={classes.margin}
            onClick={() => props.onClick()} disabled={props.disabled}>
            {props.value}
        </Fab>
    );
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