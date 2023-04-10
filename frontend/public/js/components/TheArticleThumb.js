export default {
    name: "TheArticleThumb",

    emits: ['loadlbdata'],

    props: {
        article: Object
    },

    template: `
    <div class="article" @click="loadLBData">
    <img :src='"images/" + article.article_img' alt="img">
        <div class="articledesc">
            <h2>{{article.title}}</h2>
            <p>
                {{article.article_desc}}
            </p>
        </div>
    </div>
    `,

    methods: {
        loadLBData() {
            this.$emit('loadlbdata', this.article);
        }
    }
}