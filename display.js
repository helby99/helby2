function display(callback, ...args) {
    callback(args);
}

const displayHasil = (args) =>
    alert(`Luas : ${args[0]} cm\u00B2 | Keliling : ${args[1]} cm`);