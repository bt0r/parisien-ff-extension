const observerConfig = {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
};

const unblurify = () => {
    console.log('Unblurifing...');
    document.querySelectorAll('section.content').forEach((el) => el.style.filter = 'none');
    const offer = document.querySelector('[id^=offer-]');
    if (offer) {
        offer.style.display = 'none';
    }
};

const observer = new MutationObserver(unblurify);
observer.observe(document, observerConfig);


