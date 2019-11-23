import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Done from '@material-ui/icons/Done';


const DigitWindow = (props: any) => {

    const containerStyles = {
        height: '50%',
        width: '40%',
        margin: 'auto'
    }

    const roundBoxStyles = {
        height: '80%',
        width: '68%',
        rounded: true,
        borderRadius: '10%',
        backgroundColor: '#51475F',
        color: '#3FB250',
        margin: 'auto'
    }
    const gameOverStyles = {
        fontSize: '12vh',
        color: '#E85C78',
        lineHeight: '90%',
        padding: '22% 0'
    }
    const doneStyles = {
        color: '#3FB250',
        width: '70%',
        height: '70%',
        margin: 'auto',
        padding: '10% 15%'
    }

    const digitNumberHeaderStyles = {
        fontSize: '7vh',
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
        const digitSymbol = (<Typography align='center' style={{ fontSize: '25vh', color: symbolColor }}>
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