export const generateRandomId = (existingIds: number[]): number => {
    const max = 1000;
    const min = 1;
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return existingIds.includes(num) ? generateRandomId(existingIds) : num;
}
