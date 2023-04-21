const {createApp}= Vue;
createApp ({

data (){

return {
  apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
  emails: []


};  



},

methods: {
  
  getApi() {
    // ciclo for per ottenere 10 indirizzi email
    for (let i = 0; i < 10; i++) {
      // Effettua una richiesta GET all'API
      axios.get(this.apiUrl)
        .then(response => {
          // Aggiungo l'indirizzo email ottenuto dall'API all'array 'emails'
          this.emails.push(response.data.response);
        })
        .catch(error => {
          // In caso di errore, stampo un messaggio di errore nella console
          console.error('Errore nell acquisizione della email:', error);
        });
    }
  }
},

mounted() {
  // Chiamo il metodo 'getApi()' quando l'applicazione viene montata
  this.getApi();
}
}).mount("#app");