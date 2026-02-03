// 1. identitas user (tidak berubah)
const userId = 42;

// 2. status loading (berubah)
let isLoading = true;
// simulasi loading = false;
isLoading = false;

// 3. konfigurasi aplikasi
const config = {
    theme: "dark",
    version: "1.0.0"
};
// ubah isi config
config.theme = "light";

// 4. total belanja (hasil pemrosesan bertahap)
let totalPrice = 0;
totalPrice = totalPrice + 100;
totalPrice = totalPrice + 50;

// 5. halaman aktif
let currentPage = 1;
currentPage = 2;

// userId pakai const karena userId datanya tidak berubah
// isLoading pakai let karena ada kondisi true false
// config pakai const karena nilainya mungkin berubah tapi labelnya tetap
// totalPrice pakai const karena merupakan akumulasi dan bisa berubah
// current page pakai let karena karena dapat berubah halaman sebelumnya atau selanjutnya