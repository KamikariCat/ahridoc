import * as React from 'react';
import {Grid} from "@material-ui/core";
import Header from './Components/Header/Main';
import Content from './Components/Content/Main'


export default () => {
        return (
            <Grid container>
                <Header />
                <Content />
            </Grid>
        );
};