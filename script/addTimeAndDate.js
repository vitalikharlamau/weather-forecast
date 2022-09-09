import {clock, todayDate, nextDaysDate} from './elements.js';

export function addTimeAndDate() {
    let now = new Date();

    const options = {
        year: 'numeric',
        month: 'short',
        weekday: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    };

    const clockStr = now.toLocaleString('en-US', options);

    const [weekday, month, day, year, time] = clockStr.replace(/, /g, ' ').split(' ');

    clock.textContent = `${day} ${month} ${year}, ${time}`;

    todayDate.textContent = `${weekday} Now`;

    nextDaysDate.forEach((element) => {
        now.setDate(now.getDate() + 1);
        const dateStr = now.toLocaleString('en-US', {day: 'numeric', weekday: 'short'});
        const [day, weekday] = dateStr.split(' ');
        element.textContent = `${weekday} ${day}`;
    });
}