<template>
  <div class="min-h-screen font-sans antialiased relative">
    <div class="relative">
      <div
        class="absolute top-0 left-0 w-full"
      ></div>
      <BaseNavbar />

      <main class="text-neutral-800">
        <Nuxt />
      </main>

      <BaseFooter />
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseLayout',
}
</script>

<style></style>
