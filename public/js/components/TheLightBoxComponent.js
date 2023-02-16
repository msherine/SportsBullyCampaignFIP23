export default {
    name: 'TheLightBoxComponent',

    props: ['activity'],

    template:
    `
    <section class="lightbox campaign_lightbox">
        <i @click="closeLB" class="ri-close-line close"></i>
        
        <div>
            <h3>{{ activity.title }}</h3>
            <p>{{ activity.desc }}</p>
        </div>
    </section>
    `,

    methods: {
        closeLB() {
            this.$emit('closelb');
        }
    }
}