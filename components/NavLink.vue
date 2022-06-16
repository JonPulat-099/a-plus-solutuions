<template>
  <li class="w-full">
    <a
      class="flex items-center md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline custom__link"
      :href="url"
      @click="changeBlock(url)"
    >
      {{ name }}
    </a>
  </li>
</template>
<script>
import $ from 'jquery'
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

  methods: {
    changeBlock(url) {
      const $targetEle = $(url)
      $('html, body').stop().animate(
        {
          scrollTop: $targetEle.offset().top,
        },
        700,
        'swing'
      )

      if (this.$parent?.openSidebar) this.$parent.openSidebar()
    },
  },
}
</script>
<style>
.custom__link {
  white-space: nowrap !important;
}
</style>
