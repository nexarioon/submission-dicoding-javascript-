function fibonacci(n, deret = [0, 1]) {
    if (deret.length >= n) {
        return deret.slice(0, n);
    }
    deret.push(deret[deret.length - 1] + deret[deret.length - 2]);
    return fibonacci(n, deret);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
