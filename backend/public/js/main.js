
import ArticleThumb from './components/TheArticleThumb.js';

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

            fetch('http://localhost:8000/comments/')
                .then(response => response.json())
                .then(data => {
                    this.comments = data;
                    console.log(this.comments);
                })
                .catch(error => console.error(error));
        },

        data() {
            return {
                articleData: {},
                comments: {}
            }
        },

        components: {
            articlethumb: ArticleThumb
        }
    }).mount('#app')
})()