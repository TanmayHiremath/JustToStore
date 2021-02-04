//async function load(url) {eval(await (await fetch(url)).text());}load('https://tanmayhiremath.github.io/JustToStore/video.js');
function main() {
  let videos = document.querySelectorAll('video');
  let playbackSpeedField = document.createElement('div');
  playbackSpeedField.innerHTML = '1.0';
  playbackSpeedField.style.width = '75px';
  playbackSpeedField.style.height = '50px';
  playbackSpeedField.style.position = 'fixed';
  playbackSpeedField.style.right = '5px';
  playbackSpeedField.style.top = '5px';
  playbackSpeedField.style.zIndex = '10000001';

  function isChild(parentNodes, element) {
    for (el of parentNodes) {
      if (el.contains(element)) {
        return true;
      }
    }
    return false;
  }

  function getUniqueVidElem(videos) {
    let active;
    let count = 0;
    let newelem;
    count = 0;
    active = document.activeElement;
    for (vid of videos) {
      if (isChild(active.childNodes, vid) || active === vid) {
        count += 1;
        newelem = vid;
      }
    }
    return count == 1 ? newelem : videlem;
  }

  let videlem = null;

  document.addEventListener('click', (ev) => {
    if (videlem == null) videlem = getUniqueVidElem(videos);
  });

  let tdelta = 5;
  document.onkeydown = (e) => {
    if (videlem == null) return;
    if (e.key === ' ' || e.key === 'k') {
      !videlem.paused ? videlem.pause() : videlem.play();
    } else if (e.code === '37') {
      videlem.currentTime -= tdelta;
    } else if (e.code === '39') {
      videlem.currentTime += tdelta;
    }
    else if (e.key === 'l') {
      videlem.currentTime += tdelta;
    }
    else if (e.key === '[') {
      playbackSpeedField.innerHTML = (parseFloat(playbackSpeedField.innerHTML.slice(0,3)) - 0.2).toPrecision(3);
      videlem.playbackRate -= 0.2;
    }
    else if (e.key === ']') {
      playbackSpeedField.innerHTML = (parseFloat(playbackSpeedField.innerHTML.slice(0,3)) + 0.2).toPrecision(3);
      videlem.playbackRate += 0.2;
    }
  };

  document.querySelector('body').appendChild(playbackSpeedField);
}

main();
