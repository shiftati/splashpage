document.addEventListener('DOMContentLoaded', () => {

    // Klippy Interaction
    const klippyContainer = document.getElementById('klippy-container');
    const speechBubble = klippyContainer.querySelector('.speech-bubble');
    const klippyCharacter = klippyContainer.querySelector('.klippy-character');

    const funnyMessages = [
        "Ciao! Sono Klippy! 📎",
        "Ci vediamo il 29 Ottobre al Codemotion Milano! 🎤",
        "Hai visto le slide del talk 'Provocazioni Artificiali'? Clicca in basso per scoprirle!",
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

    function getRandomKlippyMessage() {
        const currentText = speechBubble.classList.contains('hidden') ? '' : speechBubble.innerHTML;
        const available = funnyMessages.filter(msg => msg !== currentText);
        const pool = available.length > 0 ? available : funnyMessages;
        return pool[Math.floor(Math.random() * pool.length)];
    }

    function showKlippyMessage(message) {
        speechBubble.innerHTML = message;
        speechBubble.classList.remove('hidden');
        klippyCharacter.style.transform = 'scale(1.2) rotate(-12deg)';
        setTimeout(() => {
            klippyCharacter.style.transform = 'scale(1) rotate(0deg)';
        }, 350);
    }

    // Change speech bubble on every click on Klippy
    klippyContainer.addEventListener('click', (event) => {
        event.stopPropagation();
        const newMsg = getRandomKlippyMessage();
        showKlippyMessage(newMsg);
    });

    // Close speech bubble when clicking anywhere outside
    document.addEventListener('click', (event) => {
        if (!klippyContainer.contains(event.target) &&
            !danielAvatar?.contains(event.target) &&
            !steAvatar?.contains(event.target)) {
            speechBubble.classList.add('hidden');
        }
    });

    // Close on Escape key press
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
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

    // Host Avatars Interaction with Klippy
    const danielAvatar = document.querySelector('.host-card.host-daniel .host-avatar-wrapper');
    const steAvatar = document.querySelector('.host-card.host-ste .host-avatar-wrapper');

    const danielQuotes = [
        "Daniel: 'Visita danielzotti.it e scopri tutti gli Easter Egg! 💻",
        "Daniel è il creativo del duo! 🚀 Scopri i suoi progetti su danielzotti.it!",
        "Hai cliccato su Daniel! Daniel è confuso da questo click."
    ];

    const steQuotes = [
        "Ste: 'Ti ho già letto nel pensiero... stavi per andare su stefanobruno.it!' 🧠",
        "Stefano è il mago della comunicazione e del mindset! ✨ Dai un'occhiata a stefanobruno.it!",
        "Attento: Stefano ha appena analizzato il tuo linguaggio corporeo attraverso il monitor! 👀"
    ];

    if (danielAvatar) {
        danielAvatar.style.cursor = 'pointer';
        danielAvatar.setAttribute('title', 'Clicca per sentire cosa dice Klippy su Daniel!');
        danielAvatar.addEventListener('click', (event) => {
            event.stopPropagation();
            const quote = danielQuotes[Math.floor(Math.random() * danielQuotes.length)];
            showKlippyMessage(quote);
        });
    }

    if (steAvatar) {
        steAvatar.style.cursor = 'pointer';
        steAvatar.setAttribute('title', 'Clicca per sentire cosa dice Klippy su Ste!');
        steAvatar.addEventListener('click', (event) => {
            event.stopPropagation();
            const quote = steQuotes[Math.floor(Math.random() * steQuotes.length)];
            showKlippyMessage(quote);
        });
    }

    console.log("Shiftati di Testa website loaded! 🚀 Se stai leggendo questo, sei un informatico 😏");

});
