let add_a_dozen;

function loadWebAssembly(fileName) {
  return fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(bits => WebAssembly.compile(bits))
    .then(module => {
      return new WebAssembly.Instance(module)
    });
};

loadWebAssembly('dozen.wasm')
  .then(instance => {
    add_a_dozen = instance.exports._Z11add_a_dozeni;
    console.log('Done compiling!');
  });
