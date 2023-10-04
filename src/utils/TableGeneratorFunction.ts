type Data = {
    prise: string,
    travail: string,
    localisation: string,
    etage: string,
    zone: string,
    shutdown: string,
}


const generateFirstColumn = () => {
    const list = ['Intervention réalisée', 'Demande d’intervention']
    let temp_prise = Math.floor(Math.random() * 2);
    return list[temp_prise];
}

const generateTravail = () => {
    const list = ['Nettoyage', 'Action bouton', 'Seuil atteint']
    let temp_prise = Math.floor(Math.random() * 3);
    return list[temp_prise];
}

function getRandomFormattedDate() {
    const startYear = 2000; // Change this to your desired start year
    const endYear = 2023; // Change this to your desired end year

    const randomYear = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
    const randomMonth = Math.floor(Math.random() * 12) + 1; // 1-12 for months
    const randomDay = Math.floor(Math.random() * 31) + 1; // 1-31 for days (not handling varying days per month)
    const randomHours = Math.floor(Math.random() * 24); // 0-23 for hours
    const randomMinutes = Math.floor(Math.random() * 60); // 0-59 for minutes
    const randomSeconds = Math.floor(Math.random() * 60); // 0-59 for seconds

    // Define month names
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    // Format the date
    const formattedDate = `${randomHours.toString().padStart(2, '0')}:${randomMinutes.toString().padStart(2, '0')}:${randomSeconds.toString().padStart(2, '0')} - ${randomDay} ${monthNames[randomMonth - 1]}. ${randomYear}`;

    return formattedDate;
}

export const TableGeneratorFunction = () => {
    let temp_data: Data[] = [];
    const zones = ["Holmes Place - Genève"];
    //const localisation = ["Paris 12ème", "Lyon Confluence", "Nantes"];
    const localisation = ["Vestiaires - Homme", "Vestiaires - Femme"];

    for (let index = 0; index < 15; index++) {
        temp_data.push({
            prise: generateFirstColumn(),
            travail: generateTravail(),
            localisation: localisation[Math.floor(Math.random() * localisation.length)],
            etage: getRandomFormattedDate(),
            zone: zones[Math.floor(Math.random() * zones.length)],
            shutdown: "L M M J V - De 20h à " + Math.floor(Math.random() * 9) + "h",
        });
    }

    return temp_data;
}