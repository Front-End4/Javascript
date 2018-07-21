let stroke = '';

function show(n) {
    if (n > 10) {
        return (n % 10) + show((n - (n % 10)) / 10);
    }
    return n;
}

alert (show(123));