//Persegi
const luasPersegi = (sisi) => sisi * 2;
const kelilingPersegi = (sisi) => 4 * sisi;

//Persegi panjang
const luasPersegiPanjang = (panjang,lebar) => panjang * lebar;
const kelilingPersegiPanjang = (panjang,lebar) => 2 * (panjang + lebar);

//Lingkaran
const PHI = 22/7;
const luasLingkaran = (radius) => PHI * radius ** 2;
const kelilingLingkaran = (radius) => 2 * PHI * radius;

//Segitiga
const luasSegitiga = (alas,tinggi) => 0.5 * (alas * tinggi);
const kelilingSegitiga = (sisi1,sisi2,sisi3) => sisi1 + sisi2 + sisi3;

//Jajar Genjang
const luasJajargenjang = (alas,tinggi) => alas * tinggi;
const kelilingJajargenjang = (alas,sisimiring) => 2 * (alas + sisimiring);

//Layang-layang
const luasLayang = (diameter1,diameter2) => 0.5 * diameter1 * diameter2;
const kelilingLayang = (sisi1,sisi2,sisi3,sisi4) => sisi1 + sisi2 + sisi3 + sisi4;

//Trapesium
const luasTrapesium = (atas,bawah,tinggi) => 0.5 * (atas + bawah) * tinggi;
const kelilingTrapesium = (sisi1,sisi2,sisi3,sisi4) => sisi1 + sisi2 + sisi3 + sisi4;

//Belah Ketupat
const luasBelahketupat = (diameter1,diameter2) => 0.5 * diameter1 * diameter2;
const kelilingBelahketupat = (sisi1,sisi2,sisi3,sisi4) => sisi1 + sisi2 + sisi3 + sisi4;