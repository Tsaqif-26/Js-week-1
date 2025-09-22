
export const beriNilai = (siswa, kursusId, skor) => ({ 
  ...siswa, 
  nilai: { ...siswa.nilai, [kursusId]: skor } 
});

export const report = siswa => {
  console.log(`Laporan ${siswa.nama}:`, siswa.nilai);
};
