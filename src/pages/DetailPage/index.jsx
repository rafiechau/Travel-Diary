import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Classes from './home.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getPostDetailsRequest } from './actions';
import { Box, Container, Typography } from '@mui/material';
import { useLogin } from '../../hooks/useLogin';

const DetailPage = () => {
  const { id } = useParams(); // This will get the id from the URL
  const dispatch = useDispatch();
  const { post, user, loading, error } = useSelector((state) => state.detailReducer);
  useLogin()

  useEffect(() => {
    dispatch(getPostDetailsRequest(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading post: {error}</p>;

  return (
    <Container maxWidth={'xl'}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h4">{post.title}</Typography>
      <Typography paragraph>{user.fullname || user.fullName}</Typography>
      </Box>
      <Typography sx={{ marginTop: 3 }} paragraph>{post.date}</Typography>
      <img src={post.imageUrl} alt={post.title} className={Classes.imgdetail} />
      <Typography paragraph>{post.description}</Typography>
      {/* <Typography variant="h5">Author Information:</Typography>
      <Typography paragraph>{user.fullname || user.fullName}</Typography>
      <Typography paragraph>{user.email}</Typography> */}
    </Container>
  );
};

export default DetailPage;
