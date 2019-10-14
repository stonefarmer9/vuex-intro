<template>
  <div>
    <form @submit.prevent="">
    <label for="primarch">Who is the best Primarch? </label>
    <input name="primarch" @input="primarchChanged">

    <label for="legion">What is their legion? </label>
    <input name="legion" @input="legionChanged">
  </form>
  </div>
</template>

<script>
export default {
  methods: {
    primarchChanged: function(event) {
      this.$store.commit('changePrimarch', event.target.value)
    },
    legionChanged: function(event) {
      this.$store.commit('changeLegion', event.target.value)
    },
    
  }
}
</script>
