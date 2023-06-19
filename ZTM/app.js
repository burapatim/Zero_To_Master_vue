const vm = Vue.createApp({
  data() {
    return {
      firstName: "Burapa",
      lastName: "Tim",
      age: 15,
      url: 'https://google.com',
      raw_url: '<a href="https://google.com" target="_blank">Google</a>'
    };
  },
  methods:{
   
    increment(){
      this.age++
    },
    decrement(){
      this.age--
    },
    updateLastName(event){
      this.lastName = event.target.value
    }
  },
  computed: {
    fullName(){
      console.log('full namce method');
      
      return `${this.firstName} ${this.lastName.toUpperCase()}`
    }, 
  },
  watch: {
    age(newValm , oldVal){
      setTimeout(()=>{
        this.age = 20
      },3000)
    }
  }
}).mount("#app");

// setTimeout(() => {
//   vm.$data.firstName = "Ta";
// }, 2000);

// Vue.createApp({
//   data() {
//     return {
//       firstName: "Niphaporn",
//       lastName: "Tim",
//     };
//   },
// }).mount("#app2");
