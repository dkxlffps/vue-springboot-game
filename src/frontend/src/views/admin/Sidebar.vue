<template>
  <section>
    <b-button v-b-toggle.sidebar-variant class="MenuBtn" :class="{active: activeTab.isOpen}" @click="onMenu">Menu</b-button>
      <b-sidebar id="sidebar-variant" title="MENU" bg-variant="dark" text-variant="light" shadow v-model="isOpen">
        <div class="sidebarContent">
          <template v-for="(tab) in menuList">
            <button :key="tab.tabKey" class="title" :class="{active: activeTab.tab == tab.tabKey}" @click="setTab(tab.tabKey)">{{tab.tabNm}}</button>
            <div :key="'accordion'+tab.tabKey" class="tabAccordion" :ref="tab.tabKey">
              <ul>
                <li v-for="(content) in tab.contents" :key="content.contentKey" class="content" :class="{active: activeTab.content == content.contentKey}" @click="setContent(content.contentKey)">
                  <a>{{content.contentTitle}}</a>
                </li>
              </ul>
            </div>
          </template>
        </div>
      </b-sidebar>
  </section>
</template>
<script>
import { ADMIN } from 'Constant/index';

export default {
  name: 'SideVar',
  computed: {
    activeTab() {
      return this.$store.getters.$get_active_tab;
    }
  },
  watch: {
    activeTab(tab) {
      this.isOpen = tab.isOpen;
      this.accordion();
    },
    isOpen(open) {
      this.$store.dispatch(ADMIN.SET_ACTIVE_TAB, {...this.activeTab , isOpen: open, isLog: true});
      if(open)
        this.adminContainer.style.marginLeft = this.sideBarWidth;
      else
        this.adminContainer.style.marginLeft = '0px';
    }
  },
  created() {
    this.initMenuList();
  },
  mounted() {
    this.initAccordion();
    this.sideBar = document.getElementsByClassName('b-sidebar')[0];
    this.adminContainer = document.getElementsByClassName('adminContainer')[0];
    document.getElementsByClassName('bi-x b-icon bi')[0].style.display = 'none'; // closeBtn 숨김
    this.adminContainer.style.marginLeft = this.sideBarWidth;
  },
  methods: {
    initMenuList() {
      this.menuList = this.$store.getters.$get_menu_list;
    },
    initAccordion() {
      document.getElementsByClassName('tabAccordion').forEach(accordion => {
        accordion.style.maxHeight = 0;
      })
    },
    onMenu() {
      this.$store.dispatch(ADMIN.SET_ACTIVE_TAB, {...this.activeTab , isOpen: this.isOpen});
    },
    setTab(selectedTab) {
      this.$store.commit(ADMIN.SELECTED_TAB, selectedTab);
      this.accordion()
    },
    setContent(selectedContent) {
      this.$store.commit(ADMIN.SELECTED_CONTENT, selectedContent);
    },
    accordion() {
      if(!this.isOpen || this.activeTab.tab == '') return;
      let isOpen = Number(this.$refs[this.activeTab.tab][0].style.maxHeight.replace('px','')) > 0;
      this.initAccordion();
      if(!isOpen)
        this.$refs[this.activeTab.tab][0].style.maxHeight = this.$refs[this.activeTab.tab][0].scrollHeight + 'px';
    }
  },
  data() {
    return {
      isOpen: true,
      sideBarWidth: '320px',
      adminContainer: null,
      menuList: [],
    }
  }
}
</script>