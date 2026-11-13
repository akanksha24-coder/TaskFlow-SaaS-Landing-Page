// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

// Close the mobile menu after selecting a section
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

// Pricing period toggle
const billingOptions = document.querySelectorAll(".billing-option");
const proPrice = document.querySelector(".featured-plan .price strong");
const proPeriod = document.querySelector(".featured-plan .price span");

billingOptions.forEach((option) => {
  option.addEventListener("click", () => {
    billingOptions.forEach((item) => item.classList.remove("active"));
    option.classList.add("active");

    const yearly = option.dataset.period === "yearly";
    proPrice.textContent = yearly ? proPrice.dataset.yearly : proPrice.dataset.monthly;
    proPeriod.textContent = yearly ? "/ user / month, billed yearly" : "/ user / month";
  });
});

// Demo form validation and success feedback (front-end only)
const demoForm = document.getElementById("demoForm");
const formMessage = document.getElementById("formMessage");
const formFields = demoForm.querySelectorAll("input, select");

demoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "";
  formMessage.className = "form-message";

  let isValid = true;
  formFields.forEach((field) => {
    field.classList.remove("invalid");
    if (!field.checkValidity()) {
      field.classList.add("invalid");
      isValid = false;
    }
  });

  if (!isValid) {
    formMessage.textContent = "Please enter a valid name, email, and team size.";
    formMessage.classList.add("error");
    const firstInvalid = demoForm.querySelector(".invalid");
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  const name = document.getElementById("fullName").value.trim();
  formMessage.textContent = `Thanks, ${name}! Your demo request has been recorded for this preview.`;
  formMessage.classList.add("success");
  demoForm.reset();
  formFields.forEach((field) => field.classList.remove("invalid"));
});

// Keep the copyright year current
document.getElementById("year").textContent = new Date().getFullYear();
