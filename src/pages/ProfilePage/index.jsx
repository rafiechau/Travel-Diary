import { Box, Button, Card, CardMedia, Container, Grid, Typography } from "@mui/material";
import Navigation from "../../components/Navigation";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import Classes from './profile.module.scss'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { bookmarkPostRequest, getAllPost } from "../Home/actions";
import { useLogin } from "../../hooks/useLogin";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = localStorage.getItem("userData");
  const user = JSON.parse(userData);
  const listPost = useSelector((state) => state.homeReducer.posts)
  useLogin()

   useEffect(() => {
        dispatch(getAllPost())
    }, [])

  // Assuming you want to filter posts based on user ID
  const userPosts = listPost.filter(post => post.userId === user.id);


  console.log(userPosts)

  const handleAddNewPost = () => {
    navigate('/addpost')
  }

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

  // console.log(listPost)
  return(
    <>
    <Navigation />
    <Container maxWidth={'xl'}>
    <Typography variant="h4" gutterBottom sx={{ marginTop: 3 }}>
        Profile
      </Typography>
      <div className={Classes.containerprofile}>
        <img 
              src="/assets/profile.png"
            />
        <Typography variant="h4" gutterBottom sx={{ marginTop: 3 }}>
          {user.fullname}
        </Typography>
        <p className={Classes.email}>
          {user.email}
        </p>
        <Button sx={{ marginTop: 3, marginBottom: 3 }} variant="contained" onClick={() => handleAddNewPost()}>Add New Post</Button>
      </div>
      <Grid container spacing={3} sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {userPosts?.map((item, idx) => (
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

export default ProfilePage;