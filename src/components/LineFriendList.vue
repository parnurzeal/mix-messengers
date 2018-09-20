<template>
  <div class="line-friend-list">
    Line friend list
    <line-friend-list-item
      v-for="(conversation, index) of getDigestedList"
                      :name="conversation.displayParticipants"
                      :id="conversation.id"
                      >
    </line-friend-list-item>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import LineFriendListItem from '@/components/LineFriendListItem';
  
export default {
  name: 'line-friend-list',
  components: {
    LineFriendListItem,
  },
  data() {
    return {
    };
  },
  computed: {
    getDigestedList: function() {
      if (!this.conversations) return [];
      /*const digestedList = 
            this.conversations.data.map(elem => {
        const participantNames = elem.participants.data.map(person => person.name);
        elem.displayParticipants = participantNames.join(',');
        return elem;
      });
      console.log(digestedList);*/
      const digestedList =  this.conversations;
      return digestedList;
    },
    ...mapGetters({
      conversations: 'getLineConversations',
    }),
  },
};
</script>
<style scoped>
.line-friend-list {
  background-color: lightgreen;
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
