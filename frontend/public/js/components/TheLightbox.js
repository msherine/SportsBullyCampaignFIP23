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


        <img :src='"images/" + activity.img_big' alt="campaign banner image">

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
                <p>
                    Swimming is a valuable skill that not only provides health benefits but can also be a fun activity for children. However, like any other sport or activity, it is not immune to bullying. Bullying in swimming can occur in various forms, including physical, verbal, or emotional abuse, and it can have long-term negative effects on a child’s self-esteem and confidence. In this article, we will discuss ways to protect a child from being bullied in swimming lessons.<br><br>
                    
                    1. Teach your child to recognize and report bullying.
                    One of the most important things you can do to protect your child from bullying is to teach them how to recognize it and report it. Talk to your child about what bullying is and how it can manifest itself in swimming lessons. Encourage your child to come to you or a trusted adult if they feel uncomfortable or threatened in any way. It is important to emphasize that reporting bullying is not tattling but a necessary step to stop the behavior and keep your child safe.<br><br>

                    2. Establish open communication with the swim instructor.
                    It is crucial to establish a good relationship with the swim instructor to ensure that they are aware of the potential for bullying and are taking steps to prevent it. Reach out to the instructor before the lessons begin to discuss your child’s needs and any concerns you may have. Ask the instructor what their bullying prevention policy is, and how they handle incidents of bullying. Be sure to ask about their training and experience working with children and how they handle challenging behavior. It is important to feel confident in the instructor’s ability to maintain a safe and positive learning environment for your child.<br><br>

                    3. Attend swimming lessons with your child.
                    One way to protect your child from bullying is to attend swimming lessons with them. This not only allows you to observe the class and the interactions between the children, but it also sends a message to your child that you are there to support and protect them. By being present, you can also interact with other parents and children and observe their behavior. This can give you insight into any potential issues and allow you to address them with the instructor or other parents.<br><br>

                    4. Encourage positive relationships with other children.
                    Encourage your child to develop positive relationships with their peers in swimming lessons. Help them to understand the importance of treating others with respect and kindness and modeling appropriate behavior. Encourage your child to be inclusive and friendly, and to stand up for others if they see them being bullied. This can help to create a positive and supportive environment and can prevent bullying from occurring.<br><br>

                    5. Build your child's self-esteem and confidence.
                    Bullying can have a significant impact on a child's self-esteem and confidence. Building your child's self-esteem and confidence can help them to be more resilient in the face of bullying. Encourage your child to participate in activities outside of swimming, such as sports or music, where they can develop skills and talents. Praise your child for their efforts and accomplishments, and encourage them to set goals and work towards them. Help your child to develop a positive self-image and to understand that their worth is not determined by the opinions of others.<br><br>

                    In conclusion, if your child is experiencing bullying in swimming lessons, it is important to take action immediately. By working together with the swim instructor, other parents, and the swim school administration, you can create a safe and supportive environment for all children. It is essential to teach your child to recognize and report bullying, encourage positive relationships with other children, and build their self-esteem and confidence. With these efforts, you can protect your child from being bullied in swimming lessons and ensure that they have a positive and enjoyable experience learning to swim.
                </p>

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