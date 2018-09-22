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
      if (this.currentChatId.fb) {
        this.sendFbMessage({
          conversationId: this.currentChatId.fb, 
          text
        });
      } else if (this.currentChatId.line) {
        this.sendLineMessage({
          conversationId: this.currentChatId.line, 
          text
        });
      }

      // Empty msg input;
      event.target.value = '';
    },
    ...mapActions([
      'sendFbMessage',
      'sendLineMessage',
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

