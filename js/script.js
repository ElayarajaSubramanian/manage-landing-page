const testimonialBox = document.querySelectorAll(".testimonial__box");
const indicators = document.querySelectorAll(".testimonial__indicatorbtn");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
  });
});

observer.observe(testimonialBox);
