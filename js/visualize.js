let chain = [];

function createHash(data, prevHash) {
    return btoa(data + prevHash);
}

function addBlock() {

    let data = prompt("Enter block data:");

    if(!data) return;

    let prevHash = chain.length === 0 ? "0" : chain[chain.length - 1].hash;

    let hash = createHash(data, prevHash);

    let block = { data, prevHash, hash };

    chain.push(block);

    displayChain();
}

function displayChain() {

    let container = document.getElementById("chain");
    container.innerHTML = "";

    chain.forEach((block, index) => {
        if(index > 0){
            let arrow = document.createElement("div");
            arrow.innerHTML = "<===>";
            arrow.className = "arrow";
            container.appendChild(arrow);
        }
        let div = document.createElement("div");
        div.className = "block";

        div.innerHTML = `
            <p><b>Block ${index+1}</b></p>

            <input value="${block.data}" 
                   onchange="updateBlock(${index}, this.value)">

            <p>Prev: ${block.prevHash}</p>
            <p>Hash: ${block.hash}</p>
        `;

        container.appendChild(div);
    });
}

function updateBlock(index, newData) {

    chain[index].data = newData;
    for(let i = index; i < chain.length; i++){

        let prevHash = i === 0 ? "0" : chain[i-1].hash;

        chain[i].prevHash = prevHash;
        chain[i].hash = createHash(chain[i].data, prevHash);
    }

    displayChain();
} 
