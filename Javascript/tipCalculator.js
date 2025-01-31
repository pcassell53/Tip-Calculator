// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    easing: 'ease-out-back',
    duration: 800,
    delay: 300,
    disable: 'mobile'
});
// const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;
// menuBtn.addEventListener('click', () => {
//     if (!menuOpen) {
//         menuBtn.classList.add('open');
//         menuOpen = true;
//     } else {
//         menuBtn.classList.remove('open');
//         menuOpen = false;
//     }
// });

document.getElementById("billAmount").addEventListener("input", calculateTip);
document.getElementById("tipPercentage").addEventListener("input", calculateTip);
document.getElementById("numPeople").addEventListener("input", calculateTip);

function calculateTip() {
    var billAmount = parseFloat(document.getElementById('billAmount').value);
    var tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    var numPeople = parseInt(document.getElementById('numPeople').value);

    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numPeople) || billAmount <= 0 || tipPercentage < 0 || numPeople <= 0) {
        updateElementWithFade('tipAmount', '0.00');
        updateElementWithFade('totalPerPerson', '0.00');
        return;
    }

    var tipAmount = billAmount * (tipPercentage / 100);
    var totalPerPerson = (billAmount + tipAmount) / numPeople;

    // Update the elements with fade-in-out effect
    updateElementWithFade('tipAmount', tipAmount.toFixed(2));
    updateElementWithFade('totalPerPerson', totalPerPerson.toFixed(2));
}

function updateElementWithFade(id, value) {
    var element = document.getElementById(id);
    element.classList.add('fade-out'); // Add fade-out effect
    setTimeout(function() {
        element.textContent = value; // Update the value
        element.classList.remove('fade-out'); // Remove fade-out effect
    }, 300); // Adjust this time to match the transition duration
}