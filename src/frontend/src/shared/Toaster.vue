<template>
  <div style="display:none">
  </div>
</template>
<script>
import { ADMIN , SEPERATER} from 'Constant/index';

export default {
  name: 'Toaster',
  created() {
    this.$eventBus.$on('showToaster',this.showToaster)
  },
  methods: {
    /*
     * @param
     * String key
     * String title
     * String content
     * String variant @Toast Show Type [secondary | info | danger]
     * String destination @ content click시 목적지 ex) '{tab}^{content}^{title}'
     * Object data link이동시 전달 데이터 store 보관
     */
    showToaster(_toast) {
      let delay = 10000;
      let isEvent = _toast.hasOwnProperty('destination') && _toast.destination != '';
      let index = this.totalCnt;
      let toast = this.$bvToast.toast(_toast.content, {
        id: _toast.key+index,
        title: _toast.title,
        variant: _toast.variant,
        solid: true,
        autoHideDelay: delay,
        bodyClass: isEvent ? `active index${index}`:'',
      });
      if(isEvent) {
        setTimeout(() => {
          this.$(`.active.index${index}`)[0].addEventListener('click',() => this.goDestination(_toast.destination,_toast.data));
        }, 100);
      }
      this.totalCnt ++;
    },
    goDestination(destination, data) {
      this.$store.commit(ADMIN.SET_LINK_DATA, data);
      
      let _destination = destination.split(SEPERATER.TOAST_DESTINATION);
      this.$store.dispatch(ADMIN.SET_ACTIVE_TAB, {
        isOpen: true,
        isLog: true,
        isLink: true,
        tab: _destination[0],
        content: _destination[1],
        title: _destination[2]
      });
    }
  },
  data() {
    return {
      totalCnt: 0,
    }
  }
}
</script>