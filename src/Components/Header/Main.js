import * as React from 'react';
import {Box, Grid} from "@material-ui/core";
import Buttons from "./Buttons";
import HeaderText from "./HeaderText";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    wrapper: {
        color: "white",
        backgroundColor: 'rgba(0,0,0,.5)',
        marginBottom: 5
    }
})

export default () =>
{
    const style = useStyles();
    return (
        <Grid item xs={12}>
            <Box p={1} className={style.wrapper}>
                <HeaderText />
                <Buttons />
            </Box>
        </Grid>
    )
};