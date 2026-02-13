// Day 7 Challenge: Order system bug

// Code bermasalah
const users = ["iqo", "dev"];
const orders = [];

function createOrder(username, item) {
    if (!users.includes(username, item)) {
        console.log("User not found");
    }
    const order = {
        user: username,
        item: item
    };
    order.push(order);
    return order;
}

createOrder("guest", "kopi");
console.log(orders);

/** Tugas gua:
 * 1. Bug utamanya dimana ? hint: guest tetap bisa order
 * 2. Kenapa bug itu bisa terjadi?
 * 3. Fix paling aman gimana?
 * 4. Bonus real world question: Bug ini bisa nyebabin apa? > security, data integrity, dll
 */


/** Jawaban gua:
 * 1. if(!users.includes(username))
 * 2. karena .includes membandingkan nilai
 * 3. if(!users.some(username))
 * 4. memory leak
 */

/** Insight
 * 1. bukan cuma if(!users.includes(username)) tapi tidak ada return/stop proses setelah user gak ketemu,
 * jadi tetap bikin order walaupun user gak ketemu
 * 2. Bukan karena .includes() justru udah bener buat ngecek.
 * masalahnya if(!users.includes(username)) {console.log("User not found");} tetap lanjut ke orders.push(order);, program gak dihentikan
 * 3. Fix paling aman
 * function createOrder(username, item){if (!users.includes(username)) {console.log("user not found"); return null;} const order = {user: username, item}; order.push(order); return order;}
 * 4. Bukan memory leak > 1) Security issue(user palsu bisa order), 2) Data integrity rusak(database penuh order invalid), 3) Fraud/abuse(orang bisa spam order), 4) Analytics kacau(data user jadi gak valid)
 */