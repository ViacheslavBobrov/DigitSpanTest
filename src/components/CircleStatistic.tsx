import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Box } from "@material-ui/core";

function CircleStatistic(props: any) {
    const roundBox = {
        height: 250,
        width: 250,
        rounded: true,
        borderRadius: '50%',
        backgroundColor: '#665A72',
        color: 'white',
        margin: '5% auto'
    }

    const titleStyles = {
        paddingTop: '20px',
        fontSize: '50px'
    }

    return (
        <Box height={1 / 3}>
            <Paper style={roundBox} >
                <Typography align='center' style={titleStyles}>
                    {props.text}
                </Typography>
                <Typography align='center' style={{ fontSize: '90px' }}>
                    {props.level}
                </Typography>
            </Paper>
        </Box>
    );
}

export default CircleStatistic;