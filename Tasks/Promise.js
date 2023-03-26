const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log('Подготовка данных')
    
    const dataModified = {
        server: 'aws',
        port: 20,
        statuc: 'working'
    }
    
    resolve(dataModified);
}, 2000);

})
 // promise.then(data => console.log('Поучен объект',data))
promise
    .then((data) => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
            data.modified = true;

            resolve(data);
            }, 2000)
        })
    })
    .then(newData => {
        console.log("Новые данные введены успешно", newData)
        newData.newInfo = 'hdkfhkdhf';
        return newData;
    })
    .then(result => {
        console.log("Есть изменения!", result)
    })
    .catch(err => console.log(err))
    .finally(() => console.log('Finally!'))
