// Day 5: Async Javascript

 /** async Javascript + Debugging Real case
  * JS itu single threaded:
  * 
  * satu kerjaan satu waktu
  * tapi bisa "nunggu" async task
  * 
  * Contoh:
  * API call
  * database query
  * file read
  * timer
  * event UI
  */

 // Contoh basic
 console.log("A");

 setTimeout(() => {
    console.log("B");
 }, 0);
 console.log("C"); // A C B