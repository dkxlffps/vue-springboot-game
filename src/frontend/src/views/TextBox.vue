<template>
<div class="textWrap">
  <b-form-textarea disabled size="sm" class="textBox title" no-resize style="background-color: black !important" />
  <b-form-textarea disabled size="sm" rows="15" class="textBox content" no-resize style="background-color: black !important; margin-top: 50px;" />
</div>

</template>
<script>
export default {
  name: 'TextBox',
  mounted() {
    document.getElementsByClassName('title').item(0).setAttribute('rows','1');
  }
}

import 'Style/textBox.css';
</script>