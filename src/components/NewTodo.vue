<template>
    <input class="text-2xl py-2 px-4 rounded-xl w-full mt-8
     text-gray-900 hover:bg-green-300 cursor-pointer " type="text"
      :placeholder="placeholder"
      v-model="newTodo" 
      @change="addTodo"/>
</template>



<script setup>
import {defineProps} from 'vue'
import {newTodo,addTodo} from '../helpers/useTodos'


defineProps({
    placeholder:{
        type: String,
        default: '👍New Todo👍'
    },

})
</script>