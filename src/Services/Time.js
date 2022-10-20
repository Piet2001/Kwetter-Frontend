export const timeAgo = (prevDate) => {
    let previousDate = new Date(prevDate)
    let offset = new Date().getTimezoneOffset(); //returns 120 for GMT+1 + SummerTime
    previousDate.setMinutes(previousDate.getMinutes() - offset)

    const diff = Number(new Date()) - new Date(previousDate);

    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = day * 365;
    switch (true) {
        case diff < 0:
            return "Time Unavailible"
        case diff < minute:
            const seconds = Math.round(diff / 1000);
            return `${seconds} ${seconds > 1 ? 'seconds' : 'second'}`
        case diff < hour:
            const minutes = Math.round(diff / minute);
            return `${minutes} ${minutes > 1 ? 'minutes' : 'minute'}`;
        case diff < day:
            const hours = Math.round(diff / hour);
            return `${hours} ${hours > 1 ? 'hours' : 'hour'}`;
        case diff < month:
            const days = Math.round(diff / day);
            return `${days} ${days > 1 ? 'days' : 'day'}`;
        case diff < year:
            const months = Math.round(diff / month)
            return `${months} ${months > 1 ? 'months' : 'month'}`;
        case diff > year:
            const years = Math.round(diff / year);
            return `${years} ${years > 1 ? 'years' : 'year'}`;
        default:
            return "";
    }
};