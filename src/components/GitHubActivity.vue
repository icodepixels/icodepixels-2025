<script setup lang="ts">
import { ref, onMounted } from 'vue'

const githubUsername = ref('icodepixels') // Replace with your actual GitHub username
const githubData = ref<any>(null)

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
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json()

    if (data.errors) {
      throw new Error(data.errors.map((e: any) => e.message).join(', '));
    }

    if (!data.data?.user?.contributionsCollection?.contributionCalendar) {
      throw new Error('Invalid response structure');
    }

    githubData.value = data.data.user.contributionsCollection.contributionCalendar
  } catch (error) {
    console.error('Error fetching GitHub data:', error)
    githubData.value = null // Reset the data on error
  }
}

const getContributionColor = (count: number): string => {
  if (count === 0) return '#ebedf0'
  if (count <= 3) return '#9be9a8'
  if (count <= 6) return '#40c463'
  if (count <= 9) return '#30a14e'
  return '#216e39'
}

onMounted(() => {
  fetchGithubData()
})
</script>

<template>
  <a
    :href="`https://github.com/${githubUsername}`"
    target="_blank"
    rel="noopener noreferrer"
    class="block hover:opacity-90 transition-opacity duration-200 font-mono"
  >
    <div class="github-activity bg-transparent rounded-lg w-full max-w-2xl">
      <div v-if="githubData" class="contribution-container">
        <!-- Month labels -->
        <div class="month-labels flex justify-between ml-6 mb-1 pr-3">
          <div
            v-for="month in ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']"
            :key="month"
            class="text-xs text-gray-500"
          >
            {{ month }}
          </div>
        </div>

        <div class="flex">
          <!-- Day labels -->
          <div class="day-labels flex flex-col gap-1 mr-2">
            <div class="h-3 text-xs text-gray-500">M</div>
            <div class="h-3"></div>
            <div class="h-3 text-xs text-gray-500">W</div>
            <div class="h-3"></div>
            <div class="h-3 text-xs text-gray-500">F</div>
            <div class="h-3"></div>
            <div class="h-3"></div>
          </div>

          <!-- Contribution graph -->
          <div class="contribution-graph flex gap-1">
            <div
              v-for="week in githubData.weeks.slice(-52)"
              :key="week.contributionDays[0].date"
              class="week flex flex-col gap-1"
            >
              <div
                v-for="day in week.contributionDays"
                :key="day.date"
                class="contribution-day w-3 h-3 rounded-sm"
                :style="{
                  backgroundColor: getContributionColor(day.contributionCount)
                }"
                :title="`${day.contributionCount} contributions on ${new Date(day.date).toLocaleDateString()}`"
              />
            </div>
          </div>
        </div>

        <div class="flex justify-end mt-2">
          <!-- Legend -->
          <div class="legend flex items-center gap-2 text-xs text-gray-500">
            <span>Less</span>
            <div class="flex gap-1">
              <div class="w-3 h-3 rounded-sm" style="background-color: #ebedf0"></div>
              <div class="w-3 h-3 rounded-sm" style="background-color: #9be9a8"></div>
              <div class="w-3 h-3 rounded-sm" style="background-color: #40c463"></div>
              <div class="w-3 h-3 rounded-sm" style="background-color: #30a14e"></div>
              <div class="w-3 h-3 rounded-sm" style="background-color: #216e39"></div>
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
      <div v-else class="text-gray-500">Loading GitHub activity...</div>
    </div>
  </a>
</template>

<style scoped>
.font-mono {
  font-family: 'Fira Code', monospace;
}
.contribution-graph {
  overflow-x: auto;
}

.contribution-day {
  background-color: #ebedf0;
  transition: background-color 0.2s ease;
}

.contribution-container {
  overflow-x: auto;
}

.month-labels {
  padding-left: 1px;
}

@media (max-width: 720px) {
  .github-activity {
    display: none;
  }
}
</style>