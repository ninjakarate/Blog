<template>
    <article>
        <h1>{{ post.title }}</h1>
        <section>{{ post.text }}</section>
    </article>
</template>

<script setup lang="ts">
import axios from 'axios';
import { reactive } from 'vue';
import type { Post } from '@/types/Post'

const props = defineProps<{ id: number }>();

const post = reactive<Post>({
    id: props.id,
    text: '',
    title: '',
});

const getPost = async (id: number) => {
    const response = await axios.get(`https://localhost:7299/BlogPost/${id}`);
    console.log(response.data);
    post.title = response.data.title;
    post.text = response.data.text;
};
getPost(props.id);
</script>