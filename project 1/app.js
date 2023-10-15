// Get references to HTML elements
const blogList = document.getElementById('blog-list');
const addBlogBtn = document.getElementById('add-blog-btn');
const addBlogModal = document.getElementById('add-blog-modal');
const closeBtn = document.getElementById('close-modal-btn');
const addBlogForm = document.getElementById('add-blog-form');

// Function to open the add blog modal
addBlogBtn.addEventListener('click', () => {
    addBlogModal.style.display = 'block';
});

// Function to close the add blog modal
closeBtn.addEventListener('click', () => {
    addBlogModal.style.display = 'none';
});

// Function to handle form submission
addBlogForm.addEventListener('submit', (e) => {
    e.preventDefault();

  
    
  
   
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const description = document.getElementById('description').value;
   
   

    // Create a new blog post object
    const newBlog = {
       
        title,
        author,
        description,
      
    };

   // Add the new blog post to LocalStorage (you should implement this)
   let existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];

   // Add the new blog post to the existing blogs array
   existingBlogs.push(newBlog);
  

   // Update LocalStorage with the updated blogs array
   localStorage.setItem('blogs', JSON.stringify(existingBlogs));

    //After successfully adding to LocalStorage, render the updated list of blogs
    renderBlogs();

    // Clear the form fields
  
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('description').value = '';
   

    // Close the modal
    addBlogModal.style.display = 'none';
});


function renderBlogs() {
    // Get the list of existing blogs from LocalStorage (you should have implemented this)
    let existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];

    // Get a reference to the blog-list container
    const blogList = document.getElementById('blog-list');

    // Clear the existing blog list on the page
    blogList.innerHTML = '';

    // Loop through the list of blogs and create list items for each
    existingBlogs.forEach((blog) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
           
            <h3>${blog.title}</h3>
            
            <p>Author: ${blog.author}</p>
            <p>${blog.description}</p>
            
            <button class="read-more-btn">Read More</button>
            
        `;
        // Append the list item to the blog-list container
        blogList.appendChild(listItem);
    });
}

// Call renderBlogs() initially to display existing blogs on page load
renderBlogs();
// In your app.js or a separate JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const title = this.parentElement.querySelector('h3').textContent;
            console.log(title)
            const author = this.parentElement.querySelector('p:nth-child(2)').textContent; // Assuming author is the second <p> element
            console.log(author)
            const description = this.parentElement.querySelector('p:nth-child(3)').textContent;
            
           
            console.log(description);

            // Save title, author, and description to local storage
            localStorage.setItem('selectedBlogTitle', title);
            localStorage.setItem('selectedBlogAuthor', author);
            localStorage.setItem('selectedBlogDescription', description);
            

            
          
            // Redirect to the new page
            window.location.href = 'blog_details.html'; // Replace with your actual page URL
        });
    });
});

