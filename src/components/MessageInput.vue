<template>
  <div class="message-input">
    <textarea
      placeholder="message..."
      @keydown.enter="submitMessage"
    ></textarea>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import { mapState } from 'vuex';
export default {
  name: 'message-input',
  data() {
    return {
    };
  },
  methods: {
    submitMessage(event) {
      const text = event.target.value;
      console.log(this.currentChatId);
      this.sendFbMessage({
        conversationId: this.currentChatId, 
        text
      });
      // Empty msg input;
      event.target.value = '';
    },
    ...mapActions([
      'sendFbMessage',
    ]),
  },
  computed: {
    ...mapState([
      'currentChatId',
      ]),
  },
};
</script>
<style scoped>
.message-input {
  width: 100%;
}

textarea {
  width: 98%;
  resize: none;
  border-radius: 3px;
}
</style>

