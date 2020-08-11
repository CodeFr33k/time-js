export default function(year: number, day: number) {
    const year1 = ('000' + String(year)).substr(-4);
    const day1 = ('00' + String(day)).substr(-3);
    return `${year1}-${day1}`;
} 
