let button = document.getElementById('btn-for-test');
let driver = document.getElementById('output');
let submit = document.getElementById('form-one');

// document.body.style.background = 'red'
console.log("HI guys...")

async function findNow() {
    try {
        let values = await fetch('http://localhost:2900/api/datas');

        if(!values.ok){ // the ok means it is true or false
        throw new Error("It is not Available Now!");
    }
    let posts = await values.json();
    driver.innerHTML = 'Hi';
    
    posts.forEach(element => {
        const postEl = document.createElement('h3');
        postEl.innerHTML = element.name;
        driver.appendChild(postEl);
    });
    } catch (error) {
       console.log("There is an error",error);
    };  
};

// when click on submit button, it will work
async function named(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = formData.get('name');
    try {
        let res = await fetch('http://localhost:2900',{method: 'POST', headers:{'Content-Type':'application/json'},body: JSON.stringify({name})});
        if(!res.ok){
            throw new Error("There is an error on new post adding.");
        }
        let newPost = await res.json();
        const postEl = document.createElement('h3');
        postEl.textContent = newPost.name;
        driver.appendChild(postEl)
        findNow()

    } catch (error) {
        console.log("Error",error)
    }
}

button.addEventListener('click',findNow);
submit.addEventListener('submit',named)
