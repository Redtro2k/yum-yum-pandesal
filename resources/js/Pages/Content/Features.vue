<template>
    <div class="bg-brown-50">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 class="text-base font-semibold text-brown-600 uppercase tracking-wide">Everything you need</h2>
          <p class="mt-2 text-3xl font-extrabold text-gray-900">Benefits of pandesal</p>
          <p class="mt-4 text-lg text-gray-500">Bread, Simple but essential for everone!</p>
        </div>
        <div class="mt-12 lg:mt-0 lg:col-span-2">
          <dl class="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            <div v-for="item in items" :key="item.name" class="relative">
              <dt>
                <CheckIcon class="absolute h-6 w-6 text-brown-500" aria-hidden="true" />
                <p class="ml-9 text-lg leading-6 font-medium text-gray-900">{{ item.name }}</p>
              </dt>
              <dd class="mt-2 ml-9 text-base text-gray-500">
                {{ item.description }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import { CheckIcon } from '@heroicons/vue/24/solid'
  const props = defineProps({
    items: Array
  })
  </script>

