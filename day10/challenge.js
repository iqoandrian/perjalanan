// Day 10 Challenge: Rate Limit

const attempts = {};
async function login(username, password) {
    if (!attempts[username]) {
        attempts[username] = 0;
    }
    if (attempts[username] > 3) {
        return {error: "To many attempts. try again later."};
    }
    const user = users.find(u => u.username === username);
    if (!user || user.password !== password) {
        attempts[username]++;
        return {error: "Invalid credentials"};
    }

    return {message: "Login success"};
}

/** Tugas gue:
 * 1. Attack apa yang mau doicegah sistem ini?
 * 2. Masalah apa yang masih ada walaupun sudah ada limit 3x?
 * 3. Kenapa pakai username sebagai key itu bisa jadi celah?
 * 4. Kalau ini dipakai di production dengan 3 server instance, apa yang terjadi?
 * 5. Perbaikan idealnya konsepnya gimana?
 */

/** Jawaban gue:
 * 1. Percobaan login
 * 2. user cuma dapat peringatan doang, tapi masih bisa nyoba dan kalo udah ketemu username masih bisa nyari password
 * 3. nyerah
 * 4. DDOS
 * 5. dengan rate limiting
 */

/** Insight:
 * 1. Lebih spesifiknya Brute-force attack, hacker coba password berkali-kali sampai cocok
 *  kadang juga  Credential stuffing, password spraying
 * 2. Masalah BESAR, lock cuma berdasarkan username, artinya hacker bisa username: iqo1, iqo2, iqo3 dan reset counter tiap kali, jadi limit 3x itu gampang banget di bypass
 * 3. Karena attempts[username] artinya limit berlaku kalau username sama, tapi hacker bisa ganti username terus, atau brute-force satu IP ke banyak user
 *  lebih parah lagi kalau hacker tahu username admin, dan bisa spam 4x gagal login, admin terkunci, DoS ke akun admin. ini namanya Account lockout abuse
 * 4. Bukan tepat DDOS, tapi relate ke scalling. masalahnya const attempts = {}; ini disimpan di memory server.
 *  kalau ada Server A,B,C try 3x di A, B,C total 9x, karena memory tidak shared, Jadi rate limiter gagal di distributed system.
 * 5. Fix idealnya:
 *  Rate limit berdasarkan IP, Simpan di Redis(shared storage), Tambahkan TTL(expiry) dan jangan kasih tahu detail error ("Invalid Credentials") untuk semua kasus
 * 
 * // Insight penting:
 * Rate limiting itu bukan cuma batasi percobaan tapi kontrol abuse di distributed system. Ini udah masuk level system design.
 */