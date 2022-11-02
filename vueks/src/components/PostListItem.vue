<template>
    <div class="post">
        <a @click="emit('click:read', post)">
            {{ post.title }}
            <button @click="emit('click:delete', post)">
                delete
            </button>
            <button @click="emit('click:edit', post)">
                edit
            </button>
        </a>
    </div>
</template>

<script setup lang="ts">
import type { PostItem } from '@/types/PostItem'
defineProps<{ post: PostItem }>();

const emit = defineEmits<{
    (e: 'click:delete', post: PostItem): void
    (e: 'click:edit', post: PostItem): void
    (e: 'click:read', post: PostItem): void
}>()

</script>

<style scoped>
    .post {
        cursor: pointer;
        background-color: rgba(239, 239, 239, 0.461);
        border-radius: 10px;
        margin: 5px;
        padding: 5px 10px;
    }
</style>