const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(faqItem => {
  const questionBtn = faqItem.querySelector('.faq-question');
  const answer = faqItem.querySelector('.faq-answer');

  questionBtn.addEventListener('click', () => {
    faqItem.classList.toggle('active'); // Toggle active class

    answer.style.maxHeight = faqItem.classList.contains('active') ? `${answer.scrollHeight}px` : '0px'; // Set max-height dynamically based on content
  });
});
