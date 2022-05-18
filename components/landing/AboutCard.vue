<template>
  <div class="w-full lg:w-1/3 mt-6 lg:mt-0 overflow-hidden space-y-6" v-bind="$attrs">
    <div class="flex flex-col items-stretch">
      <div class="grid place-items-center content-start g-screen overflow-x-auto">
        <div
          class="w-32 h-32 p-5 mb-6 flex items-center rounded-full border-4 border-slate-50 custom__card"
        >
          <img class="w-28 h-28 object-contain" :src="img" alt="Sunset in the mountains" />
        </div>
        <div class="px-6">
          <p class="text-center text-xl text-base text-[18px]">
            {{ title }} <span class="font-bold text-[#1B778B]"> {{ subtitle }} </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutCard',
  props: {
    img: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
}
</script>
<style>
.custom__card {
  background: #f8f8f8;
}
</style>
