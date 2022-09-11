const currentHour = new Date().toLocaleString('en-US', { hour: 'numeric', hour12: false });

function getTimesOfDay() {
    if (currentHour >= 6 && currentHour < 12) {
        return 'morning';
    } else if (currentHour >= 12 && currentHour < 18) {
        return 'day';
    } else if (currentHour >= 18 && currentHour < 24) {
        return 'evening';
    } else {
        return 'night';
    }
}

export const tags = getTimesOfDay();