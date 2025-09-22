
export const cerah = (foto) => ({...foto, filter: 'cerah'});
export const gelap = (foto) => ({...foto, filter: 'gelap'});
export default function blur(foto) { return {...foto, filter: 'blur'}; }