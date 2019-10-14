<template>
  <div>
    <p v-if="$store.getters.primarch !='' ">So you believe {{ $store.getters.primarch }} to be the best ?</p>
    <p v-if="$store.getters.primarch !='' ">And you think the {{ $store.getters.legion }} are better than my precious Geno 52???</p>
    <p v-else>Which Primarch and Legion do think best, mortal?</p>
  </div>
</template>
