// AddPostPage.js
import React, { useEffect, useState } from 'react';
import Classes from './addpost.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { createPostAction } from './actions';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { POST_REQUEST } from './constants';
import { Settings } from '@mui/icons-material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLogin } from '../../hooks/useLogin';
import Navigation from '../../components/Navigation';

const AddPostPage = () => {
  const userData = localStorage.getItem('userData');
  const user = JSON.parse(userData)
  const userId = user.id
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [description, setDescription] = useState('');
  const [formError, setFormError] = useState('');
  useLogin()

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector(state => state.postReducer);

  useEffect(() => {
    if (loading === false && error === '') {
        navigate('/profile'); // Redirect hanya ketika loading selesai dan tidak ada error
      }
}, [loading, error, navigate]);

const handleRegister = async (event) => {
  event.preventDefault();
  if (!title || !imageUrl || !shortDescription || !description) {
    setFormError('All fields are required.'); // Set error message
    return;
  }

  dispatch(createPostAction({ title, imageUrl, shortDescription, description, userId, date: new Date().toISOString() }, navigate));

};

  return (
    <>
      <Navigation/>
            <Container maxWidth="xl">
            <Typography variant="h6" sx={{ marginTop: 3 }}>Register</Typography>
            <form onSubmit={handleRegister} noValidate>
              <Box
                sx={{
                      maxWidth: '100%',
                      marginTop: 3
                    }}
                  >
                  <Typography>
                    Title
                  </Typography>
                    <TextField 
                      fullWidth 
                      label="title" 
                      id="fullWidth"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)} />
                  </Box>

                  <Box
                sx={{
                      maxWidth: '100%',
                      marginTop: 3
                    }}
                  >
                  <Typography>
                    imageUrl
                  </Typography>
                    <TextField 
                      fullWidth 
                      label="imageUrl" 
                      id="fullWidth"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)} />
                  </Box>

                  <Box
                sx={{
                      maxWidth: '100%',
                      marginTop: 3
                    }}
                  >
                  <Typography>
                    Short Description
                  </Typography>
                    <TextField 
                      fullWidth 
                      label="shortDescription" 
                      id="fullWidth"
                      value={shortDescription}
                      onChange={(e) => setShortDescription(e.target.value)} />
                  </Box>
                  
                  <Box
                sx={{
                      maxWidth: '100%',
                      marginTop: 3
                    }}
                  >
                  <ReactQuill 
                    theme="snow" 
                    value={description} 
                    onChange={(content) => setDescription(content)} />
                  </Box>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth
                    sx={{ marginTop: 3 }}
                    disabled={loading}
                >
                    {loading ? 'Submit...' : 'Submit'}
                </Button>
                {formError && <Typography color="error">{formError}</Typography>}
            </form>
            </Container>
    </>
    
  );
};

export default AddPostPage;
