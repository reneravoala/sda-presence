<script setup>
import {Head, Link} from '@inertiajs/vue3';
import {
    CheckBadgeIcon,
    ClipboardDocumentIcon,
    PlusIcon,
    ChartBarIcon,
} from '@heroicons/vue/24/outline'
import Logo from "@/Components/Logo.vue";

const actions = [
    {
        title: 'Présence',
        href: route('attendance.index'),
        icon: CheckBadgeIcon,
        iconForeground: 'text-white',
        iconBackground: 'bg-primary',
    },
    {
        title: 'Liste',
        href: route('contacts.index'),
        icon: ClipboardDocumentIcon,
        iconForeground: 'text-white',
        iconBackground: 'bg-primary',
    },
    {
        title: 'Ajouter',
        href: route('contacts.create'),
        icon: PlusIcon,
        iconForeground: 'text-white',
        iconBackground: 'bg-primary',
    },
    {
        title: 'Résultat',
        href: route('attendance.result'),
        icon: ChartBarIcon,
        iconForeground: 'text-white',
        iconBackground: 'bg-primary',
    },
]
</script>

<template>
    <Head title="Welcome"/>
    <div class="flex flex-col bg-gray-100 w-full h-full p-12">
        <Logo class="h-28 mx-auto my-12"/>
        <div
            class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 my-auto">
            <div v-for="(action, actionIdx) in actions" :key="action.title"
                 :class="[actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', actionIdx === 1 ? 'sm:rounded-tr-lg' : '', actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '', actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500']">
                <div>
                    <span
                        :class="[action.iconBackground, action.iconForeground, 'inline-flex rounded-lg p-3 ring-4 ring-white']">
                      <component :is="action.icon" class="h-12 w-12" aria-hidden="true"/>
                    </span>
                </div>
                <div class="mt-8">
                    <h3 class="text-2xl font-semibold leading-6 text-gray-900">
                        <Link :href="action.href" class="focus:outline-none">
                            <!-- Extend touch target to entire panel -->
                            <span class="absolute inset-0" aria-hidden="true"/>
                            {{ action.title }}
                        </Link>
                    </h3>
                </div>
                <span class="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-primary"
                      aria-hidden="true">
                    <svg class="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                      <path
                          d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"/>
                    </svg>
                  </span>
            </div>
        </div>
    </div>
</template>
