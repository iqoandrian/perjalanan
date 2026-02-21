// Day 8 Challenge: Login System Scenario

const users = [
    {username: "iqo", password: "123"}
];
function findUser(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const user = users.find(u => u.username === username);
            resolve(user);
        }, 1000);
    });
}
function login(username, password) {
    const user = findUser(username);

    if(!user) {
        return "User not found";
    }
    if(user.password !== password) {
        return "Wrong password";
    }
    return "Login success";
}
console.log(login("iqo", "123"));

/** Pertanyaan:
 * 1. Output apa?
 * 2. Bug utamanya dimana?
 * 3. Kenapa bugbini berbahaya di production?
 * 4. Fix conceptually gimana?(belum perlu code perfect)
 * 5. Ini contoh bug jenis apa? (logic/async/security/dll)
 */

/** Jawaban gua:
 * 1. Login success
 * 2. gua nyerah
 */

/** Insight:
 * 1. Jawaban gua salah, tapi bukan karena logic bener melainkan karena BUG
 * 2. findUser() user itu Promise {<pending>} Promise itu truthy jadi if(!user) gak pernah masuk
 *      lalu if(user.password !== password) = undefine karena user itu Promise jadi undefined!=="123" true
 *      harusnya return wrong, tapi karena kita langsung return string sebelum promise, logic ini rusak total
 * 3. login system bisa rusak, bisa bypass validation, bisa selalu gagal/selalu sukses, security vulnerability
 *      async bug di auth system = serius banget
 * 4. Ini bug: Async logic bug, Control flow bug, security risk(bukan syntax error, bukan typo, ini logic timing error)
 * 5. karena findUser async, maka login juga harus async, harus await hasilnya.
 *      Contoh fix:
 async function login(username, password) {
    const user = await findUser(username);
    if(!user) { return "User not found";
    }
    if(user.password !== password) {
        return "Wrong password";
    }
    return "Login success";
}

// Insight penting buat gue: "Kalau satu function async, semua chain diatasnya harus aware async"
 / Async itu "menular"
 */