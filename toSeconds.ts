export default function(text: string) {
    const match = /(\d{4})-(\d{3})/.exec(text);
    if (!match) {
        throw new Error;
    }
    const year = parseInt(match[1]);
    const day = parseInt(match[2]);
    const hour = parseInt(match[3]);
    const date = new Date(Date.UTC(year, 0, 1)); 
    date.setSeconds(
        (day - 1) * 24 * 60 * 60 
    );
    return date.getTime() / 1000;
}

