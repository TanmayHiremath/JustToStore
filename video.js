function main() {
  let videos = document.querySelectorAll('video');
  let playbackSpeedField = document.createElement('div');
  playbackSpeedField.innerHTML = '1.0';
  playbackSpeedField.style.width = '50px';
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
  let bool;
  document.onkeydown = (e) => {
    if (videlem == null) return;
    switch (e.key) {
      case " ":
      case "k":
        !videlem.paused ? videlem.pause() : videlem.play();
        break;
      case "Left": // IE/Edge specific value
      case "ArrowLeft":
        bool=videlem.paused
        videlem.currentTime -= tdelta;
        videlem.paused ? videlem.pause() : videlem.play();
        break;
      case "Right": // IE/Edge specific value
      case "ArrowRight":
        bool=videlem.paused
        videlem.currentTime += tdelta;
        videlem.paused ? videlem.pause() : videlem.play();
        break;
      case "Enter":
        // Do something for "enter" or "return" key press.
        break;

      case "[":
        playbackSpeedField.innerHTML = (parseFloat(playbackSpeedField.innerHTML.slice(0, 3)) - 0.1).toPrecision(3);
        videlem.playbackRate -= 0.1;
        break;
      case "]":
        playbackSpeedField.innerHTML = (parseFloat(playbackSpeedField.innerHTML.slice(0, 3)) + 0.1).toPrecision(3);
        videlem.playbackRate += 0.1;
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  };

  document.querySelector('body').appendChild(playbackSpeedField);
}

main();
