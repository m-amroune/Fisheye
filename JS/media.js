// Creation class MediaFactory
export class MediaFactory {
  constructor(type, mediaObject) {
    if (type === "image") {
      return new Image(mediaObject);
    } else if (type === "video") {
      return new Video(mediaObject);
    }
  }
}

class Image {
  constructor(mediaObject) {
    this.id = mediaObject.id;
    this.photographerId = mediaObject.photographerId;
    this.title = mediaObject.title;
    this.image = mediaObject.image;
    this.tags = mediaObject.tags;
    this.likes = mediaObject.likes;
    this.date = mediaObject.date;
    this.price = mediaObject.price;
  }
}

class Video {
  constructor(mediaObject) {
    this.id = mediaObject.id;
    this.photographerId = mediaObject.photographerId;
    this.title = mediaObject.title;
    this.video = mediaObject.image;
    this.tags = mediaObject.tags;
    this.likes = mediaObject.likes;
    this.date = mediaObject.date;
    this.price = mediaObject.price;
  }
}
