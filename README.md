uso il ciclo for per ottenere 10 indirizzi email
Effettua una richiesta GET all'API con axios.get(this.apiUrl)
Aggiungo l'indirizzo email ottenuto dall'API all'array 'emails'
 In caso di errore, stampo un messaggio di errore nella console
 Chiamo il metodo 'getApi()' quando l'applicazione viene montata
in html creo un ul li con vor per stampare le email

BONUS 

per il bonus un ciclo for ed una variabile che conta le mail, mailcount
ogni volta che un indirizzo mail casuale dell'api e' aggiunto all'array email mailcount viene incrementata di 1 

quando tutte le mail sono state ricevute e mailcount===10 , isLoading diventa false in modo da nascondere il caricamento e' mostrare la lista.


uso la variabile isLoading per il cariacamento, quando e' vera viene mostrato la rotella di cariacamento quando e' false la lista completa, utilizzando v-if e v-else in html