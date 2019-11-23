import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Done from '@material-ui/icons/Done';
import '../index.css'


class DigitGenerator extends React.Component<{ sequenceLength: number, newDigit: any, isGameOver: boolean }, { content: any }> {

    constructor(props: any) {
        super(props);
        this.state = { content: "" }
    }


    render() {
        const roundBox = {
            height: 320,
            width: 320,
            rounded: true,
            borderRadius: '10%',
            backgroundColor: '#51475F',
            color: '#3FB250'
        }
        let content;
        if (this.props.isGameOver) {
            content = (<Typography align='center' style={{ fontSize: '90px', color: '#E85C78', lineHeight: '90%', padding: '20% 0' }}>
                Game over
        </Typography>);
        } else {
            const symbolColor = this.props.newDigit !== 'X' ? '#3FB250' : '#E85C78'
            const doneIcon = (<Done style={{ color: '#3FB250', width: '70%', height: '70%', margin: '15%' }} />)
            const digitSymbol = (<Typography align='center' style={{ fontSize: '200px', color: symbolColor }}>
                {this.props.newDigit}
            </Typography>);
            content = this.props.newDigit === 'V' ? doneIcon : digitSymbol
        }
        return (

            <div style={{ height: 360, width: 320, margin: 'auto' }}>
                <Typography align='center' style={{ fontSize: '40px', color: 'white' }}>
                    {this.props.sequenceLength} Digits
                </Typography>
                <Paper style={roundBox} >
                    {content}
                </Paper>
            </div>
        );
    }
}

export default DigitGenerator;