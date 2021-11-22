import './main.scss';
import './index.html';

const imgElement = document.getElementById("img");
const btnElement = document.getElementById("btn");

btnElement.addEventListener('click', (e) => onCopy());

const animation = () => {
  btnElement.innerText = 'Copied'
  setTimeout(() => {
    btnElement.innerText = 'Copy to buffer';
  }, 2000);
}

const onCopy = () => {
  (async () => {
    try {
      const data = await fetch(imgElement.src);
      const blob = await data.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
      console.log('Image copied.');
      animation();
    } catch (e) {
      console.error(e, e.message);
    }
  })()
}

