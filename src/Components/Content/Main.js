import * as React from 'react';
import {Box, Grid} from "@material-ui/core";
import commands from "../../data/commands";
import Card from "./Card";


export default () => {
    return (
        <Grid item xs={12}>
            <Grid container spacing={1}>
                {commands.map(e =>
                    e.show &&
                    <Grid item xs={12} key={e.name} lg={6}>
                        <Box t={1}>
                            <Card options={e}/>
                        </Box>
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
};