import React from "react";
import { Box, Typography, Fab } from "@material-ui/core";

function StartButton(props: any) {
    const text = props.isGameOver ? 'Restart game' : 'Play level'
    return (
        <Box style={{ padding: '30px' }} >

            <Fab variant="extended" color="primary" aria-label="add"
                style={{ minWidth: '80%', minHeight: '120px', backgroundColor: '#3FB250', margin: 'auto', width: '100%' }}
                onClick={props.onClick} disabled={props.disabled}>
                <Typography align='center' style={{ fontSize: '30px' }}>
                    {text}
                </Typography>
            </Fab>

        </Box >
    );
}

export default StartButton;