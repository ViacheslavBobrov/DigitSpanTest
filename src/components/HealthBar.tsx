import React from "react";
import { Line } from 'rc-progress';
import { Box, Typography } from "@material-ui/core";
import Favorite from '@material-ui/icons/Favorite';

function HealthBar(props: any) {
    const healthColor: string = props.health > 0 ? "#3FB250" : "#E85C78"
    return (
        <Box width={1 / 3}>
            <div style={{ whiteSpace: 'nowrap', padding: '10px 0px 0px 10px' }}>
                <Favorite style={{ color: '#E85C78', width: '40px', height: '40px', marginRight: '10px'}} />
                <Line percent={props.health * 100 / 3} strokeWidth={8} trailWidth={8} strokeColor={healthColor} trailColor="#51475F" />
            </div>
        </Box>
    );
}

export default HealthBar;