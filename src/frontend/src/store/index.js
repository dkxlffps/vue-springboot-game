import Vue from "vue";
import Vuex from "vuex";

import account from 'Store/account';
import item from 'Store/item';
import common from 'Store/common';
import character from 'Store/character';
import admin from 'Store/admin';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        account: account,
        item: item,
        common: common,
        character: character,
        admin: admin,
    }
});
