const sizesJson = `./sizes.json`;
let fileNameObj = {
    quality: 'q60', colour: 'rgb', blur: 'b0', format: 'jpg'
};

async function getSizesJson(file) {
    const response = await fetch(sizesJson);
    const data = await response.json();
    const sizeMsg = document.querySelector("#main-img-size .value");
    Object.keys(data).forEach(k => {
        if (file === k) {
            console.log(`File ${k} is ${data[k]} bytes`);
            sizeMsg.innerHTML = `${Math.round(data[k] / 1000)} <span>KB</span>`;
        }
    })
}

document.addEventListener('click', el => {
    if (el.target.type !== "radio") return;
    let key = el.target.name;
    let value = el.target.value;
    Object.keys(fileNameObj).forEach(k => {
        k === key ? fileNameObj[k] = value : null;
    });

    let imgFile = 
        `${key == 'quality' ? value : fileNameObj.quality}_`+
        `${key == 'colour' ? value : fileNameObj.colour}_`+
        `${key == 'blur' ? value : fileNameObj.blur}.`+
        `${key == 'format' ? value : fileNameObj.format}`;
   
    document.getElementById('main-img').setAttribute('src', `images/${imgFile}`);

    getSizesJson(imgFile);
});