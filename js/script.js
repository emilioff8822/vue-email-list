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
    let mailCount = 0;

    for (let i = 0; i < 10; i++) {
      axios.get(this.apiUrl)
        .then(result => {
          // Aggiungo l'indirizzo email ottenuto dall'API all'array 'emails'
          this.emails.push(result.data.response);
          mailCount++;

          if (mailCount ===10){
          
          this.isLoading = false

          }

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