export const postSchema = {
  title: '',
  content: '',
  coverImage: {
    url: '',
    type: 'cloudinary'
  },
  images: {},
  tags: [],
  likes: 0,
  readingTime: 0,
  createdAt: null,
  updatedAt: null
};

export const userSchema = {
  name: '',
  email: '',
  role: 'user', // default role
  likedPosts: [],
  likedComments: [],
  dislikedComments: [],
  createdAt: null
};

export const commentSchema = {
  postId: '',
  userId: '',
  content: '',
  likes: 0,
  dislikes: 0,
  createdAt: null
};