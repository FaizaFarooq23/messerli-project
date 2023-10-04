type Data = {
    date: String,
    duches: number,
}


export function generateSevenDaysData() {
    let today = new Date();
    let temp_data: Data[] = [];
    const max = 50;
    const min = 0;

    for (let i = 7; i >= 0; i--) {
        let dayAgo = new Date();
        dayAgo.setDate(today.getDate() - i);
        let consumption: number = 0

        let dateString = dayAgo.getDate().toString().padStart(2, "0") + "/" + (dayAgo.getMonth() + 1).toString().padStart(2, "0");

        if (dayAgo < today) {
            consumption = Math.floor(Math.random() * (max - min + 1) + min)
        } else {
            consumption = 3
        }

        temp_data.push({ date: dateString, duches: consumption });
    }

    return temp_data;
}


export function generateFifteenDaysData() {
    let today = new Date();
    let temp_data: Data[] = [];
    const max = 50;
    const min = 0;

    for (let i = 15; i >= 0; i--) {
        let dayAgo = new Date();
        dayAgo.setDate(today.getDate() - i);
        let consumption: number = 0

        let dateString = dayAgo.getDate().toString().padStart(2, "0") + "/" + (dayAgo.getMonth() + 1).toString().padStart(2, "0");

        if (dayAgo < today) {
            consumption = Math.floor(Math.random() * (max - min + 1) + min)
        } else {
            consumption = 3
        }

        temp_data.push({ date: dateString, duches: consumption });
    }

    return temp_data;
}


export function generate24HoursData() {
    const data: Data[] = [];
    const startTime = new Date();
    startTime.setHours(0, 0, 0, 0);

    for (let i = 0; i < 96; i++) {
        const currentDate = new Date(startTime.getTime() + i * 15 * 60 * 1000);
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const time = `${hours}:${minutes}`;
        const duches = Math.floor(Math.random() * 51); // Generates a random number between 0 and 50
        data.push({ date: time, duches });
    }

    return data;
}

export function generateDataBeforeCurrentTime() {
    const data: Data[] = [];
    const currentTime = new Date();
    const startTime = new Date();
    startTime.setHours(0, 0, 0, 0);

    for (let i = 0; i < 96; i++) {
        const currentDate = new Date(startTime.getTime() + i * 15 * 60 * 1000);
        let duches;
        if (currentDate > currentTime) {
            duches = 0;
        }
        else {
            duches = Math.floor(Math.random() * 51); // Generates a random number between 0 and 50
        }
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const time = `${hours}:${minutes}`;
        data.push({ date: time, duches });
    }

    return data;
}





