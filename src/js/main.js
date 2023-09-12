/*Nav mobile*/
const navBtn = document.querySelector(".hamburger");
const navMobile = document.querySelector(".nav-mobile");
const navMobileBottomLinks = document.querySelector(".mobile-bottom-links");
const allNavItems = document.querySelectorAll(".nav-link");

/*Nav desktop dropdown*/
const dropdownBtn = document.querySelector(".dropdown-parent");
const dropdownList = document.querySelector(".dropdown");

/*ScrollSpy*/
const allSections = document.querySelectorAll(".section-anchor");
const allNavLinks = document.querySelectorAll(".bottom-nav-link");

/*Accordion*/
const accordionBtns = document.querySelectorAll(".accordion-btn");

/*Handling display of contact form & call us section*/
const contactFormBtn = document.querySelector(".contact-form-btn");
const callUsBtn = document.querySelector(".call-us-btn");
const formDiv = document.querySelector(".form-div");
const callUsDiv = document.querySelector(".call-us-div");

const handleNav = () => {
    navBtn.classList.toggle("is-active");
    navMobile.classList.toggle("nav-mobile-active");
    navMobileBottomLinks.classList.toggle("mobile-bottom-links-active");
};
const handleMobileNavItems = () => {
    navBtn.classList.remove("is-active");
    navMobile.classList.remove("nav-mobile-active");
};
const handleScroll = () => {
    allSections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let sectionId = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            allNavLinks.forEach((link) => {
                link.classList.remove("bottom-nav-link-active");
                document
                    .querySelector("header nav a[href*=" + sectionId + "]")
                    .parentElement.classList.add("bottom-nav-link-active");
            });
        }
    });
};

function openAccordionItems() {
    if (this.nextElementSibling.classList.contains("active")) {
        this.nextElementSibling.classList.remove("active");
    } else {
        closeAccordionItem();
        this.nextElementSibling.classList.toggle("active");
    }
}

const closeAccordionItem = () => {
    const allActiveItems = document.querySelectorAll(".accordion-info");
    allActiveItems.forEach((item) => item.classList.remove("active"));
};
const clickOutsideAccordion = (e) => {
    if (
        e.target.classList.contains("accordion-btn") ||
        e.target.classList.contains("accordion-info") ||
        e.target.classList.contains("accordion-info-text")
    )
        return;
};
const handleContactDiv = () => {
    contactFormBtn.classList.toggle("btn-active");
    formDiv.classList.toggle("form-active");
    callUsBtn.classList.toggle("btn-active");
    callUsDiv.classList.toggle("call-us-active");
};

navBtn.addEventListener("click", handleNav);

allNavItems.forEach((item) => {
    item.addEventListener("click", handleMobileNavItems);
});

dropdownBtn.addEventListener("click", () => {
    dropdownList.classList.toggle("active");
});

accordionBtns.forEach((btn) =>
    btn.addEventListener("click", openAccordionItems),
);

contactFormBtn.addEventListener("click", handleContactDiv);

callUsBtn.addEventListener("click", handleContactDiv);

window.addEventListener("scroll", handleScroll);

window.addEventListener("click", clickOutsideAccordion);