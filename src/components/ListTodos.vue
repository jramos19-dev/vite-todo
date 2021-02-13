<template>
        <section class="space-y-4"
         v-if="todos.length>0">
          <h2 class="text-2xl font-thin"
          :class="color==='green' ? 'text-green-900' : 'text-red-900'">
            {{title}}: {{todos.length}}</h2>
          <ul class="space-y-3">
          <li v-for="todo in todos" :key="todo.id" class="bg-white rounded-xl text-xl py-2 px-4 font-light
           hover:text-white
             cursor-pointer transition-colors"

            :class="color ==='green' ? ' text-green-800 hover:bg-green-800': 'text-red-800 hover:bg-red-800' "
            @click ="changestatus(todo.id)"
            >
            
            {{todo.text}}</li>
          </ul>
      </section>
</template>

<script setup>
import {defineProps} from 'vue'
import {changestatus} from '../helpers/useTodos'

defineProps({
    color: {
        type: String,
        default: 'green',
    },

    title:{
        type: String,
        default: 'Todo List'
    },
    todos: {
        type: Array,
        default: [],
    },
})


</script>
