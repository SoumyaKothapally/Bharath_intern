document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    var image = document.getElementById('image').value;
    var video = document.getElementById('video').value;
  
    // Clear form fields
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    document.getElementById('image').value = '';
    document.getElementById('video').value = '';
  
    // Create blog post
    var blogPost = document.createElement('div');
    blogPost.innerHTML = '<h2>' + title + '</h2>' +
                         '<p>' + content + '</p>';
    
    if (image) {
      blogPost.innerHTML += '<img src="' + image + '" alt="Blog Image">';
    }
  
    if (video) {
      blogPost.innerHTML += '<iframe width="560" height="315" src="' + video + '" frameborder="0" allowfullscreen></iframe>';
    }
  
    // Display blog post in preview
    var blogPreview = document.getElementById('blog-preview');
    blogPreview.appendChild(blogPost);
  });
  