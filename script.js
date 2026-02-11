document.addEventListener('DOMContentLoaded', () => {

    // Klippy Interaction
    const klippyContainer = document.getElementById('klippy-container');
    const speechBubble = klippyContainer.querySelector('.speech-bubble');
    const klippyCharacter = klippyContainer.querySelector('.klippy-character');

    const funnyMessages = [
        "Ciao! Sono Klippy! 📎",
        "Hai ascoltato l'ultima puntata?",
        "Daniel e Stefano sono matti... in senso buono!",
        "Non dimenticare di seguirci sui social!",
        "La psicologia è affascinante, vero?",
        "Attento al Social Engineering... 👀",
        "Ti serve aiuto? Sto scherzando, non so fare nulla!",
        "Sembri una persona che ne sa!",
        "Wow! Che bel cursore che hai!",
        "Shiftati di Testa... che nome geniale!",
        "Shiftati di Testa: &copy; 2000 (e qualcosa). Tutti i diritti riservati, ma non sappiamo a chi.",
        "Sto osservando il tuo mouse... in modo etico però 👀",
        "Hai già fatto il deploy della tua autostima oggi?",
        "Questo sito è 100% bug free* (*forse)",
        "Respira. Anche i server lo fanno.",
        "Se stai leggendo, sei già dentro il funnel 😏",
        "Non cliccare qui. Ah no, puoi cliccare.",
        "Ho analizzato il tuo vibe: 10/10.",
        "Trust the process. Ma verifica il codice.",
        "Attenzione: livello di carisma in aumento.",
        "Questo messaggio è sponsorizzato dal dubbio.",
        "Parliamo di AI… ma con sentimento.",
        "Ti fidi di me? Male. Fai bene.",
        "Il refactor della vita quando?",
        "Debugga le tue convinzioni.",
        "Warning: pensiero critico attivato.",
        "Il tuo mindset ha bisogno di un update.",
        "Sto facendo caching della tua simpatia.",
        "404: motivazione not found.",
        "Scrivi test. Anche per le relazioni.",
        "La fiducia è open source?",
        "Attento, potrei diventare autocosciente.",
        "Parliamo di leadership… ma senza cravatta.",
        "Questo è un easter egg emotivo.",
        "Deploya gentilezza in produzione.",
        "Non è un bug, è crescita personale.",
        "Paranoia o cyber security?",
        "Stai scrollando o stai evolvendo?",
        "AI is watching… ma con affetto.",
        "Ti sei autenticato con il cuore?",
        "Il tuo cervello ha una UI fantastica.",
        "Modalità filosofo tech attivata.",
        "Password della vita: cambia spesso.",
        "Shiftati dentro, ma con criterio.",
        "Questo sito migliora con il sorriso.",
        "Sei pronto per un upgrade mentale?",
        "Pingami se hai dubbi esistenziali.",
        "Ho loggato la tua brillantezza.",
        "Attenzione: contenuto ad alto tasso di pensiero.",
        "Non tutto è binario. Tranne i computer.",
        "La tua curiosità ha superato il firewall.",
        "Stiamo ottimizzando la tua fiducia.",
        "Il sarcasmo è in beta.",
        "Questo è UX emotiva.",
        "Grazie per essere shiftato con noi.",
        "Ti fidi subito o hai bisogno di prove?",
        "La prima impressione dura 7 secondi… i tuoi sono già passati 😌",
        "Non è magia, è attenzione ai dettagli.",
        "Ti sto leggendo… tranquillo, solo un pochino.",
        "La fiducia si costruisce o si percepisce?",
        "Le parole creano mondi. Attento a come le usi.",
        "Se annuisci, hai già detto sì.",
        "Hai notato come cambia il tono della tua voce?",
        "Empatia attivata. Livello: sottile ma potente.",
        "Non è manipolazione… è influenza consapevole.",
        "Ti sei mai chiesto perché hai cliccato proprio qui?",
        "La curiosità è la porta d’ingresso della persuasione.",
        "Le storie convincono più dei dati.",
        "Il silenzio comunica più di mille parole.",
        "Stai reagendo o stai scegliendo?",
        "Il linguaggio del corpo non mente quasi mai.",
        "Le persone comprano emozioni, non prodotti.",
        "Ti senti ascoltato in questo momento?",
        "La sicurezza è contagiosa.",
        "Chi fa domande guida la conversazione.",
        "Non tutto ciò che pensi… è tuo.",
        "Ti sto facendo riflettere, vero?",
        "Le micro-espressioni raccontano segreti.",
        "Ogni relazione è una negoziazione invisibile.",
        "Il carisma è allenabile.",
        "Ti ho appena fatto immaginare qualcosa, vero?",
        "La mente ama le scorciatoie.",
        "Attenzione: bias cognitivo in arrivo.",
        "Le decisioni sono emotive. La logica arriva dopo.",
        "Come ti fa sentire questa frase?",
        "Le persone ricordano come le fai sentire.",
        "Il dubbio è un potente strumento.",
        "La fiducia nasce dalla coerenza.",
        "Stai ascoltando per capire o per rispondere?",
        "Ogni gesto manda un messaggio.",
        "La persuasione inizia dall’ascolto.",
        "Hai notato che stai sorridendo?",
        "Le parole giuste al momento giusto cambiano tutto.",
        "Il cervello odia l’incertezza.",
        "La connessione è più forte dell’argomentazione.",
        "Ti sto guidando o ti sto ispirando?",
        "La percezione è realtà… finché non la metti in discussione.",
        "Il contesto cambia il significato.",
        "Ti senti parte di qualcosa adesso?",
        "La fiducia è un’esperienza, non un contratto.",
        "Le emozioni sono scorciatoie decisionali.",
        "Se ti dico ‘non pensare a…’, ci stai già pensando.",
        "Le persone seguono chi le capisce.",
        "Ogni conversazione è un palco.",
        "Benvenuto nel dietro le quinte della tua mente."
    ];

    let messageIndex = 0;

    // Toggle bubble on click
    klippyContainer.addEventListener('click', () => {

        // Use logic to check if hidden or change text
        const isHidden = speechBubble.classList.contains('hidden');

        if (isHidden) {
            // Show new random message
            const randomMsg = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
            speechBubble.innerHTML = randomMsg;
            speechBubble.classList.remove('hidden');
        } else {
            // Hide it
            speechBubble.classList.add('hidden');
        }
    });

    // Subtly wobble Klippy every now and then
    setInterval(() => {
        klippyCharacter.style.transform = 'scale(1.1) rotate(10deg)';
        setTimeout(() => {
            klippyCharacter.style.transform = 'scale(1) rotate(0deg)';
        }, 200);
    }, 5_000);

    console.log("Shiftati di Testa website loaded! 🚀 Se stai leggendo questo, sei un informatico 😏");

});
