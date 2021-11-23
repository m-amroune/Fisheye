export class MediaFactory {
  constructor(type, props) {
    if (type === "image") return new ImageFactory(props);
    if (type === "video") return new VideoFactory(props);
  }
}

export class ImageFactory {
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
    const imgArticle = document.createElement("article");
    const imgFigure = document.createElement("figure");
    const imgLink = document.createElement("a");
    const imgMedia = document.createElement("img");
    const imgFigcaption = document.createElement("figcaption");
    const imgTitle = document.createElement("h2");
    const imgInfoLikes = document.createElement("div");
    const imgNbrLikes = document.createElement("p");
    const imgLinkHeart = document.createElement("a");
    const imgHeart = document.createElement("span");

    imgArticle.classList.add("photographer-work-article");
    imgLink.classList.add("photographer-work-link");
    imgMedia.classList.add("photographer-work-img");
    imgFigcaption.classList.add("photographer-work-info");
    imgTitle.classList.add("photographer-work-title");
    imgNbrLikes.classList.add("photographer-work-nbr-likes");
    imgInfoLikes.classList.add("photographer-work-elements");
    imgHeart.classList.add("photographer-work-heart");

    imgMedia.src = "./public/img/Media/" + this.url;
    imgTitle.textContent = `${this.title}`;
    imgNbrLikes.textContent = `${this.likes}`;
    imgHeart.innerHTML = `<i class="fas fa-heart" aria-hidden="true"></i>`;

    imgArticle.append(imgFigure);
    imgFigure.append(imgLink, imgFigcaption);
    imgLink.append(imgMedia);
    imgFigcaption.append(imgTitle, imgInfoLikes);
    imgInfoLikes.append(imgNbrLikes, imgLinkHeart);
    imgLinkHeart.append(imgHeart);

    return imgArticle;
  }
}

export class VideoFactory {
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
    const videoFigure = document.createElement("figure");
    const videoLink = document.createElement("a");
    const videoMedia = document.createElement("video");
    const videoFigcaption = document.createElement("figcaption");
    const videoTitle = document.createElement("h2");
    const videoInfoLikes = document.createElement("div");
    const videoNbrLikes = document.createElement("p");
    const videoLinkHeart = document.createElement("a");
    const videoHeart = document.createElement("span");

    videoArticle.classList.add("photographer-work-article");
    videoLink.classList.add("photographer-work-link");
    videoMedia.classList.add("photographer-work-img");
    videoFigcaption.classList.add("photographer-work-info");
    videoTitle.classList.add("photographer-work-title");
    videoNbrLikes.classList.add("photographer-work-nbr-likes");
    videoInfoLikes.classList.add("photographer-work-elements");
    videoHeart.classList.add("photographer-work-heart");

    videoMedia.src = "./public/img/Media/" + this.url;
    videoTitle.textContent = `${this.title}`;
    videoNbrLikes.textContent = `${this.likes}`;
    videoHeart.innerHTML = `<i class="fas fa-heart" aria-hidden="true"></i>`;

    videoArticle.append(videoFigure);
    videoFigure.append(videoLink, videoFigcaption);
    videoLink.append(videoMedia);
    videoFigcaption.append(videoTitle, videoInfoLikes);
    videoInfoLikes.append(videoNbrLikes, videoLinkHeart);
    videoLinkHeart.append(videoHeart);

    return videoArticle;
  }
}
