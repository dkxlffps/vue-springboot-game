import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import $ from 'jquery';
import prop from '../static/prop/properties';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';

import 'Style/common.css';

var EventBus = new Vue();

// Vue prototype
Object.defineProperties(Vue.prototype, {
    $eventBus: {
        get: function() {
            return EventBus;
        }
    },
    $: {
        get: function() {
            return $;
        }
    },
    $param: {
        get: function() {
            return prop;
        }
    }
});

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
