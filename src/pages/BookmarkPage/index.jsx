import Navigation from "../../components/Navigation";
import Classes from './home.module.scss'
import { Container, Grid, Typography, Card, CardMedia, Box } from "@mui/material";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBookmark } from "./actions";
import { bookmarkPostRequest } from "../Home/actions";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const BookmarkPage = () => {
    const dispatch = useDispatch();
    const listBookmark = useSelector((state) => state.bookmarkReducer.bookmarks)
    // console.log(listBookmark, "<<<<<list post page")
    useLogin()

    useEffect(() => {
        dispatch(getAllBookmark())
    }, [])


      const handleSavePost = (post) => {
        const userData = localStorage.getItem('userData');
        const user = JSON.parse(userData);
        const postWithUser = { ...post, userId: user.id };
        console.log(postWithUser, "ini bookmark")
        dispatch(bookmarkPostRequest(postWithUser));
      };
    return(
        <>
            <Navigation />
            <Container maxWidth={'xl'}>
            <Typography variant="h3" gutterBottom sx={{ marginTop: 5 }}>
            Bookmark
            </Typography> 
            <Grid container spacing={3} sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {listBookmark?.map((item, idx) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}> {/* Pastikan setiap post memiliki Grid item sendiri */}
                <Card elevation={5} sx={{ maxWidth: '100%', marginTop: 2, position: 'relative' }} key={idx}>
                    <Box>
                    <CardMedia
                            sx={{ height: 140}}
                            image={item.imageUrl}
                            title="img"
                        />
                        <div className={Classes.saved}>
                            <button onClick={() => handleSavePost(item)}>
                                <BookmarkBorderOutlinedIcon />
                            </button>
                        </div>
                    </Box>
                       <Link to={`/detail/${item.id}`} style={{ textDecoration: 'none' }}>
                       <Box sx={{ 
                            display: "flex",
                            flexDirection: "column",
                            padding: 1
                        }}>
                            <Typography gutterBottom variant="body2" component="div">
                                {item.title}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {item.date}
                            </Typography>
                            <Typography paragraph>
                                {item.shortDescription}
                            </Typography>
                        </Box>
                       </Link>
                        
                </Card>
                
                </Grid>
            ))} 
            </Grid>
            </Container>
        </>
    )
}
export default BookmarkPage;