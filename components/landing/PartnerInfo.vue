<template>
  <div class="mb-15" style="margin: 0 0 80px 0">
    <img :src="`/images/partner/${partner.img}`" alt="" />
    <p> {{ partner.text }} </p>
    <div class="w-full flex flex-row flex-wrap place-items-center g-screen rounded-lg">
      <ul class="mt-5">
        <li v-for="(s,i) in partner.advantages" :key="i">&#9830; {{ s }} </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "PartnerInfo",
  props: {
    partner: {
      type: Object,
      default: null
    }
  }
}
</script>
<style scoped>
img {
  max-width: 240px;
}

.blocks{
  background: #E7E7E9;
  margin: 20px 0;
}
</style>
