import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Box } from "@material-ui/core";

function RoundStatistic(props: any) {
    const roundBox = {
        height: 250,
        width: 250,
        rounded: true,
        borderRadius: '50%',
        backgroundColor: '#665A72',
        color: 'white',
        margin: 'auto'
    }
    return (
        <Box style={{padding: '10px'}} height={1/3}>
            <Paper style={roundBox} >
                <Typography align='center' style={{ paddingTop: '20px', fontSize: '50px' }}>
                    {props.text}
                </Typography>
                <Typography align='center' style={{ fontSize: '90px' }}>
                    {props.level}
                </Typography>
            </Paper>
        </Box>
    );
}

export default RoundStatistic;