let fileName = {
    quality: 'q60',
    colour: 'rgb', 
    blur: 'b0',
    format: 'jpg'
};
console.log("init fileName:");
console.log(fileName);

document.addEventListener('click', el => {
    console.log(el.target);
    let value = el.target.id;
    let name = el.target.name;
    console.log(`${name} is ${value}!`);
    let imgFile = 
        `${name == 'quality' ? value : fileName.quality}_`+
        `${name == 'colour' ? value : fileName.colour}_`+
        `${name == 'blur' ? value : fileName.blur}.`+
        `${name == 'format' ? value : fileName.format}`;
    console.log(imgFile);
    document.getElementById('main-img').setAttribute('src', `images/${imgFile}`);
});