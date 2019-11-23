import React from "react";
import { Box, Typography, Fab } from "@material-ui/core";

const  StartButton = (props: any) => {
    const buttonStyles = {
         height: '10vh', 
         backgroundColor: '#3FB250', 
         margin: 'auto', 
         width: '100%'
    }
    const text = props.isGameOver ? 'Restart game' : 'Play level'
    return (
        <Box style={{ padding: '5%' }} >
            <Fab variant="extended" color="primary" aria-label="add"  style={buttonStyles}
                onClick={props.onClick} disabled={props.disabled}>
                <Typography align='center' style={{ fontSize: '4vh' }}>
                    {text}
                </Typography>
            </Fab>
        </Box >
    );
}

export default StartButton;