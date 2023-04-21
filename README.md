uso il ciclo for per ottenere 10 indirizzi email
Effettua una richiesta GET all'API con axios.get(this.apiUrl)
Aggiungo l'indirizzo email ottenuto dall'API all'array 'emails'
 In caso di errore, stampo un messaggio di errore nella console
 Chiamo il metodo 'getApi()' quando l'applicazione viene montata
in html creo un ul li con vor per stampare le email

per il bonus uso axios.all(requests) per eseguire un array di richieste Axios contemporaneamente. 
axios.all() aspetta che tutte le richieste siano completate prima di procedere.

uso la variabile isLoading per il cariacamento, quando e' vera viene mostrato la rotella di cariacamento quando e' false la lista completa