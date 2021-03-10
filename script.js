let quality = 'q60', colour = 'rgb', blur = 'b0';
let format ='jpg';

document.addEventListener('click', el => {
    console.log(el.target);
    let value = el.target.id;
    let name = el.target.name;
    console.log(`${name} is ${value}!`);
    let imgFile = 
        `${name == 'quality' ? value : quality}_`+
        `${name == 'colour' ? value : colour}_`+
        `${name == 'blur' ? value : blur}.`+
        `${name == 'format' ? value : format}`;
    console.log(imgFile);
    document.getElementById('main-img').setAttribute('src', `images/${imgFile}`);
});