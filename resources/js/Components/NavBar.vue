<template>
    <header class="bg-white">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <Link :href="route('welcome')" class="-m-1.5 p-1.5">
                    <span class="sr-only">Contacts</span>
                    <Logo class="h-24"/>
                </Link>
            </div>
            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <PopoverGroup class="hidden lg:flex lg:gap-x-12">
                <Popover class="relative">
                    <PopoverButton class="flex items-center gap-x-1 text-base font-semibold leading-6 text-gray-900">
                        Contacts
                        <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    </PopoverButton>

                    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                        <PopoverPanel class="absolute -left-16 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                            <div class="p-4">
                                <div v-for="item in contacts" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-base leading-6 hover:bg-gray-50">
                                    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-primary" aria-hidden="true" />
                                    </div>
                                    <div class="flex-auto">
                                        <Link :href="item.href" class="block font-semibold text-gray-900">
                                            {{ item.name }}
                                            <span class="absolute inset-0" />
                                        </Link>
                                        <p class="mt-1 text-gray-600">{{ item.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </PopoverPanel>
                    </transition>
                </Popover>

                <Link :href="route('attendance.index')" class="text-base font-semibold leading-6 text-gray-900">Présence</Link>
                <Link :href="route('attendance.result')" class="text-base font-semibold leading-6 text-gray-900">Résultats</Link>

                <Popover class="relative">
                    <PopoverButton class="flex items-center gap-x-1 text-base font-semibold leading-6 text-gray-900">
                        Aujourd'hui
                        <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    </PopoverButton>

                    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                        <PopoverPanel class="absolute right-0 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                            <div class="p-4">
                                <div v-for="item in today" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-base leading-6 hover:bg-gray-50">
                                    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-primary" aria-hidden="true" />
                                    </div>
                                    <div class="flex-auto">
                                        <Link :href="item.href" class="block font-semibold text-gray-900">
                                            {{ item.name }}
                                            <span class="absolute inset-0" />
                                        </Link>
                                        <p class="mt-1 text-gray-600">{{ item.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </PopoverPanel>
                    </transition>
                </Popover>
            </PopoverGroup>
        </nav>
        <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-10" />
            <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <Link href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <Logo class="h-24"/>
                    </Link>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                                <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                                    Contacts
                                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                                </DisclosureButton>
                                <DisclosurePanel class="mt-2 space-y-2">
                                    <Link v-for="item in [...contacts]" :key="item.name" as="a" :href="item.href" class="block rounded-lg py-2 pl-6 pr-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</Link>
                                </DisclosurePanel>
                            </Disclosure>
                            <Link :href="route('attendance.index')" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Présence</Link>
                            <Link :href="route('attendance.result')" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Résultats</Link>

                            <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                                <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                                    Contacts
                                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                                </DisclosureButton>
                                <DisclosurePanel class="mt-2 space-y-2">
                                    <Link v-for="item in [...today]" :key="item.name" as="a" :href="item.href" class="block rounded-lg py-2 pl-6 pr-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</Link>
                                </DisclosurePanel>
                            </Disclosure>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import {Link} from '@inertiajs/vue3';
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/vue'
import {
    Bars3Icon,
    XMarkIcon,
    PlusIcon,
    CheckIcon,
    UserPlusIcon,
    ClipboardDocumentListIcon,
} from '@heroicons/vue/24/outline'
import {ChevronDownIcon, ClipboardDocumentIcon} from '@heroicons/vue/20/solid';
import Logo from "@/Components/Logo.vue";

const contacts = [
    { name: 'Ajouter', description: 'Ajouter un nouveau contact', href: route('contacts.create'), icon: PlusIcon },
    { name: 'Gestion', description: 'Gérer les contacts', href: route('contacts.index'), icon: ClipboardDocumentIcon },
    { name: 'Tous les contacts', description: 'Liste de tous les contacts', href: route('contacts.all'), icon: ClipboardDocumentListIcon },
]
const today = [
    { name: 'Présents', description: 'Liste des contacts présents aujourd\'hui', href: route('attendance.present-today'), icon: CheckIcon },
    { name: 'Nouveaux', description: 'Liste des nouveaux contacts ajourd\'hui', href: route('attendance.news-today'), icon: UserPlusIcon },
]

let mobileMenuOpen = ref(false)
</script>
