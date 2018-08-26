<template>
  <div class="chat-log">
    chat-log
    <div>
      <message-bubble
        v-for="message in this.getOnlyMessages"
        :id="message.id"
        :time="message.created_time"
        :text="message.message"
        :from="message.from.name"
      ></message-bubble>  
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
import MessageBubble from '@/components/MessageBubble';
  
export default {
  name: 'chat-log',
  components: {
    MessageBubble,
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions([
      'getFbConversationLog',
    ]),
  },
  computed: {
    ...mapState({
      messages: state => state.messages,
    }),
    ...mapGetters([
      'getOnlyMessages', 
    ]),
  },
};
</script>
<style scoped></style>
