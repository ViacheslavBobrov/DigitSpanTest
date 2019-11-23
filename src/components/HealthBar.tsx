import React from "react";
import { Line } from 'rc-progress';
import { Box } from "@material-ui/core";
import Favorite from '@material-ui/icons/Favorite';

const HealthBar =(props: any) =>{
    const healthStyles = {
        color: '#E85C78', 
        width: '9%', 
        height: '9%',
        marginRight: '1%'
    }
    const healthColor: string = props.health > 0 ? "#3FB250" : "#E85C78"
    return (
        <Box width={1 / 3}>
            <div style={{ whiteSpace: 'nowrap', padding: '2% 0 0 2%' }}>
                <Favorite style={healthStyles} />
                <Line percent={props.health * 100 / 3} strokeWidth={8} trailWidth={8} 
                strokeColor={healthColor} trailColor="#51475F" />
            </div>
        </Box>
    );
}

export default HealthBar;