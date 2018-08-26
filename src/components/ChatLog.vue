<template>
  <div class="chat-log">
    chat-log
    <div>
      <message-bubble
        v-for="message in messages.data"
        :id="message.id"
        :time="message.created_time"
        :text="message.message"
        :from="message.from.name"
                      >
      </message-bubble>  
    </div>
  
    
    <div>
      {{messages}}
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import { mapState } from 'vuex';
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
  computed: {
    getOnlyMessages: function() {
      if (!this.messages.data) return [];
      const digestedList = this.messages.data.map(elem => { 
        
      });
      const digestedList2 = 
            this.conversations.data.map(elem => {
        const participantNames = elem.participants.data.map(person => person.name);
        elem.displayParticipants = participantNames.join(',');
        return elem;
      });
      console.log(digestedList);
      return digestedList;
    },
    ...mapState({
      messages: state => state.messages,
    }),
    ...mapGetters({
    }),
  },
};
</script>
<style scoped></style>
