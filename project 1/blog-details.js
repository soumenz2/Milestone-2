document.addEventListener('DOMContentLoaded', function() {
    // Fetch data from localStorage
    const title=localStorage.getItem('selectedBlogTitle');
    const author=localStorage.getItem('selectedBlogAuthor');
    const description = localStorage.getItem('selectedBlogDescription');


    

        // Access individual values and display them
        const blogTitleElement = document.getElementById('blog-title');
        const blogAuthorElement = document.getElementById('blog-author');
        const blogDescriptionElement = document.getElementById('blog-description');

        blogTitleElement.textContent = title;
        blogAuthorElement.textContent = author;
        blogDescriptionElement.textContent = description;
   
});