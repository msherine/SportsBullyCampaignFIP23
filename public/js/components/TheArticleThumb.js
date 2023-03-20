export default {
    name: "TheArticleThumb",

    emits: ['loadlbdata'],

    props: {
        project: Object
    },

    template: `
    <div class="article">
        <img src="public/images/article1.jpg" alt="">
        <div class="articledesc">
            <h2>Don’t Let Bullying Ruin Your Child’s Swimming Lessons</h1>
            <p>
                How to protect your child from being bullied in swimming lessons. Useful tips for Moms.
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