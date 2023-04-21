const {createApp}= Vue;
createApp ({

data (){

return {
  apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
  emails: [],
  isLoading: true


};  



},

methods: {
  
  getApi() {
    let requests = [];
    this.isLoading = true;

    for (let i = 0; i < 10; i++) {
      axios.get(this.apiUrl)
        .then(response => {
          // Aggiungo l'indirizzo email ottenuto dall'API all'array 'emails'
          this.emails.push(response.data.response);
          this.isLoading = false

        })
        .catch(error => {
          // In caso di errore, stampo un messaggio di errore nella console
          console.error('Errore nell acquisizione della email:', error);
        });
    }
  }
},

mounted() {
  this.getApi();
}
}).mount("#app");