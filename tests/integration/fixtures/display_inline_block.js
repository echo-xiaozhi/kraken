function setStyle(dom, object) {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      dom.style[key] = object[key];
    }
  }
}

const container = document.createElement('div');
setStyle(container, {
  width: '100px',
  height: '100px',
  display: 'block',
  backgroundColor: '#666',
});
container.appendChild(document.createTextNode('inline-block'));

document.body.appendChild(container);
document.body.appendChild(document.createTextNode('test text'));

requestAnimationFrame(() => {
  container.style.display = 'inline-block';
});
