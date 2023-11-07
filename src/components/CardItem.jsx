import { Box, Card, CardMedia, Grid, Typography } from "@mui/material"

const CardItem = () => {
    return(
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card elevation={5} sx={{ maxWidth: '100%', marginTop: 2 }}>
                <CardMedia
                        sx={{ height: 140 }}
                        image="/assets/img-card.png"
                        title="img"
                    />
                    <Box sx={{ 
                        display: "flex",
                        flexDirection: "column",
                        padding: 1
                    }}>
                        <Typography gutterBottom variant="body2" component="div">
                            Bersemayam di tanah Dewata
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            29 July 2020, Cipto
                        </Typography>
                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and
                            peppers, and cook without stirring, until most of the liquid is absorbed,
                            15 to 18 minutes.
                        </Typography>
                    </Box>
                    
                </Card>
        </Grid>
    )
}

export default CardItem