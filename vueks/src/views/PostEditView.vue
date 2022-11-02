<template>
    <section>
        <p>Post is: {{ post.title }} {{ post.text }}</p>
        <input v-model="post.title" placeholder="enter title" />
        <input v-model="post.text" placeholder="enter text" />
        <button @click="editPost(id)">Edit</button>
    </section>
</template>

<script setup lang="ts">
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import type { Post } from '@/types/Post';

const props = defineProps<{ id: number }>();

const post = reactive<Post>({
    id: props.id,
    text: '',
    title: '',
});
const router = useRouter();

const getPost = async (id: number) => {
    const response = await axios.get(`https://localhost:7299/BlogPost/${id}`);
    console.log(response.data);
    post.title = response.data.title;
    post.text = response.data.text;
};
getPost(props.id);

const editPost = async (id: number) => {
    await axios.put(`https://localhost:7299/BlogPost/${id}`, { id: id, title: post.title, text: post.text });
    post.title = '';
    post.text = '';
    await router.push({ name: 'index' });
};
</script>