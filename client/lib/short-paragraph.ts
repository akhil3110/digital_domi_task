export function first50Words(paragraph: string): string {
    const words = paragraph.split(' ');
    const first20 = words.slice(0, 25);
    return first20.join(' ');
}