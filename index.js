/*document.getElementById(name)
window.alert('welcome')
console.log(name)

document.getElementById("bioDataform").addEventListener("submit", function(event) {
    event.preventDefault(); 


    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const club = document.getElementById("club").value;
    const age = document.getElementById("age").value;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Club: ${club}`);
    console.log(`Age: ${age}`);

    document.getElementById("bioDataform").reset();
});*/

document.getElementById("bioDataform").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const club = document.getElementById("club").value;
    const age = document.getElementById("age").value;

    const displayArea = document.createElement('div');
    displayArea.innerHTML = `
        <h3>Submitted Customer's Data</h3>
        <p>Mr. ${name}, you are welcome to our prestigious viewing center. <br> We are committed to serving you better.</br> Please do have fun and enjoy watching <b>${club}</b>, your favourite club.</p>
    `;


    document.body.appendChild(displayArea);

    
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Club: ${club}`);
    console.log(`Age: ${age}`);


    alert("Form submitted successfully!");

    document.getElementById("bioDataform").reset();
});


