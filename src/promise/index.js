//ES6
const sometimesWillHappen = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Hey!!!')
            : reject('Ups!!!');
    });
}
sometimesWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error));


const sometimesWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => resolve('Hey!!!'), 2000)
        } else {
            const error = new Error('Ups!!!')
            reject(error);
        }
    });
}
sometimesWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.error(error));

Promise.all([sometimesWillHappen(),sometimesWillHappen2()])
    .then(response => console.log(response))
    .catch(error => console.error(error));