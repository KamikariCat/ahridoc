import React from 'react';
import {Grid, Hidden, Typography, Tooltip} from "@material-ui/core";

const HeaderText = () => {
    return (
        <Grid container>
            <Grid item>
                <Grid container alignItems={"baseline"} spacing={2}>
                    <Grid item>
                        <Typography variant={'h1'}>Ahri</Typography>
                    </Grid>
                    <Grid item md={false}>
                        <Hidden xsDown>
                            <Typography variant={'h4'}>your personal assistant</Typography>
                        </Hidden>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify={"flex-end"}>
                <Tooltip title="Discord tag - NORI#7784" aria-label="NORI#7784">
                    <Typography style={{cursor: "pointer"}} variant={'body2'}><i>designed by NORI</i></Typography>
                </Tooltip>
            </Grid>
        </Grid>
    );
}

export default HeaderText;