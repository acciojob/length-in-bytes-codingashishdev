const byteSize = (str) => {
    const blob = new Blob([str], { type: 'text/plain' });
    return blob.size
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
