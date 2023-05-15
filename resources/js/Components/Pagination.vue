<script setup>
import {Link} from "@inertiajs/vue3";

const props = defineProps({
    objects: Object,
});
</script>
<template>
    <div>
        <div class="flex flex-wrap justify-between -mb-1">
            <span class="px-4 py-3">
                <template v-if="props.objects.total > 0">
                    <template v-if="props.objects.data.length > 0">
                        <span class="font-semibold">{{ props.objects.from }}</span> à <span
                        class="font-semibold">{{ props.objects.to }}</span> sur
                    </template>
                    <span class="font-semibold">{{ props.objects.total }}</span> résultats
                </template>
            </span>
            <div class="flex flex-wrap">
                <template v-for="(link, p) in props.objects.links" :key="p">
                    <div v-if="link.url === null"
                         class="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
                         v-html="link.label"/>
                    <Link v-else
                          class="mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded transition-all hover:bg-white hover:text-black focus:border-blue-100 focus:text-indigo-500"
                          :class="{ 'bg-blue-100 text-white': link.active }" :href="link.url"
                          v-html="link.label"></Link>
                </template>
            </div>
        </div>
    </div>
</template>
