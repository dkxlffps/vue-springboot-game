<template>
  <div style="display:none">
  </div>
</template>
<script>
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
     * String destination @ content click시 목적지
     * 
     */
    showToaster(_toast) {
      let delay = 5000;
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
          this.$(`.active.index${index}`)[0].addEventListener('click',() => this.goDestination(_toast.destination));
        }, 100);
      }
      this.totalCnt ++;
    },
    goDestination(destination) {
      console.log(destination)
    }
  },
  data() {
    return {
      totalCnt: 0,
    }
  }
}
</script>