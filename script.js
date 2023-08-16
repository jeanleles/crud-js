const blog = {
  posts: [
    {
      id: 1,
      title: 'Titulo 01',
      author: 'Jean Leles',
      date: '11/08/2028',
      content: "Loren Ipsum dolar sit amet, consectetur adipiscing elit."
    },
    {
      id: 2,
      title: 'Titulo 02',
      author: 'Jean Leles',
      date: '10/08/2028',
      content: "Fusce convallis justo in sapien ultrices, eget condimentum urna accumsan. Quisque pharetra felis nec ligula suscipit, vel vulputate leo eleifend."
    },
    {
      id: 3,
      title: 'Titulo 03',
      author: 'Jean Leles',
      date: '09/08/2028',
      content: "Praesent vel ipsum quis erat eleifend consectetur."
    }
  ]
}

//CREATE
function createPost(data) {
  blog.posts.push({
    id: blog.posts.length + 1,
    title: data.title,
    author: data.author,
    date: data.date,
    content: data.content
  })
}
createPost({title: 'Titulo 04', author: 'Yan Leles', date: '12/08/2023', content: ' Donec auctor, neque vel volutpat varius, purus arcu dictum tellus.'})
console.log(blog.posts)


//READ
function readPosts() {
  return blog.posts
}

function showPosts() {
  const divPosts = document.querySelector('.posts')
  const posts = readPosts()
  divPosts.innerHTML = posts.map((post) => (
    `<div>
      <h2>${post.title}</h2>
      <p>${post.author}</p>
      <p>${post.date}</p>
      <p>${post.content}</p>
    </div>
    `
    ))
}
showPosts()


//UPDATE
function updatePost(id, newcontent) {
  const postToUpdate = readPosts().find((post) => {
    return post.id === id
  })
  console.log(postToUpdate)
  postToUpdate.content = newcontent
}

updatePost(4, "new content 123")
console.log(blog.posts)

//DELETE
function postDelete(id) {
  const blogPosts = readPosts().filter((post) => {
    return post.id !== id
  })
  blog.posts = blogPosts
}
postDelete(1)
postDelete(2)
postDelete(4)
console.log(readPosts())

