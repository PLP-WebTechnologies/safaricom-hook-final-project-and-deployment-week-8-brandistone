document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  
    // Form validation
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
        if (validateForm()) {
          alert("Form submitted successfully!")
          contactForm.reset()
        }
      })
    }
  
    // Simple form validation function
    function validateForm() {
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const message = document.getElementById("message").value
  
      if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.")
        return false
      }
  
      if (!isValidEmail(email)) {
        alert("Please enter a valid email address.")
        return false
      }
  
      return true
    }
  
    // Email validation helper function
    function isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    }
  
    // Add fade-in animation to features
    const features = document.querySelectorAll(".feature")
    if (features.length > 0) {
      window.addEventListener("scroll", () => {
        features.forEach((feature) => {
          const featureTop = feature.getBoundingClientRect().top
          const windowHeight = window.innerHeight
          if (featureTop < windowHeight * 0.75) {
            feature.style.opacity = "1"
            feature.style.transform = "translateY(0)"
          }
        })
      })
    }
  })
  
  