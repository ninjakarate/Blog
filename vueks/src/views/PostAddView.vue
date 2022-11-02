<template>
    <section>
        <p>Post is: {{ title }} {{ text }}</p>
        <input v-model="title" placeholder="enter title" />
        <input v-model="text" placeholder="enter text" />
        <button @click="addPost()">Add</button>
    </section>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const title = ref('');
const text = ref('');
const router = useRouter();

const addPost = async () => {
    await axios.post('https://localhost:7299/BlogPost/', { title: title.value, text: text.value });
    title.value = '';
    text.value = '';
    await router.push({ name: 'index' });
};
</script>