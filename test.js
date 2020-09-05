const form = document.getElementById('book-form')
const title = form.querySelector('#title')
const author = form.querySelector('#author')
const year = form.querySelector('#year')
const btn = form.querySelector('.btn')
const bookList = document.querySelector('#book-list')

function task(e){
    e.preventDefault()

    if (title.value === '' && author.value === '' && year.value === '') {
        alert("Please input your information")
    } else {
        const newRow = document.createElement('tr')

        const newTitle = document.createElement('th')
        newTitle.innerHTML = title.value
        newRow.appendChild(newTitle)


        bookList.appendChild(newRow)
    }
}

btn.addEventListener('click',task);

console.log("Start")

function loginUser(email, password, callback){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("data")
            resolve({userEmail : email})
        },1500)
    })

}

function getUserVideos(email){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(['video1','video2','video3'])
        },1000)
    })

}

// const user = loginUser("sifat@gmail.com",123)
// .then(user =>getUserVideos(user.userEmail))
// .then(arr => console.log(arr))

async function displayUser() {
    try {
        const loggedUser = await loginUser('bla','bla')
        const videos = await getUserVideos(loggedUser.userEmail)
        console.log(videos)
    }
    catch (err) {
        console.log("Message")
    }
}

displayUser()