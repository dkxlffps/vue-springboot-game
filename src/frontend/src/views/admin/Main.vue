<template>
  <div class="adminContainer">
    <side-var />
    <div class="adminContent">
      <b-card no-body>
        <b-tabs card>
          <b-tab :title="'메인'" @click="setActiveTabIndex(-1)" :active="activeTabIndex == -1">
            <div style="width: 100%; height: 840px;">
              <transition-group>
                <img v-for="index in 5" :style="`width: 95%; height: 100%; position:absolute; left:35px; opacity: ${bannerIndex == index? 1:0}; transition-duration:.4s; margin-bottom: 35px; overflow: hidden;`" :key="index" :src="require('Assets/home/'+index+'.jpg')"/>
              </transition-group>
            </div>
          </b-tab>
          <b-tab v-for="(tab, index) in tabContents" :key="tab.contentKey" :title="tab.contentTitle" 
            :active="activeTabIndex == index" @click="setActiveTabIndex(index)"
            :button-id="tab.contentKey"
          > 
            <!-- <item-create v-if="tab.tabKey == ADMIN.MENU.ITEM.CREATE"></item-create> -->
            <equip-create-form v-if="tab.contentKey == ADMIN.MENU.ITEM.EQUIP_CREATE" />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>
<script>
import Sidebar from 'View/admin/Sidebar.vue';

//sub Components
// import ItemCreate from './components/item/Item_create.vue';
import EquipCreateForm from './components/equip/equip_main.vue';

import * as Constant from 'Constant/index';

export default {
  name: 'AdminMain',
  components: {
    'side-var': Sidebar,

    //Item
    // 'item-create': ItemCreate,

    //Equip
    'equip-create-form': EquipCreateForm,
  },
  watch: {
    tabContents() {
      let btn = document.createElement('a');
      btn.className = 'closeBtn';
      btn.text = 'x';
      btn.onclick = (e) => {
        let id = e.target.parentElement.id;
        this.$store.commit(Constant.ADMIN.DELETE_TAB, id);
      }
      setTimeout(() => {
        let size = document.getElementsByClassName('nav-item').length;
        for(var i = 1; i < size; i ++) {
          var target = document.getElementsByClassName('nav-item')[i].children[0];
          if(target.children.length < 1) {
            target.append(btn);
          }
        }
      }, 50);
    }
  },
  computed: {
    tabContents() {
      return this.$store.getters.$get_tab_contents;
    },
    activeTabIndex() {
      return this.$store.getters.$get_tab_content_index;
    }
  },
  created() {
    // this.$eventBus.$emit('showToaster', {
    //   key: 'test',
    //   title: '아이탬 생성 링크 테스트',
    //   content: '아이템 생성으로 이동!',
    //   variant: 'info',
    //   destination: ADMIN.MENU.FORM.ITEM+'^'+ADMIN.MENU.ITEM.CREATE+'^아이템 생성',
    //   data: 'ITEM_ID'
    // })
    // this.$eventBus.$emit('showToaster', {
    //   key: 'test',
    //   title: '아이탬 생성 링크 테스트',
    //   content: '아이템 생성으로 이동!',
    //   variant: 'info',
    //   destination: ADMIN.MENU.FORM.ITEM+'^'+ADMIN.MENU.ITEM.CREATE+'^아이템 생성',
    //   data: 'ITEM_ID'
    // })

    setInterval(() => {
      this.bannerIndex ++;
      if(this.bannerIndex > 5)
        this.bannerIndex = 1;
    }, 2000);
  },  
  methods: {
    setActiveTabIndex(index) {
      this.$store.commit(Constant.ADMIN.SET_ACTIVE_TAB_INDEX, index);
    }
  },
  data() {
    return {
      bannerIndex: 1,
      ADMIN: Constant.ADMIN,
    }
  }
}

import 'Style/admin/admin.css';
</script>