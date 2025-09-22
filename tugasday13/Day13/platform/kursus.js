
export const buatKursus = judul => ({ id: Date.now(), judul });
export const enroll = (siswa, kursus) => ({ 
  ...siswa, 
  kursus: [...siswa.kursus, kursus] 
});
