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

    imgMedia.setAttribute("tabindex", "0");
    imgMedia.setAttribute("src", `./assets/img/media/${this.url}`);
    imgMedia.setAttribute("alt", `./assets/img/media/${this.url}`);
    imgTitle.textContent = `${this.title}`;
    imgNbrLikes.textContent = `${this.likes}`;
    imgHeart.innerHTML = `<i class="fas fa-heart" aria-hidden="true" aria-label="likes"></i>`;
    imgHeart.setAttribute("tabindex", "0");

    let likeCount = document.querySelector(".total-likes-number");
    let clicked = false;
    imgHeart.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!clicked) {
        clicked = true;
        this.likes++;
        likeCount.textContent++;
      } else {
        clicked = false;
        this.likes--;
        likeCount.textContent--;
      }
      imgNbrLikes.textContent = `${this.likes}`;
    });

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

    videoMedia.setAttribute("tabindex", "0");
    videoMedia.setAttribute("src", `./assets/img/media/${this.url}`);
    videoMedia.setAttribute("alt", `./assets/img/media/${this.url}`);
    videoTitle.textContent = `${this.title}`;
    videoNbrLikes.textContent = `${this.likes}`;
    videoHeart.innerHTML = `<i class="fas fa-heart" aria-hidden="true" aria-label="likes"></i>`;
    videoHeart.setAttribute("tabindex", "0");

    let clicked = false;
    let likeCount = document.querySelector(".total-likes-number");
    videoHeart.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!clicked) {
        clicked = true;
        this.likes++;
        likeCount.textContent++;
      } else {
        clicked = false;
        this.likes--;
        likeCount.textContent--;
      }
      videoNbrLikes.textContent = `${this.likes}`;
    });

    videoArticle.append(videoFigure);
    videoFigure.append(videoLink, videoFigcaption);
    videoLink.append(videoMedia);
    videoFigcaption.append(videoTitle, videoInfoLikes);
    videoInfoLikes.append(videoNbrLikes, videoLinkHeart);
    videoLinkHeart.append(videoHeart);

    return videoArticle;
  }
}
