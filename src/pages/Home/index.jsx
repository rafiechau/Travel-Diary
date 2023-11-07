import Navigation from "../../components/Navigation";
import Classes from './home.module.scss'
import { Container, Grid, Typography, TextField, Button, Card, CardMedia, Box } from "@mui/material";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { bookmarkPostRequest, getAllPost } from "./actions";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const HomePage = () => {
    const dispatch = useDispatch();
    const listPost = useSelector((state) => state.homeReducer.posts)
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);
    useLogin()
    // console.log(listPost, "<<<<<list post page")

    useEffect(() => {
        dispatch(getAllPost())
    }, [])

    useEffect(() => {
        // Filter posts when listPost or searchQuery changes
        const filtered = listPost.filter(post => {
          return post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                 post.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
          // Tambahkan kondisi pencarian lain jika diperlukan
        });
        setFilteredPosts(filtered);
      }, [listPost, searchQuery]);
    
      const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
      };

      const handleSavePost = (post) => {
        const userData = localStorage.getItem('userData');
        if (!userData) return; // Pastikan userData ada
        
        const user = JSON.parse(userData);
        
        // Pastikan bahwa bookmarks adalah array sebelum melakukan pengecekan
        const isAlreadyBookmarked = Array.isArray(listPost.bookmarks) && listPost.bookmarks.some(bookmark => bookmark.id === post.id && bookmark.userId === user.id);
        
        if (!isAlreadyBookmarked) {
          const postWithUser = { ...post, userId: user.id };
          console.log(postWithUser);
          dispatch(bookmarkPostRequest(postWithUser));
        } else {
          // Anda bisa menampilkan pesan atau aksi lain jika post sudah dibookmark
          console.log('Post sudah dibookmark');
        }
      };
    return(
        <>
            <Navigation />
            <Container maxWidth={'xl'}>
            <Typography variant="h3" gutterBottom sx={{ marginTop: 5 }}>
            Journey
            </Typography>
            <div className={Classes.containersearch}>
                <TextField 
                    fullWidth 
                    label="Search Post" 
                    id="searchPost"
                    value={searchQuery}
                    onChange={handleSearchChange}
                      />
                <Button variant="contained" sx={{ marginLeft: 2 }} size="small">Search</Button>
            </div>  
            <Grid container spacing={3} sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {filteredPosts?.map((item, idx) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}> {/* Pastikan setiap post memiliki Grid item sendiri */}
               
                <Card elevation={5} sx={{ maxWidth: '100%', marginTop: 2, position: 'relative' }} key={idx}>
                    <Box>
                    <CardMedia
                            sx={{ height: 140 }}
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
            <Grid item xs={12} sm={6} md={4} lg={3}>
           
            </Grid>
            </Container>
        </>
    )
}
export default HomePage;