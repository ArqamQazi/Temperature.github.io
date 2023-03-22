const celciusel = document.getElementById('celsius');
const fahrenel = document.getElementById('fahrenheite');
const kelvinel = document.getElementById('kelvin');

function computetemp(event){
    const currentvalue = +event.target.value;

    switch (event.target.name) {
        case "celsius":
            fahrenel.value = (currentvalue * 1.8 + 32).toFixed(2);
            kelvinel.value = (currentvalue + 273.15).toFixed(2);
            break;
            case "fahrenheite":
            celciusel.value = ((currentvalue -32)/1.8).toFixed(2);
            kelvinel.value =((currentvalue - 32) * 1.8 + 273.15).toFixed(2);
            break;

            case "kelvin":
            celciusel.value= (currentvalue - 273.15).toFixed(2);
            fahrenel.value = ((currentvalue - 273.15) * 1.8 + 32).toFixed(2);
            break;
        default:
            break;
    }
}