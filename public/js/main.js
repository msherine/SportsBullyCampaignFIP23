// components always get imported here
import CampaignActivity from './components/TheCampaignActivity.js';
import Lightbox from './components/TheLightBoxComponent.js';

(() => {
    // create vue instance here
    const { createApp } = Vue

    createApp({
        created() {
            fetch('./data.json') 
                .then(res => res.json()) 
                .then(data => this.campaignData = data) 
            .catch(error => console.error(error)); 
        },

        data() {
            return {
                campaignData: {},
                lightboxData: {},
                showLightBox: false
            }
        },

        methods: {
            loadLightBox(item) {
                this.lightboxData = item;
                this.showLightBox = true;
            }
        },

        components: {
            campaignactivity: CampaignActivity,
            lightbox: Lightbox
        }
    }).mount('#app')
})()