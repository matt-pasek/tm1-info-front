<template>
  <div
    class="flex flex-col p-3 rounded-xl bg-black/10 backdrop-blur shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
  >
    <h3 class="text-lg font-medium">{{ substitution.absentTeacher }}</h3>
    <div class="flex gap-3">
      <div
        class="flex flex-col items-center text-center gap-1"
        v-for="sub in substitution.substitutions"
        :key="sub.lessonNumber"
      >
        <div class="flex text-left gap-1 items-center">
          <p class="font-medium text-xl">{{ sub.lessonNumber }}</p>
          <p class="text-nowrap text-sm">{{ sub.newTeacher }}</p>
        </div>
        <div class="flex gap-1 items-end">
          <p>{{ sub.what }}</p>
          <p class="text-nowrap text-sm">{{ sub.classroom ? 'sala ' + sub.classroom : '' }}</p>
        </div>

        <p>{{ sub.className }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TeacherSubstitution } from '@/models/substitutions.model';

defineProps<{ substitution: TeacherSubstitution }>();
</script>
