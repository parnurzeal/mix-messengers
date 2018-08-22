<template>
  <div class="friend-list-item">
    <span class="id">ID: {{ id }}</span>
    <span class="name">People: {{ name }}</span>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'friend-list-item',
  props: {
    name: {},
    id: {},
  },
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
<style scoped></style>
