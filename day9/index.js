// Day 9: Auth system real simulation
// Production mindset

const users = [
    {username: "iqo", password: "123", role: "admin"}
];
function generateToken(user) {
    return btoa(user.username + ":" + Date.now());
}
async function login(username, password) {
    const user = users.find(u => u.username === username);
    if (!user) {
        return {error: "User not found"};
    }
    if (user.password !== password) {
        return {error: "Wrong password"};
    }
    const token = generateToken(user);
    return {
        message: "Login success",
        token: token
    };
}
async function getProfile(token) {
    const decode = atob(token);
    const username = decode.split(":")[0];

    const user = users.find(u => u.username === username);
    return user;
}

/** Tugas gue:
 * 1. Bug/Security issue apa yang lu lihat?
 * 2. Kenapa ini berbahaya di production?
 * 3. Kalau lu backend engineer, perbaiki konsepnya gimana?
 * 4. Bug kategori apa?
 */

/** Jawaban gue:
 * 1. encode
 * 2. Token gak di encode
 * 3. harusnya token di encode
 * 4. Security
 */

/** Insight:
 * 1. encode arahnya udah bener tapi token cuma base64 encode, bukan secure token
 *  btoa(user.username + ":" + Date.now()) > Base64 itu bukan encription, bukan signing dan bukan secure itu cuma encoding
 *  siapapun bisa atob(token) dan tau isinya
 * 2. Ini serius banget karena user bisa: bikin token sendiri, ganti username jadi "iqo", encode pakai btoa, kirim ke server, dapat profile admin
 *  artinya bisa di bypass total tidak ada Signature, secret key, verification, expiration check. Ini secure disaster
 * 3. Production backend biasanya pakai JWT(JSON Web Token), JWT punya Header, payload dan signature
 *  token = sign(payloaad, SECRET_KEY) saat diverifikasi verify(token, SECRET_KEY) jadi kalau user ubah payload ,signature gak valid
 * 4. Security, lebih spesifik Security flaw, authentication design flaw dan broken access control risk
 *  bukan async bug, bukan logic kecil, ini system design security issue.
 * 
 * // Insight penting buat gua Base64 tidak sama dengan Encription
 * Encode itu cuma bikin teks beda bentuk, bukan bikin aman.
 */