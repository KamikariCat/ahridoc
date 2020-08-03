import React from 'react';
import {Card, CardActionArea, CardContent, CardHeader, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

function replaceToBlock (string) {
    const regExp = /`[a-zA-Z0-9А-Яа-я .|{}\-#@]+`/g;
    return string.replace(regExp, substring => `<span class="bg">${substring.replace(/`/g, '')}</span>`).replace('/n', '<br>');
}

const useStyle = makeStyles({
    card: {
        backgroundColor: "rgba(0,0,0,.5)",
        color: "snow"
    }
});

export default props =>
{
    const styles = useStyle();


    return (
        <Card className={styles.card}>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <CardHeader title={props.options.name} />
                    </Grid>
                    {props.options.image &&
                    <Grid item xs={12} md={6}>
                        <img style={{width: '100%'}} src={`/gifs/${props.options.image}.gif`} alt="command gif"/>
                    </Grid>
                    }
                    <Grid item>
                        <CardActionArea>
                            <Typography variant={"body1"} dangerouslySetInnerHTML={{__html: replaceToBlock(props.options.description.en)}} />
                        </CardActionArea>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );

}