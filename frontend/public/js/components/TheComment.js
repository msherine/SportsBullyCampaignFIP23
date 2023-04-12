export default {
    name: "TheCommentThumb",

    props: {
        comment: Object
    },

    template: `
    <div class="comment">
                <h5>{{comment.user}}</h5>
                <p>{{comment.content}}</p>
            </div>
    `
}