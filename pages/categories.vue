<template>
  <main class="flex w-full h-screen p-4">
    <div class="flex flex-col justify-between w-full">
      <ul class="flex flex-col w-full gap-2">
        <li
          ref="link"
          v-for="(list, index) in listed"
          :key="list.title"
          @click="changeImg(list.img)"
          class="flex items-end gap-4 font-serif font-medium cursor-pointer text-7xl hover"
        >
          <span class="text-2xl">0{{ index + 1 }}.</span>{{ list.title }}
        </li>
      </ul>
      <div class="flex gap-10 pb-2 border-gray-500 border-b-[1px]">
        <nuxt-link to="/" @click="changeImg" class="font-semibold"
          >H&A</nuxt-link
        >
        <nuxt-link to="/categories" class="font-semibold">CATEGORIES</nuxt-link>
      </div>
    </div>
    <figure class="flex w-full h-full">
      <img
        ref="img"
        src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        class="object-cover w-full h-full"
      />
    </figure>
  </main>
</template>

<script setup>
import gsap from "gsap"

const link = ref([])

onMounted(() => {
  gsap.from(link.value, {
    x: "-150%",
    stagger: 0.05,
  })

  gsap.from(img.value, {
    x: "150%",
  })
})

const img = ref(null)
function changeImg(current) {
  img.value.src = current
}
const listed = ref([
  {
    title: "Beauty",
    img: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Portrait",
    img: "https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Food & Drink",
    img: "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2R1Y3QlMjBza2luY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Still Life",
    img: "https://images.unsplash.com/photo-1530630458144-014709e10016?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHByb2R1Y3QlMjBza2luY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Lifestyle",
    img: "https://images.unsplash.com/photo-1556228578-f9707385e031?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2R1Y3QlMjBza2luY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Active & Outdoor",
    img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHByb2R1Y3QlMjBza2luY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
])
</script>

<style scoped>
.hover:hover {
  transform: translateX(42px);
}
</style>
