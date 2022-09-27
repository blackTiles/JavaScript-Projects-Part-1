window.addEventListener('load', createFaq);

const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");

function createFaq() {
  faqData.forEach(function(data){
    // creating faq
    let faq = document.createElement("div");
    faq.setAttribute("class", "faq");
    faq.setAttribute("id", `faq-number-${data.id}`);

    // faq header 
    let faqheader = document.createElement("div");
    faqheader.setAttribute("class", "faq_header");

    // creating h3 
    let heading3 = document.createElement("h3");
    heading3.innerText = data.question;

    // creating para 
    let para = document.createElement("p");
    para.innerText = data.answer;

    // creating button 
    let show_btn = document.createElement("button");
    show_btn.setAttribute("class", "show_btn");
    show_btn.innerText = "+";

    // appending all 
    faqheader.appendChild(heading3);
    faqheader.appendChild(show_btn);
    faq.appendChild(faqheader);
    faq.appendChild(para);
    accordianBody.appendChild(faq);

    // button onclick events 
    show_btn.addEventListener("click",() => {
      let faq = document.querySelector(`#faq-number-${data.id}`);
      if (faq.style.height=="100%"){
        faq.style.height = "30px";
        faq.style.overflow = "hidden";
        show_btn.innerText = "+";
      }
      else{
        show_btn.innerText = "-";
        faq.style.height = "100%";
        faq.style.overflow = "visible";
      }
    });
  });
}






