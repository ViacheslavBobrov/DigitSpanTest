import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Done from '@material-ui/icons/Done';


const DigitWindow = (props: any) => {

    const containerStyles = {
        height: 360,
        width: 320,
        margin: 'auto'
    }

    const roundBoxStyles = {
        height: 320,
        width: 320,
        rounded: true,
        borderRadius: '10%',
        backgroundColor: '#51475F',
        color: '#3FB250'
    }
    const gameOverStyles = {
        fontSize: '90px',
        color: '#E85C78',
        lineHeight: '90%',
        padding: '20% 0'
    }
    const doneStyles = {
        color: '#3FB250',
        width: '70%',
        height: '70%',
        margin: '15%'
    }

    const digitNumberHeaderStyles = {
        fontSize: '40px',
        color: 'white'
    }

    let content;
    if (props.isGameOver) {
        content = (<Typography align='center' style={gameOverStyles}>
            Game over
        </Typography>);
    } else {
        const symbolColor = props.newDigit !== 'X' ? '#3FB250' : '#E85C78'
        const doneIcon = (<Done style={doneStyles} />)
        const digitSymbol = (<Typography align='center' style={{ fontSize: '200px', color: symbolColor }}>
            {props.newDigit}
        </Typography>);
        content = props.newDigit === 'V' ? doneIcon : digitSymbol
    }
    return (

        <div style={containerStyles}>
            <Typography align='center' style={digitNumberHeaderStyles}>
                {props.sequenceLength} Digits
                </Typography>
            <Paper style={roundBoxStyles} >
                {content}
            </Paper>
        </div>
    );
}


export default DigitWindow;