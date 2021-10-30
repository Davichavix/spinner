const spinner = function(array) {
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      process.stdout.write('\r' + array[i]);
    }, 100 * i);
  }
}

let spin = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
spinner(spin);