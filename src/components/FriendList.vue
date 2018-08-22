<template>
  <div class="friend-list">
    friend-list
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'friend-list',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
    }),
  },
};
</script>
<style scoped>
.friend-list {
  background-color: violet;
}
/*.friend-list {
  position: relative;
  display: block;
  width: 250px;
  height: 100%;
  background: linear-gradient(141deg, #505D74 0%, #15223A 75%);
  float: left;
  overflow-y: scroll;
  border-radius: 0 0 0 3px;
}*/
</style>
