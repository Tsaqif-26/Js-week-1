
import buatSiswa from "./siswa.js";
import { buatKursus, enroll } from "./kursus.js";
import { beriNilai, report } from "./nilai.js";

let s = buatSiswa("Budi");

let js = buatKursus("JavaScript Dasar");

s = enroll(s, js);

s = beriNilai(s, js.id, 90);

report(s);
