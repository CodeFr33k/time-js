export default function(year: number, month: number, dayOfMonth: number) {
    const seconds = (
        Date.UTC(year, month, dayOfMonth) - 
        Date.UTC(year, 0, 0)
    );
    return seconds / 24 / 60 / 60 / 1000;
}

