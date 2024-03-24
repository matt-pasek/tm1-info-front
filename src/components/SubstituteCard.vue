<template>
  <div
    ref="card"
    class="flex flex-col text-neutral-700 bg-white font-medium rounded-xl items-center justify-center"
    :class="sub.classroom === '' ? 'bg-red-300' : 'bg-white'"
  >
    <span>{{ newSubject }} {{ sub.newTeacher ? `- ${sub.newTeacher}` : '' }}</span>
    <span class="text-sm">{{ sub.className }}</span>
    <span> {{ sub.classroom ? `Sala ${sub.classroom}` : '' }}</span>
  </div>
</template>

<script setup lang="ts">
import type { Substitution } from '@/models/substitutions.model';
import { nextTick, onMounted, ref } from 'vue';

const card = ref<HTMLDivElement | null>(null);
const newSubject = ref<string>('');

const props = defineProps<{
  sub: Substitution;
  column: number;
}>();

onMounted(async () => {
  newSubject.value =
    props.sub.what.length > 15 ? props.sub.what.slice(0, 10) + '...' : props.sub.what;
  await nextTick(() => {
    card.value!.style.gridColumnStart = String(props.column);
    card.value!.style.gridRowStart = String(parseInt(props.sub.lessonNumber) + 1);
  });
});
</script>
