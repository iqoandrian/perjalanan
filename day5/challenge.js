// Day 5: Challenge

function fetchUser() {
    setTimeout(() => {
        return { name: "Iqo"};
    }, 1000);
}

const user = fetchUser();
console.log(user);

/** Tugas Day 5
 * Output apa?
 * Kenapa bukan object user?
 * Bug utamanya dimana?
 * Fix conceptually gimana (bukan syntax dulu)?
 * Ini sering kejadian dimana di real world?
 */

/** Jawaban gua:
 * Loading
 * Masuk queue
 * setTimeout(()...1000) padahal gak ada antrian
 * nyerah
 */

/** Insight
 * Output: undefined > karena fetchUser() tidak return apa-apa.
 * setTimeout() async > callback jalan belakangan > return didalam callback tidak beralih ke fetchUser()
 * bug utama: Expect async code behave seperti sync > Mindset bug bukan syntax bug
 * Fix > Jangan return value async langsung > callback, Promise, async/await
 */