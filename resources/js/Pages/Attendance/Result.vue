<script setup>
import NavBar from "@/Components/NavBar.vue";
import {useForm} from '@inertiajs/vue3';
import Pagination from "@/Components/Pagination.vue";
import TextInput from "@/Components/TextInput.vue";
import {router} from "@inertiajs/vue3";
import {MagnifyingGlassIcon} from "@heroicons/vue/24/solid";

const props = defineProps({
    contacts: Object,
    date: String,
    search: String,
    days: Number,
});

const form = useForm({
    date: props.date,
    search: props.search,
});
</script>


<template>
    <NavBar></NavBar>
    <div class="px-4 sm:px-6 lg:px-8 m-5">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-xl font-semibold leading-6 text-gray-900">Présence</h1>
            </div>
            <div class="flex flex-wrap gap-4 mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <form class="relative mt-1 flex items-center"
                      @submit.prevent="form.get(route('contacts.index'))">
                    <input v-model="form.search" type="text" name="search" id="search"
                           class="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                           placeholder="Rechercher..."/>
                    <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                        <button
                            class="inline-flex items-center rounded px-2 font-sans text-sm font-medium text-gray-400 transition-all hover:text-blue-100">
                            <MagnifyingGlassIcon class="w-5"/></button>
                    </div>
                </form>
                <TextInput type="date" v-model="form.date" @change="form.get(route('attendance.result'))"/>
            </div>
        </div>
        <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead class="bg-gray-50">
                            <tr>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-3 text-left text-base font-semibold text-gray-900 sm:pl-6">
                                    Identifiant
                                </th>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-3 text-left text-base font-semibold text-gray-900 sm:pl-6">Nom
                                </th>
                                <th scope="col" class="px-3 py-3.5 text-left text-base font-semibold text-gray-900">
                                    Présence
                                </th>
                                <th scope="col" class="px-3 py-3.5 text-left text-base font-semibold text-gray-900">
                                    Présences
                                </th>
                            </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                            <tr v-for="person in contacts.data" :key="person.id" class="hover:bg-gray-50">
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-base font-medium text-gray-900 sm:pl-6">
                                    {{ person.id }}
                                </td>
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-base font-medium text-gray-900 sm:pl-6">
                                    {{ person.name }}
                                </td>

                                <td v-if="person.attendances_count == days"
                                    class="whitespace-nowrap px-3 py-4 text-base"><span class="bg-green-600 text-white p-2 rounded-xl">Parfaite</span>
                                </td>
                                <td v-else-if="person.attendances_count > 0 && person.attendances_count < days"
                                    class="whitespace-nowrap px-3 py-4 text-base"><span class="bg-gray-600 text-white p-2 rounded-xl">Moyenne</span>
                                </td>
                                <td v-else class="whitespace-nowrap px-3 py-4 text-base text-red-500r"><span class="bg-red-600 text-white p-2 rounded-xl">Aucune</span></td>

                                <td class="relative  whitespace-nowrap py-4 pl-3 pr-4 text-right text-base font-medium sm:pr-6 flex">
                                    {{ person.attendances_count }}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <Pagination :objects="contacts"></Pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
