<script setup>
import {PlusIcon} from "@heroicons/vue/20/solid";
import NavBar from "@/Components/NavBar.vue";
import {Link, useForm} from '@inertiajs/vue3';
import Pagination from "@/Components/Pagination.vue";
import {MagnifyingGlassIcon} from "@heroicons/vue/24/solid";
import ConfirmationModal from "@/Components/ConfirmationModal.vue";
import {ref} from "vue";

const props = defineProps({
    contacts: Object,
    search: String,
    page: Number,
});

let deleteConfirmation = ref(false);
let confirmationMessage = ref('');
let toDelete = ref(null);

const form = useForm({
    search: props.search,
    page: props.page,
});

const showDeleteConfirmation = (person) => {
    deleteConfirmation.value = true;
    confirmationMessage.value = 'Etes-vous sûr de vouloir supprimer "<b>' + person.name + '</b>" ?';
    toDelete.value = person.id;
}

const deleteContact = () => {
    form.post(route('contacts.destroy', toDelete.value), {
        preserveScroll: true,
        onSuccess: () => {
            deleteConfirmation.value = false;
        }
    });
}
</script>


<template>
    <NavBar></NavBar>
    <div class="px-4 sm:px-6 lg:px-8 m-5">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-xl font-semibold leading-6 text-gray-900">Contacts</h1>
            </div>
            <div class="flex flex-wrap gap-4 mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
<!--                <TextInput type="text" v-model="form.search" @keyup.enter="form.get(route('contacts.index'))" placeholder="Rechercher..."/>-->
                <form class="relative mt-1 flex items-center"
                      @submit.prevent="form.get(route('contacts.index'))">
                    <input v-model="form.search" type="text" name="search" id="search" autofocus
                           class="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                           placeholder="Rechercher..."/>
                    <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                        <button
                            class="inline-flex items-center rounded px-2 font-sans text-sm font-medium text-gray-400 transition-all hover:text-blue-100">
                            <MagnifyingGlassIcon class="w-5"/></button>
                    </div>
                </form>
                <Link :href="route('contacts.create')" class="flex block rounded-md bg-primary px-3 py-2 text-center text-base font-semibold text-white shadow-sm hover:bg-primary/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><PlusIcon class="w-6"/>Ajouter un contact</Link>
            </div>
        </div>
        <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-base font-semibold text-gray-900 sm:pl-6">Identifiant</th>
                                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-base font-semibold text-gray-900 sm:pl-6">Nom</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-base font-semibold text-gray-900">Téléphone</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-base font-semibold text-gray-900">Email</th>
                                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                    <span class="sr-only">Actions</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                            <tr v-for="person in contacts.data" :key="person.id" class="hover:bg-gray-50">
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-base font-medium text-gray-900 sm:pl-6">{{ person.id }}</td>
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-base font-medium text-gray-900 sm:pl-6">{{ person.name }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-base text-gray-500">{{ person.phone }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-base text-gray-500">{{ person.email }}</td>
                                <td class="relative  whitespace-nowrap py-4 pl-3 pr-4 text-right text-base font-medium sm:pr-6">
                                    <Link :href="route('contacts.edit', person.id)" class="text-primary hover:text-primary/75"
                                    >Modifier<span class="sr-only">, {{ person.name }}</span></Link
                                    >
                                    <button @click="showDeleteConfirmation(person)" class="ml-2 text-red-500 hover:text-red-600"
                                    >Supprimer<span class="sr-only">, {{ person.name }}</span></button
                                    >
                                </td>
                            </tr>
                            <ConfirmationModal :open="deleteConfirmation" title="Confirmation de suppression" :message="confirmationMessage" @confirm="deleteContact()" @cancel="deleteConfirmation = false" :disabled="form.processing"/>
                            </tbody>
                        </table>

                        <Pagination :objects="contacts"></Pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
