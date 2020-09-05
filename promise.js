const promise = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        // resolve("New User")
        reject(new Error("Error message"))
    },200)
})

promise.then(user => {
    console.log(user)
})
.catch(err => console.log(err.message))