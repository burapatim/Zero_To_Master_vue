let vm = Vue.createApp({
    data(){
        return {
            isPurple: false,
            selectedColor: '',
            size : 150
        }
    },
    computed: {
        circle_classes(){
            return {purple: this.isPurple}
        },
        select_class(){
            return {}
        }
    }
}).mount('#app')