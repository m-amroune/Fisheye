export class Modal {
  constructor() {
    this.modalBackground = document.querySelector("#background");
    this.btnContact = document.querySelector(".contactMe");
    this.closeBtn = document.querySelector("#close-btn");
    this.submitForm = document.querySelector(".form-submit");
    this.firstName = document.querySelector("#first-name");
    this.lastName = document.querySelector("#last-name");
    this.email = document.querySelector("#email");
    this.message = document.querySelector("#message");

    // this.btnContact.addEventListener("click", () => {
    //   this.modalBackground.style.display = "flex";
    // });

    // this.closeBtn.addEventListener("click", (e) => {
    //   this.modalBackground.style.display = "none";
    //   e.preventDefault();
    // });

    // this.submitForm.addEventListener("click", (e) => {
    //   this.modalBackground.style.display = "none";
    //   console.log("Prénom : " + this.firstName.value);
    //   console.log("Nom : " + this.lastName.value);
    //   console.log("Email : " + this.email.value);
    //   console.log("Message : " + this.message.value);
    //   e.preventDefault();
    // });
  }

  launchModal() {
    this.btnContact.addEventListener("click", () => {
      this.modalBackground.style.display = "flex";
    });
  }
  closeModal() {
    this.closeBtn.addEventListener("click", (e) => {
      this.modalBackground.style.display = "none";
      e.preventDefault();
    });
  }
  submitModal() {
    this.submitForm.addEventListener("click", (e) => {
      this.modalBackground.style.display = "none";
      console.log("Prénom : " + this.firstName.value);
      console.log("Nom : " + this.lastName.value);
      console.log("Email : " + this.email.value);
      console.log("Message : " + this.message.value);
      e.preventDefault();
    });
  }
}
