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
  }

  launchModal() {
    this.btnContact.addEventListener("click", (e) => {
      this.modalBackground.style.display = "flex";
      this.modalBackground.setAttribute("tabindex", "0");
      this.closeBtn.focus();
      this.closeBtn.focus();
      this.ElementFocus();
    });
  }
  closeModal() {
    this.closeBtn.addEventListener("click", (e) => {
      this.modalBackground.style.display = "none";
      this.modalBackground.setAttribute("tabindex", "-1");
      this.closeBtn.focus();
      this.ElementFocus();
      e.preventDefault();
    });
    this.closeBtn.addEventListener("keydone", (event) => {
      if (event.key === "Escape") {
        this.modalBackground.style.display = "none";
        this.modalBackground.setAttribute("tabindex", "-1");
        this.closeBtn.focus();
        this.ElementFocus();
        e.preventDefault();
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
