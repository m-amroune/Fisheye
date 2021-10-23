export class MediaFactory {
  constructor(type, props) {
    if (type === "image") return new ImageFactory(props);
    if (type === "video") return new VideoFactory(props);
  }
}

class ImageFactory {
  constructor(props) {
    this.id = props.id;
    this.src = props.src;
    this.title = props.title;
    this.photographerId = props.photographerId;
    this.tags = props.tags;
    this.likes = props.likes;
    this.date = props.date;
    this.price = props.price;
  }
  displayMedia() {
    const imgArticle = document.createElement("article");
    const imgLink = document.createElement("a");
    const imgMedia = document.createElement("img");
    const imgElements = document.createElement("div");
    const imgTitle = document.createElement("h2");
    const imgLikes = document.createElement("span");

    imgArticle.classList.add("photographer-work-article");
    imgLink.classList.add("photographer-work-link");
    imgMedia.classList.add("photographer-work-img");
    imgElements.classList.add("photographer-work-elements");
    imgTitle.classList.add("photographer-work-title");
    imgLikes.classList.add("photographer-work-likes");

    imgMedia.src = "./public/img/Media/" + this.src;

    imgArticle.append(imgLink, imgElements);
    imgLink.append(imgMedia);
    imgElements.append(imgTitle, imgLikes);

    return imgArticle;
  }
}

class VideoFactory {
  constructor(props) {
    this.id = props.id;
    this.url = props.url;
    this.title = props.title;
    this.photographerId = props.photographerId;
    this.tags = props.tags;
    this.likes = props.likes;
    this.date = props.date;
    this.price = props.price;
  }
  displayMedia() {
    const videoArticle = document.createElement("article");
    const videoLink = document.createElement("a");
    const videoMedia = document.createElement("video");
    const videoElements = document.createElement("div");
    const videoTitle = document.createElement("h2");
    const videoLikes = document.createElement("span");

    videoArticle.classList.add("photographer-work-article");
    videoLink.classList.add("photographer-work-link");
    videoMedia.classList.add("photographer-work-video");
    videoElements.classList.add("photographer-work-elements");
    videoTitle.classList.add("photographer-work-title");
    videoLikes.classList.add("photographer-work-likes");

    videoArticle.append(videoLink, videoElements);
    videoElements.append(videoTitle, videoLikes);

    return videoArticle;
  }
}
