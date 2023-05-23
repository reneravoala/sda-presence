<script setup>
import NavBar from "@/Components/NavBar.vue";
import {useForm} from '@inertiajs/vue3';
import InputError from "@/Components/InputError.vue";
import {Link} from "@inertiajs/vue3";

const props = defineProps({
    type: {
        type: String,
        default: 'create',
    },
    contact: {
        type: Object,
        default: {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            address: '',
        }
    },
});

const form = useForm({
    first_name: props.contact.first_name,
    last_name: props.contact.last_name,
    email: props.contact.email,
    phone: props.contact.phone,
    address: props.contact.address,
});

const submit = () => {
    if (props.type === 'create') {
        form.post(route('contacts.store'));
    } else if (props.type === 'update') {
        form.post(route('contacts.update', props.contact.id));
    }
};
</script>

<template>
    <NavBar></NavBar>
    <form class="flex flex-col items-center mb-5" @submit.prevent="submit()">
        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
                <div class="my-5" v-if="props.type === 'update'">
                    <h3 v-if="props.type === 'update'" class="block text-2xl font-medium leading-6 text-gray-900">Identifiant : {{ props.contact.id }}</h3>
                </div>
                <h2 class="text-base font-semibold leading-7 text-gray-900">Information personnelle</h2>
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                    <div class="sm:col-span-3">
                        <label for="last-name" class="block text-base font-medium leading-6 text-gray-900">Nom</label>
                        <div class="mt-2">
                            <input type="text" v-model="form.last_name" id="last-name" autocomplete="family-name" autofocus
                                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"/>
                        </div>
                        <InputError :message="form.errors.last_name"/>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="first-name"
                               class="block text-base font-medium leading-6 text-gray-900">Prénom</label>
                        <div class="mt-2">
                            <input type="text" v-model="form.first_name" id="first-name" autocomplete="given-name"
                                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"/>
                        </div>
                    </div>

                    <div class="sm:col-span-4">
                        <label for="phone" class="block text-base font-medium leading-6 text-gray-900">Numéro téléphone</label>
                        <div class="mt-2">
                            <input id="phone" v-model="form.phone" type="text" autocomplete="phone"
                                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"/>
                        </div>
                        <InputError :message="form.errors.phone"></InputError>
                    </div>

                    <div class="col-span-full">
                        <label for="street-address"
                               class="block text-base font-medium leading-6 text-gray-900">Adresse</label>
                        <div class="mt-2">
                            <input type="text" v-model="form.address" id="street-address" autocomplete="street-address"
                                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"/>
                        </div>
                        <InputError :message="form.errors.address"></InputError>
                    </div>

                    <div class="sm:col-span-4">
                        <label for="email" class="block text-base font-medium leading-6 text-gray-900">Adresse
                            email</label>
                        <div class="mt-2">
                            <input id="email" v-model="form.email" type="email" autocomplete="email"
                                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"/>
                        </div>
                        <InputError :message="form.errors.email"></InputError>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
            <Link :href="route('contacts.index')" class="text-base font-semibold leading-6 text-gray-900">Annulez</Link>
            <button type="submit"
                    class="rounded-md bg-primary px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-primary/95 disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    :disabled="form.processing">
                Enregistrer
            </button>
            <span v-if="type === 'create'">(et marquer comme présent)</span>
        </div>
    </form>
</template>
