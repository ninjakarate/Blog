<template>
    <section class="post-list">
        <PostListItem v-for="post in posts" 
            :key="post.id"
            :post="post"
           @click:delete="deletePost(post)"
           @click:edit="editPost(post)"
        />
    </section>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from '@vue/reactivity';
import PostListItem from './PostListItem.vue';
import type { PostItem } from '@/types/PostItem';
import { useRouter } from 'vue-router';

const posts = ref<PostItem[]>([]);
const router = useRouter();

const getGetAllPosts = async () => {
    const response = await axios.get('https://localhost:7299/BlogPost/');
    posts.value = response.data;
};
getGetAllPosts();

const deletePost = async (post: PostItem) => {
    const { id } = post;
    await axios.delete(`https://localhost:7299/BlogPost/${id}`);
    await getGetAllPosts();
};

const editPost = async (post: PostItem) => {
    router.push({ name: 'edit-post', params: { id: post.id } });
};

</script>

<style scoped>
    .post-list {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>