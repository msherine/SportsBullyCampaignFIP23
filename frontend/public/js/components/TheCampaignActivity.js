export default {
    name: 'TheCampaignActivity',

    props: {
        activity: Object
    },

    template:
    `
    <div>
        <div class="campaign_1">
            <img :src='"./public/images/" + activity.thumbnail'>
            <h3>{{ activity.title }}</h3>
            <p>{{ activity.desc }}</p>
            <p>Don't forget to put {{ activity.hashtags }}!</p>
            <p class="campaign_details">{{ activity.details }}</p>
            
            <!--<button @click="loadLightboxData">View More</button>-->
        </div>
    </div>
    `,

    methods: {
        loadLightboxData() {
            this.$emit('loadlb', this.activity);
        }
    }
}