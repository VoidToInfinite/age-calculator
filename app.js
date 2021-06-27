const dateStart = document.querySelector('#dateStart');
const dateEnd = document.querySelector('#dateEnd');
const btnAction = document.querySelector('#btnAction');
const result = document.querySelector('#ageResult');

const initialEvents = () => {
    console.log('OK');

    const [month, day, year] = [new Date().getMonth() + 1, new Date().getDate(), new Date().getFullYear()];
    dateStart.value = `${year}-${('0' + month).slice(-2)}-${day}`;
    dateEnd.value = `${year}-${('0' + month).slice(-2)}-${day}`;
};

const getDateSeconds = (miliseconds) => {
    return Math.ceil(miliseconds / 1000);
}

const getDateMinutes = (seconds) => {
    return Math.ceil(seconds / 60);
}

const getDateHours = (minutes) => {
    return Math.ceil(minutes / 60);
}

const getDateDays = (hours) => {
    return Math.ceil(hours / 24);
}

const getDateWeeks = (days) => {
    return days / 7;
}

const getDateDaysByWeeks = (weeks) => {
    let days = weeks - Math.floor(weeks);
    return days * 7;
}

const getDateMonths = (days) => {
    return days / 30.417;
}

const getRestWeeksByMonth = (month) => {
    let days = month.toFixed(4) - Math.floor(month.toFixed(4));
    return Math.round(days * 30.417) / 7;
}

const getRestDaysMonthWeek = (week) => {
    let days = week.toFixed(4) - Math.floor(week);
    return days * 7;
}

const getDateYears = (months) => {
    return months.toFixed(4) / 12;
}

const getRestMonthsByYears = (years) => {
    let months = years.toFixed(4) - Math.floor(years);
    return Math.round(months * 12);
}

const getRestMonthsDaysByYears = (months) => {
    let days = months.toFixed(4) - Math.floor(months);
    return days * 30.417;
}

btnAction.addEventListener('click', () => {
    const miliseconds =  Math.abs(new Date(dateStart.value) - new Date(dateEnd.value));

    const seconds = getDateSeconds(miliseconds);
    const minutes = getDateMinutes(seconds);
    const hours = getDateHours(minutes);
    const days = getDateDays(hours);
    const weeks = getDateWeeks(days);
    const daysRestWeeks = getDateDaysByWeeks(weeks);

    const months = getDateMonths(days);
    const monthRestWeeks = getRestWeeksByMonth(months);
    const monthRestWeeksDays = getRestDaysMonthWeek(monthRestWeeks);

    const years = getDateYears(months);
    const yearsRestMonth = getRestMonthsByYears(years);
    const yearsRestMonthDays = getRestMonthsDaysByYears(months);
    
    result.innerHTML = `
        ${Math.round(years)} years ${yearsRestMonth} months ${Math.floor(yearsRestMonthDays.toFixed(4))} days </br>
        Or ${Math.round(months.toFixed(1))} months ${Math.floor(monthRestWeeks)} weeks ${Math.floor(monthRestWeeksDays.toFixed(4))} days </br>
        Or ${Math.floor(weeks.toFixed(1))} weeks ${Math.round(daysRestWeeks)} days </br>
        Or ${new Intl.NumberFormat('en-US').format(days)} days </br>
        Or ${new Intl.NumberFormat('en-US').format(hours)} hours </br>
        Or ${new Intl.NumberFormat('en-US').format(minutes)} minutes </br>
        Or ${new Intl.NumberFormat('en-US').format(seconds)} seconds </br>
    `;
});

window.addEventListener('load', initialEvents);

