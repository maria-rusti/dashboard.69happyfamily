import axios from 'axios';

export const createBlog = (event, data) => {
  event.preventDefault();
  const { title, description, name, age, company, usefulLinks, isPublic } = data;
  axios
    .post('https://happyfamily.herokuapp.com/teaching-be/api', {
      title: title,
      description: description,
      name: name,
      age: age,
      company: company,
      usefullLinks: usefulLinks,
      isPublic: isPublic
    })
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error.response.data));
};

export const getAllProducts = async () => {
  try {
    const blogs = await axios.get('https://happyfamily.herokuapp.com/teaching-be/api');
    return blogs?.data?.blogs;
  } catch (error) {
    console.log(error);
  } finally {
    console.log('am ajuns la final');
  }
};

export const getProductsById = async (blogId) => {
  try {
    const blog = await axios.get(`https://happyfamily.herokuapp.com/teaching-be/api${blogId}`);
    return blog?.data?.blog;
  } catch (error) {
    console.log(error);
  } finally {
    console.log('am ajuns la final');
  }
};

export const deleteProductsById = async (blogId, redirect) => {
  try {
    await axios.delete(`https://happyfamily.herokuapp.com/teaching-be/apihttps://happyfamily.herokuapp.com/teaching-be/api`);
    console.log('sters');
  } catch (error) {
    console.log(error);
  } finally {
    console.log('am ajuns la final');
    redirect();
  }
};
export const updateItems = async (data, blogId) => {
  try {
    await axios.patch(`https://happyfamily.herokuapp.com/teaching-be/apihttps://happyfamily.herokuapp.com/teaching-be/api`, {
      ...data
    });
    console.log('updatat');
  } catch (error) {
    console.log(error);
  } finally {
    getBlogById(blogId);
  }
};
