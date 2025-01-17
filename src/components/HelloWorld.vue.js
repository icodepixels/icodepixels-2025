import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import GitHubActivity from './GitHubActivity.vue';
// Add reactive state for sparkle position, color and number
const sparkleX = ref(0);
const sparkleY = ref(0);
const sparkleColor = ref('#ffeb3b');
const sparkleNumber = ref('1');
// Array of possible characters to display
const matrixChars = [
    'Object.keys()', 'Object.values()', 'Object.entries()', 'Object.assign()', 'Object.create()', 'Object.freeze()', 'Object.seal()', 'Object.is()', 'Object.isExtensible()', 'Object.isSealed()', 'Object.isFrozen()', 'Object.defineProperty()', 'Object.defineProperties()', 'Object.getOwnPropertyDescriptor()', 'Object.getOwnPropertyDescriptors()', 'Object.getOwnPropertyNames()', 'Object.getOwnPropertySymbols()', 'Object.getPrototypeOf()', 'Object.setPrototypeOf()', 'Object.isExtensible()', 'Object.isSealed()', 'Object.isFrozen()', 'Object.defineProperty()', 'Object.defineProperties()', 'Object.getOwnPropertyDescriptor()', 'Object.getOwnPropertyDescriptors()', 'Object.getOwnPropertyNames()', 'Object.getOwnPropertySymbols()', 'Object.getPrototypeOf()', 'Object.setPrototypeOf()', 'Array.isArray()', 'Array.from()', 'Array.of()', 'Array.prototype.map()', 'Array.prototype.filter()', 'Array.prototype.reduce()', 'Array.prototype.forEach()', 'Array.prototype.some()', 'Array.prototype.every()', 'Array.prototype.find()', 'Array.prototype.findIndex()', 'Array.prototype.includes()', 'Array.prototype.indexOf()', 'Array.prototype.lastIndexOf()', 'Array.prototype.join()', 'Array.prototype.split()', 'Array.prototype.concat()', 'Array.prototype.slice()', 'Array.prototype.splice()', 'Array.prototype.shift()', 'Array.prototype.sort()', 'Array.prototype.reverse()', 'String', 'Boolean', 'Number', 'Function', 'Date', 'RegExp', 'Promise', 'Vue', 'React', 'Javascript', 'Node', 'Python', 'CSS', 'HTML', 'Doctype', 'Angular'
];
// Function to generate random position, color and character
const updateSparkle = () => {
    const element = document.querySelector('.sparkle');
    if (!element)
        return;
    // Update content and color
    sparkleNumber.value = matrixChars[Math.floor(Math.random() * matrixChars.length)];
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 30 + 70);
    const lightness = Math.floor(Math.random() * 30 + 40);
    sparkleColor.value = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    // Set new random position
    sparkleX.value = Math.random() * 100;
    sparkleY.value = Math.random() * 100;
    // GSAP animation
    gsap.fromTo(element, {
        opacity: 0,
        y: -15,
        scale: 0.8,
    }, {
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
    });
};
const linkedInUrl = "https://www.linkedin.com/in/rjasonroberts";
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
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['linkedin-btn',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col items-center justify-center border border-gray-200 rounded-lg h-full w-full bg-slate-50 relative") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center justify-center mb-3 flex-wrap") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: ("text-2xl md:text-5xl font-bold text-gray-800 title text-center font-mono") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center justify-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ((__VLS_ctx.linkedInUrl)),
        target: ("_blank"),
        rel: ("noopener noreferrer"),
        ...{ class: ("linkedin-btn bg-slate-50 hover:bg-gray-200 p-3 rounded-lg transition-colors duration-300") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        xmlns: ("http://www.w3.org/2000/svg"),
        width: ("24"),
        height: ("24"),
        viewBox: ("0 0 24 24"),
        fill: ("#0A66C2"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
        d: ("M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-sm md:text-base sm:p-2 lg:p-0 text-gray-600 text-center my-6 max-w-[600px]") },
    });
    // @ts-ignore
    /** @type { [typeof GitHubActivity, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(GitHubActivity, new GitHubActivity({
        ...{ class: ("mt-4 border border-gray-200 rounded-lg p-4") },
    }));
    const __VLS_1 = __VLS_0({
        ...{ class: ("mt-4 border border-gray-200 rounded-lg p-4") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("sparkle absolute") },
        ...{ style: (({
                left: `${__VLS_ctx.sparkleX}%`,
                top: `${__VLS_ctx.sparkleY}%`,
                color: __VLS_ctx.sparkleColor
            })) },
    });
    (__VLS_ctx.sparkleNumber);
    ['flex', 'flex-col', 'items-center', 'justify-center', 'border', 'border-gray-200', 'rounded-lg', 'h-full', 'w-full', 'bg-slate-50', 'relative', 'flex', 'items-center', 'justify-center', 'mb-3', 'flex-wrap', 'text-2xl', 'md:text-5xl', 'font-bold', 'text-gray-800', 'title', 'text-center', 'font-mono', 'flex', 'items-center', 'justify-center', 'linkedin-btn', 'bg-slate-50', 'hover:bg-gray-200', 'p-3', 'rounded-lg', 'transition-colors', 'duration-300', 'text-sm', 'md:text-base', 'sm:p-2', 'lg:p-0', 'text-gray-600', 'text-center', 'my-6', 'max-w-[600px]', 'mt-4', 'border', 'border-gray-200', 'rounded-lg', 'p-4', 'sparkle', 'absolute',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            GitHubActivity: GitHubActivity,
            sparkleX: sparkleX,
            sparkleY: sparkleY,
            sparkleColor: sparkleColor,
            sparkleNumber: sparkleNumber,
            linkedInUrl: linkedInUrl,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=HelloWorld.vue.js.map