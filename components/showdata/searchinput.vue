<template>
    <div>
        <input placeholder="Search By Email" v-model="search" />
    </div>
</template>

<script>
import { userStore } from '~/store/user-store'

const store = userStore()

export default {
    name: "searchinput",
    data() {
        return {
            search: ""
        }
    },
    watch: {
        search(input) {
            const time = setTimeout(() => {
                store.searchUserByEmail({value: input})
            }, 500)
            return () => clearTimeout(time)
            // store.searchUser(input)
        }
    }
}
</script>

<style scoped>
input {
    width: 40vw;
    height: 36px;
    padding-left: 4px;
    font-size: 20px;
}
</style>