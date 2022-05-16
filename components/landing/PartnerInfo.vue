<template>
  <div class="mb-15" style="margin: 0 0 80px 0">
    <img :src="`/images/partner/${partner.img}`" :class="partner.img.includes('abc') ? 'base__height' : ''" alt="" />
    <p> {{ partner.text }} </p>
    <div class="w-full flex flex-row flex-wrap place-items-center g-screen rounded-lg">
      <ul class="mt-5 blocks">
        <li v-for="(s,i) in partner.advantages" :key="i">&#9830; {{ s }} </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "LandingPartnerInfo",
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
  max-width: 290px;
  height: 45px !important;
}

.base__height {
  max-height: 40px !important;
}

.blocks{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4;
}

.blocks li {
  flex: 1 1 auto;
  margin: 10px;
}
</style>
