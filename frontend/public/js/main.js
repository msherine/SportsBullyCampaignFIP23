import ArticleThumb from './components/TheArticleThumb.js';
import LightBox from './components/TheLightbox.js';

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
                lbData: {},
                showLB: false
            }
        },

        components: {
            articlethumb: ArticleThumb,
            thelightbox: LightBox,
        },

        methods: {
            loadLightbox(article) {
                this.lbData = article;
                this.showLB = true; 
            }
        }
    }).mount('#app')
})()