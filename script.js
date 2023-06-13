const { createApp } = Vue

createApp({
  data() {
    return {
      emailContainer:[],
    }
  },

  created(){
    for(let i = 0;i < 10;i++)
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (response) => {
           this.emailContainer.push(response.data.response)
        });
  },

  methods: {

  },

}).mount('#app');