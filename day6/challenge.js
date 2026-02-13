// Day 6 Challenge: Async JS + Debugging logic

// Soal 1: Output apa?
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
// Jawaban gua: A C B
// Insight: data cuma scope di test()

// Soal 2: Kenapa kode ini error?
async function test() {
    const data = await fetchData();
}

test();
console.log(data);
// Jawaban gua: Karena variable data ada didalam fungsi test()
// Insight: return await fetchData() > nunggu promise resolve dulu baru return value
// return fetchData() > langsung return valuenya

// Soal 3: apa bedanya(didalam async function):
return await fetchData();
return fetchData();
// Jawaban gua: return await fetchData() queue task sedangkan return fetchData() sync task.

// Soal 4: Kenapa "Done" muncul duluan dan gimana cara bikin angka 1,2,3 keluar berurutan nunggu delay?
const arr = [1,2,3];

arr.forEach(async (num) => {
    await delay(1000);
    console.log(num);
});
console.log("Done");
// Jawaban gua: Nyerah!
// Insight: karena forEach tidak nunggu async function selesai, dia langsung loop semua callback dan async function jalan sendiri-sendiri.
// Cara yang paling populer
for (const num of arr) {
    await delay(1000);
    console.log(num);
}
console.log("Done");
// Kenapa ini works: for...of support await dan loop nunggu tiap promise selesai.