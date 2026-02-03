// Reading code:

function process(data) {
  let output = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
      output.push(data[i]);
    }
  }

  return output;
}

/**
 * Niat fungsi = Memfilter data dan mengambil elemen genap
 * input = data
 * output = output
 * variabel yang berubah = i(counter) output(isinya bertambah)
 * bagian rawan salah = i < data.length
 */