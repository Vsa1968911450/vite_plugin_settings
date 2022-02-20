<template>
    <div>
        1212
    </div>
</template>
<script lang="ts">
import axios from 'axios'
export default {
    data() {
        return {
            data:[]
        }
    },
    mounted() {
        this.getdata()
    },
    methods: {
        async getdata(){
            // 环境变量
            console.log(import.meta.env)
            const  res = await axios.get(<string>(import.meta.env.VITE_BASE_API)) // (import.meta.env.VITE_BASE_API) as string
            console.log(res)
        }
    },
}
</script>