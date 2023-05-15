<script setup>
import NavBar from "@/Components/NavBar.vue";
import {useForm} from '@inertiajs/vue3';
import Pagination from "@/Components/Pagination.vue";
import TextInput from "@/Components/TextInput.vue";
import {router} from "@inertiajs/vue3";

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
                <TextInput type="text" v-model="form.search" @input="form.get(route('attendance.result'))" placeholder="Rechercher..."/>
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
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-3 text-left text-base font-semibold text-gray-900 sm:pl-6">Téléphone
                                </th>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-3 text-left text-base font-semibold text-gray-900 sm:pl-6">Adresse
                                </th>
                            </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                            <tr v-for="person in contacts" :key="person.id" class="hover:bg-gray-50">
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-base font-medium text-gray-900 sm:pl-6">
                                    {{ person.id }}
                                </td>
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-base font-medium text-gray-900 sm:pl-6">
                                    {{ person.name }}
                                </td>
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-base font-medium text-gray-900 sm:pl-6">
                                    {{ person.phone }}
                                </td>
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-base font-medium text-gray-900 sm:pl-6">
                                    {{ person.address }}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
