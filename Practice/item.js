export function drawItem(item) {
  const itemElement = document.createElement("div");
  itemElement.classList = "gallery-item";

  const resourceElement = document.createElement("div");
  resourceElement.classList = "gallery-item__resource";

  if (item.type === "image") {
    const imgElement = document.createElement("img");
    imgElement.classList = "gallery-item__image";
    imgElement.src = item.resource;

    resourceElement.appendChild(imgElement);
  } else if (item.type === "audio") {
    const audioElement = document.createElement("audio");
    audioElement.classList = "gallery-item__audio";
    audioElement.src = item.resource;
    audioElement.controls = true;

    resourceElement.appendChild(audioElement);
  } else if (item.type === "video") {
    const videoElement = document.createElement("video");
    videoElement.classList = "gallery-item__video";
    videoElement.src = item.resource;
    videoElement.controls = true;

    resourceElement.appendChild(videoElement);
  }

  const titleElement = document.createElement("span");
  titleElement.classList = "gallery-item__title";
  titleElement.textContent = item.title;

  itemElement.appendChild(resourceElement);
  itemElement.appendChild(titleElement);

  return itemElement;
}
