<template>
  <div>
    <p>This is foo page.</p>
    <p>Count: {{ count }}</p>
    <p>{{ message }}</p>
    <p><button @click.prevent="increment({value: 1})">increment +1</button></p>
    <p>
      <button @click.prevent="asyncIncrement({value: 2})">
        async increment +2
      </button>
    </p>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['message']),
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['asyncIncrement']),
  },
};
</script>
