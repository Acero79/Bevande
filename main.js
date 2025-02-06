let scelta_bevanda = prompt('Scegli la bevanda: \n 1 - Acqua \n 2 - Coca Cola \n 3 - Birra');

if (scelta_bevanda==1) {
    console.log('E´ stata selezionata l´acqua')
} else if (scelta_bevanda==2) {
    console.log('E´ stata scelta la Coca cola')
} else if (scelta_bevanda==3) {
    console.log('E´ stata scelta la Birra')
} else {
    prompt('Scegli la bevanda: \n 1 - Acqua \n 2 - Coca Cola \n 3 - Birra');
}