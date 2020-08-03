import React from 'react';
import {Button, Grid, Hidden} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
    addButton: {
        background: 'linear-gradient(90deg, #EB5757 0%, #F2C94C 100%)'
    }
})

const Buttons = () => {
    const style = useStyle();

    return (
        <Grid container spacing={1}>
            <Hidden xsDown>
                <Grid item>
                    <Button
                        className={style.addButton}
                        href={'https://discordapp.com/api/oauth2/authorize?client_id=660128781670940695&scope=bot&permissions=8'}
                        color={"primary"}
                        variant={"contained"}
                    >Add ahri to your server</Button>
                </Grid>
            </Hidden>
            <Grid item>
                <Button
                    href={'https://discord.gg/hTSA5nk'}
                    color={"primary"}
                    variant={"contained"}
                >Support server</Button>
            </Grid>
        </Grid>
    );
}

export default Buttons;