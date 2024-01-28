<template>
  <main
    class="relative flex flex-col items-center justify-between h-screen overflow-hidden"
  >
    <NavBar class="w-full" />
    <figure
      ref="imagewrapper"
      class="absolute w-[500px] h-[700px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10 overflow-hidden"
    >
      <div ref="color" class="absolute z-10 w-full h-full bg-gray-300"></div>
      <img
        ref="image"
        src="/img.jpg"
        class="object-cover w-full h-full"
        alt=""
      />
    </figure>
    <div class="flex items-end">
      <h1
        class="text-[40vh] leading-snug font-serif m-0 z-0 overflow-hidden"
        ref="text"
      >
        <span>Beauty.</span>
      </h1>
    </div>
    <Footbar class="w-full" />
  </main>
</template>

<script setup>
import gsap from "gsap"
import SplitType from "split-type"

const text = ref(null)
const image = ref(null)
const imagewrapper = ref(null)
const color = ref(null)
onMounted(() => {
  const tl = gsap.timeline()
  const split = new SplitType(text.value.children, { types: "chars" })

  tl.from(split.chars, {
    duration: 0.75,
    y: "100%",
    stagger: 0.25,
  })

  tl.from(imagewrapper.value, {
    duration: 1,
    y: "150%",
  })

  tl.to(color.value, {
    duration: 1,
    y: "-150%",
  })

  tl.from(
    image.value,
    {
      scale: 2,
    },
    "<"
  )
})
</script>

<style scoped></style>
