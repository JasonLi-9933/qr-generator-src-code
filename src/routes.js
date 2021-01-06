//jshint esversion:6

import QrGenerator from './assets/components/QrGenerator.vue';

export const routes = [
    {
        path:"", 
        name:'home',
    },

    {
        path:"qr_generator", 
        component: QrGenerator, 
        name:'generator'
    },
        
    {path:'*', redirect:{name:'home'}}
    
];