const sizesJson = `./sizes.json`;

fetch(sizesJson)
    .then(response => response.json())
    .then(data => console.log(data));

let fileNameObj = {
    quality: 'q60',
    colour: 'rgb', 
    blur: 'b0',
    format: 'jpg'
};
console.log("init fileNameObj:");
console.log(fileNameObj);

document.addEventListener('click', el => {
    if (el.target.type !== "radio") return;
    console.log(el.target);
    let key = el.target.name;
    let value = el.target.value;
    console.log(`${key} is ${value}!`);
    // If the clicked key is in the object, change its value to value
    Object.keys(fileNameObj).forEach(k => {
        console.log(`Key: ${k}`);
        k === key ? fileNameObj[k] = value : null;
    });
    console.log('fileNameObj is now:');
    console.log(fileNameObj);

    let imgFile = 
        `${key == 'quality' ? value : fileNameObj.quality}_`+
        `${key == 'colour' ? value : fileNameObj.colour}_`+
        `${key == 'blur' ? value : fileNameObj.blur}.`+
        `${key == 'format' ? value : fileNameObj.format}`;
    console.log(imgFile);
    document.getElementById('main-img').setAttribute('src', `images/${imgFile}`);
});