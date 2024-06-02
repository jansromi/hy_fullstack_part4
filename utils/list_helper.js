const _ = require('lodash');

const dummy = (blogs) => {
  return 1
}

/**
 * @param {*} blogs 
 * @returns the sum of all likes
 */
const totalLikes = (blogs) => {
  if (!blogs) return 0
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

/**
 * @param {*} blogs 
 * @returns the blog with most likes
 */
const favoriteBlog = (blogs) =>  {
  if (!blogs) return null
  return blogs.reduce((max, blog) => max.likes > blog.likes ? max : blog, blogs[0])
}

const mostBlogs = (blogs) => {
  if (!blogs) return null
  const authors = _.countBy(blogs, 'author')
  const authorWithMostBlogs = _.maxBy(_.toPairs(authors), 1)
  return authorWithMostBlogs ? { author: authorWithMostBlogs[0], blogs: authorWithMostBlogs[1] } : null
}

const mostLikes = (blogs) => {
  if (!blogs) return null
  const auhtorsAndLikes = blogs.reduce((acc, blog) => {
    const foundAuthor = acc.find(author => author.author === blog.author);
    if (foundAuthor) {
      foundAuthor.likes += blog.likes
    } else {
      acc.push({author: blog.author, likes: blog.likes});
    }
    return acc;
  }, []);
  return auhtorsAndLikes.reduce((max, blog) => max.likes > blog.likes ? max : blog);
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}