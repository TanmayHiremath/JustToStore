function main() {
  let videos = document.querySelectorAll('video');

  // let outerDiv = document.createElement('div', { id: 'playback-speed' });
  // let viewButton = document.createElement('input');
  // viewButton.type = 'button';
  // viewButton.value = 'toggle';
  // viewButton.style.display = 'inline-block';
  // viewButton.style.zIndex = '10000002';
  // outerDiv.style.position = 'fixed';
  // outerDiv.style.top = '10px';
  // outerDiv.style.right = '10px';
  // outerDiv.style.width = '200px';
  // outerDiv.style.height = '200px';
  // outerDiv.style.zIndex = '10000001';

  // let playbackSpeedDiv = document.createElement('div', {
  //   id: 'playback-speed',
  // });
  // playbackSpeedDiv = document.createElement('div', { id: 'playback-speed' });
  // playbackSpeedDiv.style.width = '100px';
  // playbackSpeedDiv.style.height = '50px';
  // playbackSpeedDiv.style.display = 'flex';
  // playbackSpeedDiv.style.justifyContent = 'space-between';
  // playbackSpeedDiv.style.flexDirection = 'horizontal';
  // playbackSpeedDiv.style.zIndex = '10000001';
  // playbackSpeedDiv.style.border = 'black 2px dotted';
  // playbackSpeedDiv.style.backgroundColor = 'white';

  let playbackSpeedField = document.createElement('div');
  playbackSpeedField.innerHTML = '0.0';
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
  document.onkeypress = (e) => {
    if (videlem == null) return;
    if (e.key === ' ' || e.key === 'k') {
      !videlem.paused ? videlem.pause() : videlem.play();
    } else if (e.key === 'j') {
      videlem.currentTime -= tdelta;
    } else if (e.key === 'l') {
      videlem.currentTime += tdelta;
    }
    else if (e.key === 'l') {
      videlem.currentTime += tdelta;
    }
    else if (e.key === '[') {
      playbackSpeedField.innerHTML = (parseFloat(playbackSpeedField.innerHTML) - 0.10).toString().slice(0, 4);
      videlem.playbackRate -= 0.10;
    }
    else if (e.key === ']') {
      playbackSpeedField.innerHTML = (parseFloat(playbackSpeedField.innerHTML) + 0.10).toString().slice(0, 4);
      videlem.playbackRate += 0.10;
    }
  };

  document.querySelector('body').appendChild(playbackSpeedField);
}

main();
