<template>
  <main
    class="w-full min-h-screen flex flex-col items-center justify-center p-10 bg-[url('@/assets/cherryBg.webp')]"
  >
    <h1 class="font-semibold text-4xl">Zastępstwa</h1>
    <h2 class="text-xl">w dniu {{ substitutions.date }}</h2>
    <div class="mt-5 flex gap-10 flex-wrap justify-center">
      <SubstituteCard
        v-for="substitution in substitutions.substitutions"
        :key="substitution.absentTeacher"
        :substitution="substitution"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { AllSubstitutions } from '@/models/substitutions.model';
import SubstituteCard from '@/components/SubstituteCard.vue';

const substitutions = ref<AllSubstitutions>({} as AllSubstitutions);
onMounted(async () => {
  substitutions.value = await fetch('http://localhost:3000/api/substitutes')
    .then(async (response) => await response.json())
    .then((data) => data.substitutions as AllSubstitutions);
});
</script>
