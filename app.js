particlesJS.load('particles-js', 'assets/particles.json');

var app_header = document.getElementById('typewriter-header');

var typewriter_header = new Typewriter(app_header, {
    loop: false,
    delay: 10,
    deleteSpeed: 5
});

typewriter_header.typeString("Hey there, I'm Navaneeth.")
    .pauseFor(2500)
    .deleteAll()
    .typeString("I'm a software developer.")
    .pauseFor(2500)
    .deleteChars(19)
    .typeString("Enigmatologist.")
    .pauseFor(1500)
    .deleteChars(15)
    .typeString("Optimist.")
    .pauseFor(1500)
    .deleteAll()
    .typeString('Check out my work below.')
    .start();

var app_subheader = document.getElementById('typewriter-subheader');

var typewriter_subheader = new Typewriter(app_subheader, {
    loop: false, 
    deleteSpeed: 1,
    delay: 4
});

typewriter_subheader.pauseFor(1000)
    .typeString("Nice to meet you.")
    .pauseFor(2500)
    .deleteAll()
    .typeString("Python, Javascript, Node JS, CSS, HTML, Docker and many more!")
    .pauseFor(2500)
    .deleteAll()
    .pauseFor(200)
    .typeString(`<div style="position: relative; top: 20px;"><div>Follow me on Twitter</div> <div style="display:block; margin-top: 5px">@navaneethnagesh</div></div>`)
    .start();

setTimeout(() => {
    app_subheader.hidden = false
}, 500)

setTimeout(() => {
    document.querySelectorAll('.Typewriter__cursor').forEach(element => element.style.display = 'none')
}, 10000);