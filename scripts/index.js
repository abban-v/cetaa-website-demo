const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

const navbar=document.querySelector("div.navbar");
const divsInNavbar=navbar.querySelectorAll("div");

// The extracted image URLs
const images = [
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/128934b116d07990c35c830a57679b36.jpg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/b5dac6c373cc0cd50ce03f4f6c960a0c.jpg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/10e85c5a90129ab7e9fc30a600621868.jpg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/eb9ccece30c4eeeb236ded1f49bf2f9d.jpg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/e50b6bb544e2658938f6b4676d8804c0.jpg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/3b9b277c5c0821f85ef9f80f85283611.jpg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/52fabbb7ce414d42846a16edd2df5dc8.jpg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/8d4c18e605957960128444238d93b1ca.png",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/dd891e9d1f87a9039a45bdd8ca01877d.JPG",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/973274f7796b8aaced6f1a15418bd7c4.JPG",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/3a080d36e513b90ff4c08551f77de513.jpg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/ee6d14bd08dceb2a833747b5d17a1e02.jpg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/3b90fc4a167e7f8c2f88dbed4e1fa1ec.jpg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/4d17490cce81639310b13cff5fbffd8b.jpeg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/3d9e24b4cf912d11951e8d628bbf0069.jpeg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/affc3a38558fb4b4d8e3dd9662890484.JPG",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/959030a0f7522632ad162e87e404cf0c.jpeg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/2bb3c63b4a81b325702209a5f61b20e4.jpg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/5e3231a4b7cf0563829147b01d7fc205.jpg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/dc6b7e170a3229765a63b4d05696a70c.jpg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/a4ab53289bd0a1949c4535374694dd98.jpg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/00dca1f0567f08c0d72b965d62e37714.jpeg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/5bf6f7b1a4fb533b7535b9d928a635fc.jpg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/e7bc5709d824ede6f1c709bc08127069.jpeg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/3187133df65d2688e3c429951757fb4e.jpeg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/1d69be3922e5dce12742d3fe5aeb77ed.jpg",
    "https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/67c552d47f0556f1972e3495cf6805a5.jpeg"
];

const container = document.querySelector("div.slideshow-container")
let currentIndex = 0;
images.forEach((src, index) => {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    if (index === 0) {
        slide.classList.add('active');
    }
    slide.style.backgroundImage = `url('${src}')`;
    container.appendChild(slide);
});

const slides = document.querySelectorAll('.slide');
function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].classList.add('active');
}
setInterval(showNextSlide, 5000);


const hiddenElements = document.querySelectorAll('.scroll-text');

hiddenElements.forEach((el) => observer.observe(el));