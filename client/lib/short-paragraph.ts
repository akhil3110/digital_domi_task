export function first50Words(paragraph: string): string {
    const words = paragraph.split(' ');
    const first20 = words.slice(0, 50);
    return first20.join(' ');
}