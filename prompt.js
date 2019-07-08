
async function prompt(message) {
    var std = process.stdin;
    process.stdout.write(message);
    std.setEncoding('utf8');
    return new Promise((resolve, reject) => {
        std
        .once('data', (data) => {
            resolve(parseInt(data.trim()));
        })
        .once('error', (error) => {
            reject(error);
        })
    });
}

module.exports = prompt