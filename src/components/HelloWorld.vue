<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import GitHubActivity from './GitHubActivity.vue'

// Add reactive state for sparkle position, color and number
const sparkleX = ref(0)
const sparkleY = ref(0)
const sparkleColor = ref('#ffeb3b')
const sparkleNumber = ref('1')

// Array of possible characters to display
const matrixChars = [
  'Object.keys()', 'Object.values()', 'Object.entries()', 'Object.assign()', 'Object.create()', 'Object.freeze()', 'Object.seal()', 'Object.is()', 'Object.isExtensible()', 'Object.isSealed()', 'Object.isFrozen()', 'Object.defineProperty()', 'Object.defineProperties()', 'Object.getOwnPropertyDescriptor()', 'Object.getOwnPropertyDescriptors()', 'Object.getOwnPropertyNames()', 'Object.getOwnPropertySymbols()', 'Object.getPrototypeOf()', 'Object.setPrototypeOf()', 'Object.isExtensible()', 'Object.isSealed()', 'Object.isFrozen()', 'Object.defineProperty()', 'Object.defineProperties()', 'Object.getOwnPropertyDescriptor()', 'Object.getOwnPropertyDescriptors()', 'Object.getOwnPropertyNames()', 'Object.getOwnPropertySymbols()', 'Object.getPrototypeOf()', 'Object.setPrototypeOf()', 'Array.isArray()', 'Array.from()', 'Array.of()', 'Array.prototype.map()', 'Array.prototype.filter()', 'Array.prototype.reduce()', 'Array.prototype.forEach()', 'Array.prototype.some()', 'Array.prototype.every()', 'Array.prototype.find()', 'Array.prototype.findIndex()', 'Array.prototype.includes()', 'Array.prototype.indexOf()', 'Array.prototype.lastIndexOf()', 'Array.prototype.join()', 'Array.prototype.split()', 'Array.prototype.concat()', 'Array.prototype.slice()', 'Array.prototype.splice()', 'Array.prototype.shift()', 'Array.prototype.sort()', 'Array.prototype.reverse()', 'String', 'Boolean', 'Number', 'Function', 'Date', 'RegExp', 'Promise', 'Vue', 'React', 'Javascript', 'Node', 'Python', 'CSS', 'HTML', 'Doctype', 'Angular']

// Function to generate random position, color and character
const updateSparkle = () => {
  const element = document.querySelector('.sparkle')
  if (!element) return

  // Update content and color
  sparkleNumber.value = matrixChars[Math.floor(Math.random() * matrixChars.length)]
  const hue = Math.floor(Math.random() * 360)
  const saturation = Math.floor(Math.random() * 30 + 70)
  const lightness = Math.floor(Math.random() * 30 + 40)
  sparkleColor.value = `hsl(${hue}, ${saturation}%, ${lightness}%)`

  // Set new random position
  sparkleX.value = Math.random() * 100
  sparkleY.value = Math.random() * 100

  // GSAP animation
  gsap.fromTo(element,
    {
      opacity: 0,
      y: -15,
      scale: 0.8,
    },
    {
      duration: 1.5,
      opacity: 0,
      y: 15,
      scale: 0.8,
      ease: "power3.inOut",
      keyframes: [
        { opacity: 0.8, y: -10, scale: 0.9, duration: 0.3 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6 },
        { opacity: 0.8, y: 10, scale: 0.9, duration: 0.3 },
      ]
    }
  )
}

const linkedInUrl = "https://www.linkedin.com/in/rjasonroberts"

// Start the sparkling animation with a randomized interval
onMounted(() => {
  const createRandomInterval = () => {
    const minDelay = 1000; // 1 second
    const maxDelay = 1300; // 1.3 seconds
    const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
    setTimeout(() => {
      updateSparkle();
      createRandomInterval();
    }, randomDelay);
  };

  createRandomInterval();
})
</script>

<template>
  <div class="flex flex-col items-center justify-center border border-gray-200 rounded-lg h-full w-full bg-slate-50 relative">
    <div class="flex items-center justify-center mb-3 flex-wrap">
      <h1 class="text-2xl md:text-5xl font-bold text-gray-800 title text-center font-mono">Robert (Jason) Roberts</h1>
      <div class="flex items-center justify-center">
          <a
          :href="linkedInUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="linkedin-btn bg-slate-50 hover:bg-gray-200 p-3 rounded-lg transition-colors duration-300"
          >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#0A66C2"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
        </a>
      </div>
    </div>
    <p class="text-sm md:text-base sm:p-2 lg:p-0 text-gray-600 text-center my-6 max-w-[600px]">
      Senior Software Engineer passionate about building elegant frontend experiences and integrating cutting-edge AI solutions.
    </p>

    <!-- Add GitHub Activity component -->
    <GitHubActivity class="mt-4 border border-gray-200 rounded-lg p-4" />

    <div
      class="sparkle absolute"
      :style="{
        left: `${sparkleX}%`,
        top: `${sparkleY}%`,
        color: sparkleColor
      }"
    >
      {{ sparkleNumber }}
    </div>
  </div>

</template>

<style scoped>
.font-mono {
  font-family: 'Fira Code', monospace;
}
.title {
  word-spacing: -0.2em;
}
.sparkle {
  width: 48px;
  height: 32px;
  pointer-events: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 0 8px currentColor;
  z-index: 1;
  font-family: 'Fira Code', monospace;
  opacity: 0;
}

.linkedin-btn {
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
}

.linkedin-btn:hover {
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
}
</style>