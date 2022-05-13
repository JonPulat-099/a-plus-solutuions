<template>
  <div v-if="text" class="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center flex-1 custom__cards">
    <div class="grid place-items-center g-screen section-title text-center mb-15">
      <!-- <div class="w-32 h-32 m-4 px-2 sm:px-6 py-2 flex items-center rounded-full border-4 border-slate-50 custom__card">
          <img class="w-28 h-28 object-contain" :src="img" alt="Sunset in the mountains">
        </div> -->
      <div class="flex items-center rounded-full image__card" :style="`background: ${color}`">
        <img class="m-4 object-cover" :src="require(`~/assets/img/plus/${img}`)" alt="" />
      </div>
      <p class="text-lg mt-4" style="font-size: 16px">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhyUsCard',
  props: {
    text: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
.section-title img {
  width: 70px;
  height: 70px;
}

.custom__cards {
  -webkit-box-shadow: 2px 21px 29px -15px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 2px 21px 29px -15px rgba(34, 60, 80, 0.2);
  box-shadow: 2px 21px 29px -15px rgba(34, 60, 80, 0.2);
  padding: 15px;
  background: #fff;
  margin: 0 auto;
}
</style>
