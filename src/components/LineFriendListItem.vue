<template>
  <div 
       class="line-friend-list-item"
       v-on:click="onFocus">
    <span class="id">ID: {{ id }}</span>
    <span class="name">People: {{ name }}</span>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import { mapMutations } from 'vuex';
  
export default {
  name: 'line-friend-list-item',
  props: {
    name: {},
    id: {},
  },
  data() {
    return {
    };
  },
  methods: {
    onFocus(event) {
      console.log('thread id:', this.id);
      this.getLineConversationLog(this.id);
      this.setCurrentChatId({
        id: this.id
      });
    },
    ...mapActions([
      'getLineConversationLog',
      ]),
    ...mapMutations([
      'setCurrentChatId',
      ]),
  },
  computed: {
    ...mapGetters({
    }),
  },
};
</script>
<style scoped>
.line-friend-list-item {
  border: solid 1px;  
}

</style>
