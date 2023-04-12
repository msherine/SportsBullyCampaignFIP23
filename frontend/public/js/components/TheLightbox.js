import Comment from "./TheComment.js";

export default {
    name: 'TheLightBoxComponent',

    props: ['activity'],

    created() {
        fetch('http://localhost:8000/comments/')
        .then(response => response.json())
        .then(data => {
            this.commentsData = data;
            console.log(this.commentsData);
            this.commentsToShow = Object.values(this.commentsData).filter(comment => comment.title === this.activity.title);
            console.log(this.activity.title);
            console.log(this.commentsToShow);
        })
        .catch(error => console.error(error)); 
    },

    data() {
        return {
            commentsData: {},
            commentsToShow: {}
        }
    },

    emits: ['closelightbox'],

    template:
    `
    <section class="lightbox">
    <h2 @click="closeLB" class="lightbox_close">X</h2>
    <section class="campaign_banner">


        <img :src='"http://localhost:8000/images/" + activity.img_big' alt="campaign banner image">

    <div class="banner_textBox">
        <div class="bullying_taglines  articlepage">
            <h2>
                <span class="heading_text_span1">{{activity.title}}</span><br>
            </h2>
        </div>
    </div>
</section>

        <article>
            <div class="textarticle">
            <div v-html="activity.text"></div>

            <h2 class="commenttitle">Leave a comment</h2>
            <form method="post" action="http://localhost:8000/comments">
                <input name="user" id="user" type="text" placeholder="Username">
                <input type="hidden" name="article_id" id="article_id" :value="articleId">
                <textarea name="content" id="content" placeholder="Your message..."></textarea>
                <input type="submit">
            </form>
            <comment v-for="comment in commentsToShow" :comment="comment"></comment>
            </div>
        </article>
        
    </section>
    `,

    methods: {
        closeLB() {
            this.$emit('closelightbox');
        }
    },

    components: {
        comment: Comment
    },

    computed: {
        articleId: function() {
          return parseInt(this.activity.id);
        }
      }
      
}