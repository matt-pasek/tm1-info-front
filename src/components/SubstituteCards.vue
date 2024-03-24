<template>
  <div
    ref="teacherInfo"
    class="flex flex-col gap-1 text-white bg-slate-500 text-lg font-medium p-2 rounded-xl row-start-1 items-center justify-center text-center"
  >
    {{ sub.absentTeacher }}
  </div>
  <SubstituteCard
    v-for="subInfo in sub.substitutions"
    :key="subInfo.lessonNumber"
    :sub="subInfo"
    :column="index + 2"
  />
</template>

<script setup lang="ts">
import type { TeacherSubstitution } from '@/models/substitutions.model';
import SubstituteCard from '@/components/SubstituteCard.vue';
import { nextTick, onMounted, ref } from 'vue';

const teacherInfo = ref<HTMLDivElement | null>(null);

const props = defineProps<{
  sub: TeacherSubstitution;
  index: number;
}>();

onMounted(async () => {
  await nextTick(() => {
    teacherInfo.value!.style.gridColumnStart = String(props.index + 2);
  });
});
</script>
