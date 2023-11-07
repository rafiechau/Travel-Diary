import axios from 'axios';

const baseURL = 'http://localhost:5000/';

const urls = {
  posts: 'posts',
  users: 'users',
  bookmarks: 'bookmarks'
}

export const callAPI = async (endpoint, method, params = {}, headers = {}, data = {}) => {
  const options = {
    baseURL,
    url: endpoint,
    method,
    params,
    headers,
    data
  };

  const response = await axios(options);
  return response?.data;
};

export const getAllPost = () => {
  return callAPI(urls.posts, 'GET');
}

export const getAllBookmarks = () => {
  return callAPI(urls.bookmarks, 'GET');
}

export const createPost = (post) => {
  return callAPI(urls.posts, 'POST', {}, {}, post);
}

// Function to create a bookmark
export const createBookmark = (bookmark) => {
  return callAPI(urls.bookmarks, 'POST', {}, {}, bookmark);
};

export const deleteBookmark = (bookmarkId) => {
  return callAPI(`${urls.bookmarks}?postId=${bookmarkId}`, 'DELETE');
};



export const createUser = (user) => {
    return callAPI(urls.users, 'POST', {}, {}, user)
}

export const getUserByEmail = (email) => {
  return callAPI(`${urls.users}?email=${email}`, 'GET');
};

export const getPostById = (id) => {
  return callAPI(`${urls.posts}/${id}`, 'GET');
};

export const getUserById = (id) => {
  return callAPI(`${urls.users}/${id}`, 'GET');
};

export const loginUser = async (credentials) => {
  try {
    // Dapatkan semua pengguna dari json-server
    const { data: users } = await axios.get(`${baseURL}users`);

    // Cari pengguna yang cocok dengan kredensial yang diberikan
    const user = users.find(
      (user) => user.email === credentials.email && user.password === credentials.password
    );

    // Jika pengguna ditemukan, return data pengguna (tanpa password idealnya)
    if (user) {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword; // Simulasikan respons yang berhasil
    }
    
    // Jika tidak ada pengguna yang cocok, lempar kesalahan
    throw new Error('Invalid credentials');
  } catch (error) {
    // Jika ada masalah dengan permintaan atau pengguna tidak ditemukan, lemparkan error
    throw new Error(error.response ? error.response.data : error.message);
  }
}
