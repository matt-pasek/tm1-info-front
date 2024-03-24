<template>
  <main
    class="w-full min-h-screen flex flex-col items-center justify-center p-10 bg-[#1f1f1f] text-white"
  >
    <h1 class="font-semibold text-4xl">Zastępstwa</h1>
    <h2 class="text-xl">w dniu {{ substitutions.date }}</h2>

    <div ref="dynamicGrid" class="mt-5 grid grid-rows-10 gap-2 h-[80vh]">
      <div class="col-start-1 row-start-2">1. 8:00-8:45</div>
      <div class="col-start-1 row-start-3">2. 8:50-9:35</div>
      <div class="col-start-1 row-start-4">3. 9:40-10:25</div>
      <div class="col-start-1 row-start-5">4. 10:30-11:15</div>
      <div class="col-start-1 row-start-6">5. 11:35-12:20</div>
      <div class="col-start-1 row-start-7">6. 12:40-13:25</div>
      <div class="col-start-1 row-start-8">7. 13:30-14:15</div>
      <div class="col-start-1 row-start-9">8. 14:20-15:05</div>
      <div class="col-start-1 row-start-10">9. 15:10-15:55</div>
      <SubstituteCards
        v-for="(substitution, index) in substitutions.substitutions"
        :key="substitution.absentTeacher"
        :sub="substitution"
        :index="index"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import type { AllSubstitutions } from '@/models/substitutions.model';
import SubstituteCards from '@/components/SubstituteCards.vue';

const substitutions = ref<AllSubstitutions>({} as AllSubstitutions);
const dynamicGrid = ref<HTMLDivElement | null>(null);

onMounted(async () => {
  substitutions.value = await fetch('http://localhost:3000/api/substitutes')
    .then(async (response) => await response.json())
    .then((data) => data.substitutions as AllSubstitutions);
  await nextTick(() => {
    dynamicGrid.value!.style.gridTemplateColumns = `repeat(${substitutions.value.substitutions.length + 1}, minmax(0, 1fr))`;
  });
});
</script>
