import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


function DigitGenerator(props: any) {
    const roundBox = {
        height: 350,
        width: 350,
        rounded: true,
        borderRadius: '10%',
        backgroundColor: '#51475F',
        color: '#3FB250'
    }
    return (
        <div style={{ height: 400, width: 350}}>
            <Typography align='center' style={{ fontSize: '50px', color: 'white' }}>
                {props.sequenceLength} Digits
            </Typography>
            <Paper style={roundBox} >
                <Typography align='center' style={{ fontSize: '220px' }}>
                    {props.newDigit}
                </Typography>
            </Paper>
        </div>
    );
}

export default DigitGenerator;