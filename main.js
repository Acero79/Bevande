let scelta;
do {
    scelta = Number(prompt(`Seleziona la bevanda: 1 - acqua, 2 - coca cola, 3 - birra`));
    switch (scelta) {
        case 1:
            console.log(`è stata selezionata l'acqua`);
            break;

        case 2:
            console.log(`è stata selezionata la coca cola`);
            break;
        
        case 3:
            console.log(`è stata selezionata la birra`);
                
            break; 
        
            default:
            console.log(`la selezione non è valida, riprova`);
            
            break;
    }
    
} while (scelta < 1 || scelta > 3);