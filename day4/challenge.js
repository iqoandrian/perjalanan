/**
 * formatUser
 * Input: string name user
 * Output: username rapi (lowercase + underscore)
 */

// Percobaan tapi salah
/*
function formatUsername(user) {
    let username = [];
    let space = " ";
    if (user[space]) {
        user.trim();
        user.toLowercase();
        user.replace(' ', '_');
    }

    return user;
}

console.log(formatUsername("John Doe"));
console.log(formatUsername(" Iqo Dev "));

*/

function formatUsername(user) {
    let clear = user.trim().toLowerCase();
    let username = clear.replace(" ", "_"); // > replaceAll(/\s+/g, "_")

    return username;
}

console.log(formatUsername("John Doe"));
console.log(formatUsername(" Iqo Dev "));