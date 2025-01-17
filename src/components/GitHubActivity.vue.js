import { ref, onMounted } from 'vue';
const githubUsername = ref('icodepixels'); // Replace with your actual GitHub username
const githubData = ref(null);
// Function to fetch GitHub contribution data
const fetchGithubData = async () => {
    try {
        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
          query {
            user(login: "${githubUsername.value}") {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
            }
          }
        `
            })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.errors) {
            throw new Error(data.errors.map((e) => e.message).join(', '));
        }
        if (!data.data?.user?.contributionsCollection?.contributionCalendar) {
            throw new Error('Invalid response structure');
        }
        githubData.value = data.data.user.contributionsCollection.contributionCalendar;
    }
    catch (error) {
        console.error('Error fetching GitHub data:', error);
        githubData.value = null; // Reset the data on error
    }
};
const getContributionColor = (count) => {
    if (count === 0)
        return '#ebedf0';
    if (count <= 3)
        return '#9be9a8';
    if (count <= 6)
        return '#40c463';
    if (count <= 9)
        return '#30a14e';
    return '#216e39';
};
onMounted(() => {
    fetchGithubData();
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ((`https://github.com/${__VLS_ctx.githubUsername}`)),
        target: ("_blank"),
        rel: ("noopener noreferrer"),
        ...{ class: ("block hover:opacity-90 transition-opacity duration-200 font-mono") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("github-activity bg-transparent rounded-lg w-full max-w-2xl") },
    });
    if (__VLS_ctx.githubData) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("contribution-container") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("month-labels flex justify-between ml-6 mb-1 pr-3") },
        });
        for (const [month] of __VLS_getVForSourceType((['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                key: ((month)),
                ...{ class: ("text-xs text-gray-500") },
            });
            (month);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("day-labels flex flex-col gap-1 mr-2") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("h-3 text-xs text-gray-500") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("h-3") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("h-3 text-xs text-gray-500") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("h-3") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("h-3 text-xs text-gray-500") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("h-3") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("h-3") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("contribution-graph flex gap-1") },
        });
        for (const [week] of __VLS_getVForSourceType((__VLS_ctx.githubData.weeks.slice(-52)))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                key: ((week.contributionDays[0].date)),
                ...{ class: ("week flex flex-col gap-1") },
            });
            for (const [day] of __VLS_getVForSourceType((week.contributionDays))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div)({
                    key: ((day.date)),
                    ...{ class: ("contribution-day w-3 h-3 rounded-sm") },
                    ...{ style: (({
                            backgroundColor: __VLS_ctx.getContributionColor(day.contributionCount)
                        })) },
                    title: ((`${day.contributionCount} contributions on ${new Date(day.date).toLocaleDateString()}`)),
                });
            }
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-end mt-2") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("legend flex items-center gap-2 text-xs text-gray-500") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex gap-1") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("w-3 h-3 rounded-sm") },
            ...{ style: ({}) },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("w-3 h-3 rounded-sm") },
            ...{ style: ({}) },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("w-3 h-3 rounded-sm") },
            ...{ style: ({}) },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("w-3 h-3 rounded-sm") },
            ...{ style: ({}) },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("w-3 h-3 rounded-sm") },
            ...{ style: ({}) },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-gray-500") },
        });
    }
    ['block', 'hover:opacity-90', 'transition-opacity', 'duration-200', 'font-mono', 'github-activity', 'bg-transparent', 'rounded-lg', 'w-full', 'max-w-2xl', 'contribution-container', 'month-labels', 'flex', 'justify-between', 'ml-6', 'mb-1', 'pr-3', 'text-xs', 'text-gray-500', 'flex', 'day-labels', 'flex', 'flex-col', 'gap-1', 'mr-2', 'h-3', 'text-xs', 'text-gray-500', 'h-3', 'h-3', 'text-xs', 'text-gray-500', 'h-3', 'h-3', 'text-xs', 'text-gray-500', 'h-3', 'h-3', 'contribution-graph', 'flex', 'gap-1', 'week', 'flex', 'flex-col', 'gap-1', 'contribution-day', 'w-3', 'h-3', 'rounded-sm', 'flex', 'justify-end', 'mt-2', 'legend', 'flex', 'items-center', 'gap-2', 'text-xs', 'text-gray-500', 'flex', 'gap-1', 'w-3', 'h-3', 'rounded-sm', 'w-3', 'h-3', 'rounded-sm', 'w-3', 'h-3', 'rounded-sm', 'w-3', 'h-3', 'rounded-sm', 'w-3', 'h-3', 'rounded-sm', 'text-gray-500',];
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
            githubUsername: githubUsername,
            githubData: githubData,
            getContributionColor: getContributionColor,
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
//# sourceMappingURL=GitHubActivity.vue.js.map