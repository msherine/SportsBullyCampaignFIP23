export default {
    name: "TheCommentThumb",

    props: {
        comment: Object
    },

    template: `
    <div class="comment">
                <h3>{{comment.user}}</h3>
                <p>{{comment.content}}</p>
            </div>
    `
}