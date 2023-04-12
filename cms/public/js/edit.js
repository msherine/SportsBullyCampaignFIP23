import Comment from "./components/Comment.js"

const articleId = window.location.pathname.split('/').pop();
console.log(articleId);

        // Make a GET request to retrieve the article data
        fetch(`http://localhost:8000/articles/${articleId}`)
          .then(response => response.json())
          .then(data => {
            // Prepopulate the input fields with the article data
            document.getElementById('title').value = data.title;
            document.getElementById('article_desc').value = data.article_desc;
            document.getElementById('text').value = data.text;
          });
    
        // Handle the form submission
        document.getElementById('edit-form').addEventListener('submit', event => {
          event.preventDefault();
    
          // Retrieve the updated article data from the input fields
          const title = document.getElementById('title').value;
          const article_desc = document.getElementById('article_desc').value;
          const text = document.getElementById('text').value;
    
          // Make a PUT request to update the article data
          fetch(`http://localhost:8000/articles/${articleId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              title: title,
              article_desc: article_desc,
              text: text
            })
          })
            .then(response => {
              if (response.ok) {
                // Redirect the user back to the article list page
                window.location.href = '/articles';
              }
            });
        });

       
        const form = document.getElementById('edit-form');
        form.action = `http://localhost:8000/articles/${articleId}`;   

    (() => {
    // create vue instance here
    const { createApp } = Vue

    createApp({
        created() {
            fetch('http://localhost:8000/comments/')
            .then(response => response.json())
            .then(data => {
                this.commentsData = data;
                console.log(this.commentsData);
                const articleId = window.location.pathname.split('/').pop();
                console.log(articleId);
                const articleNumber = parseInt(articleId);
                this.filteredComments = this.commentsData.filter(comment => comment.article_id === articleNumber);
                console.log(this.filteredComments);
            })
            .catch(error => console.error(error)); 
        },

        data() {
            return {
                commentsData: {},
                filteredComments: {}
            }
        },

        components: {
            comment: Comment
        },

        methods: {
            onDeleteComment(id) {
              this.filteredComments = this.filteredComments.filter(comment => comment.id !== id);
            }
        }
    }).mount('#app')
})()


    