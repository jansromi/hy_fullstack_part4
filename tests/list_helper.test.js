const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
]

const listWithTwoBlogs = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }
]

const manyBlogs = [
    {
      _id: '5a422a851b54a676234d17f7',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 7,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422b3a1b54a676234d17f9',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
      likes: 12,
      __v: 0
    },
    {
      _id: '5a422b891b54a676234d17fa',
      title: 'First class tests',
      author: 'Robert C. Martin',
      url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
      likes: 10,
      __v: 0
    },
    {
      _id: '5a422ba71b54a676234d17fb',
      title: 'TDD harms architecture',
      author: 'Robert C. Martin',
      url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
      likes: 0,
      __v: 0
    },
    {
      _id: '5a422bc61b54a676234d17fc',
      title: 'Type wars',
      author: 'Robert C. Martin',
      url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
      likes: 2,
      __v: 0
    }
]

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})

describe('total likes', () => {
  test('when list has only one blog equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    assert.strictEqual(result, 5)
  })
  test('when list has many blogs', () => {
    const result = listHelper.totalLikes(manyBlogs)
    assert.strictEqual(result, 36)
  })

  test('when called with null', () => {
    const result = listHelper.totalLikes(null)
    assert.strictEqual(result, 0)
  })
})

describe('favorite blogs', () => {
    test('it returns the blog with most likes from list with many entries', () => {
        const result = listHelper.favoriteBlog(manyBlogs)
        assert.strictEqual(result, manyBlogs[2])
    })

    test('it returns itself with one blog', () => {
        const result = listHelper.favoriteBlog(listWithOneBlog)
        assert.strictEqual(result, listWithOneBlog[0])
    })

    test('nothing crashes with null', () => {
        const result = listHelper.favoriteBlog(null)
        assert.strictEqual(result, null)
    })
})

describe('most blogs', () => {
  test('it returns the author with most blogs', () => {
    const expected = {
      author: "Robert C. Martin",
      blogs: 3
    }
    const result = listHelper.mostBlogs(manyBlogs)
    assert.deepStrictEqual(expected, result)
  })

  test('when called with null', () => {
    const result = listHelper.mostBlogs(null)
    assert.strictEqual(result, null)
  })

  test('when called with one blog', () => {
    const expected = {
      author: "Edsger W. Dijkstra",
      blogs: 1
    }
    const result = listHelper.mostBlogs(listWithOneBlog)
    assert.deepStrictEqual(expected, result)
  })

  test('when having equal amount of blogs', () => {
    const expected = {
      author: "Michael Chan",
      blogs: 1
    }
    const result = listHelper.mostBlogs(listWithTwoBlogs)
    assert.deepStrictEqual(expected, result)
  })
})