
(() => {
    // create vue instance here
    const { createApp } = Vue

    createApp({
        created() {
            fetch('http://localhost:8000/articles/') 
                .then(res => res.json())
                .then(data => {
                    this.articleData = data;
                    console.log(this.articleData);
                }) 
            .catch(error => console.error(error));
        },

        data() {
            return {
                articleData: {},
            }
        },
        
        methods: {
            editArticle(articleId) {
                // Redirect the user to the edit page for the article with the given ID
                window.location.href = `/editarticle/${articleId}`;
            },

            deleteArticle(id) {
                fetch(`http://localhost:8000/articles/${id}`, {
                  method: 'DELETE'
                })
                  .then(response => {
                    if (response.ok) {
                      // Remove the deleted article from the articleData array
                      const index = this.articleData.findIndex(article => article.id === id);
                      if (index !== -1) {
                        this.articleData.splice(index, 1);
                      }
                    } else {
                      throw new Error('Network response was not ok');
                    }
                  })
                  .catch(error => {
                    console.error('Error:', error);
                  });
              }
        }
    }).mount('#app')
})()

