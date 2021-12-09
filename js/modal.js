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
    this.userContent = document.querySelectorAll(".user-content");
    this.input = document.querySelectorAll(".user-content");
  }

  launchModal() {
    this.btnContact.addEventListener("click", (event) => {
      this.modalBackground.style.display = "flex";
      this.modalBackground.style.order = "-1";
      this.modalBackground.setAttribute("tabindex", "0");
      this.closeBtn.focus();
      this.ElementFocus();
      event.preventDefault();
    });
    this.input.forEach((input) =>
      input.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          this.modalBackground.style.display = "none";
        }
      })
    );
  }

  closeModal() {
    this.closeBtn.addEventListener("click", (event) => {
      this.modalBackground.style.display = "none";
      this.modalBackground.setAttribute("tabindex", "-1");
      this.btnContact.focus();
      event.preventDefault();
    });
    this.closeBtn.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.modalBackground.style.display = "none";
        this.modalBackground.setAttribute("tabindex", "-1");
        this.btnContact.focus();
        event.preventDefault();
      }
    });
  }

  ElementFocus() {
    this.submitForm.addEventListener("keydown", (event) => {
      if (event.key === "Tab") {
        event.preventDefault();
        this.closeBtn.focus();
      }
    });
    this.submitForm.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        this.modalBackground.style.display = "none";
      }
    });
  }

  submitModal() {
    this.submitForm.addEventListener("click", (event) => {
      this.modalBackground.style.display = "none";
      event.preventDefault();
      console.log("Prénom : " + this.firstName.value);
      console.log("Nom : " + this.lastName.value);
      console.log("Email : " + this.email.value);
      console.log("Message : " + this.message.value);
    });
  }
}
