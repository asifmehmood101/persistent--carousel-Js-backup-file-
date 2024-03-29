const PERSISTENTAPP = {
    carouselNav: document.querySelectorAll('.nav-container li a'),
    navContainer: document.querySelector('.forceAsyncCarouselIndicator'),
    arrowContainer: document.createElement('div'),
    arrowLeftButton: document.createElement('button'),
    arrowRightButton: document.createElement('button'),
};
window.PERSISTENTAPP = PERSISTENTAPP;

function slideCarousel(direction) {
    const allCarouselItems = [...PERSISTENTAPP.carouselNav];
    const selected = document.querySelector('.nav-container li a.selected');
    let selectedIndex = allCarouselItems.indexOf(selected);

    if(direction === 'left'){
        if (selectedIndex > 0) {
            allCarouselItems[selectedIndex - 1].click();
        } else {
            allCarouselItems[allCarouselItems.length - 1].click();
        }
    }else{
        if (selectedIndex < allCarouselItems.length - 1) {
            allCarouselItems[selectedIndex + 1].click();
        } else {
            allCarouselItems[0].click();
        }
    }
}

setTimeout(function () {
    //Create Arrows and add to navContainer
    PERSISTENTAPP.arrowContainer.classList.add('arrowContainer');

    PERSISTENTAPP.arrowLeftButton.innerHTML = `<svg width="20" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="left">
                            <path d="M8.25987 0.648315H6.35987L0.359863 8.50831L6.35987 16.3683H8.25987L2.23986 8.50831L8.25987 0.648315Z" fill="#424447" />
                            </svg>`;
    PERSISTENTAPP.arrowRightButton.innerHTML = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="right">
                            <path d="M11.1998 4.64832H9.31982L15.3198 12.5083L9.31982 20.3683H11.1998L17.1998 12.5083L11.1998 4.64832Z" fill="#FDFEFF"/>
                        </svg>`;

    PERSISTENTAPP.arrowLeftButton.classList.add('arrowLeft');
    PERSISTENTAPP.arrowRightButton.classList.add('arrowRight');
    PERSISTENTAPP.arrowContainer.appendChild(PERSISTENTAPP.arrowLeftButton);
    PERSISTENTAPP.arrowContainer.appendChild(PERSISTENTAPP.arrowRightButton);
    PERSISTENTAPP.navContainer.appendChild(PERSISTENTAPP.arrowContainer);

    // Add Click-Handlers
    PERSISTENTAPP.arrowLeftButton.addEventListener('click', function () {
        slideCarousel('left');
    });
    PERSISTENTAPP.arrowRightButton.addEventListener('click', function () {
        slideCarousel('right');
    });

    // Start interval
    setInterval(function () {
        if(isElementFullyVisible(PERSISTENTAPP.navContainer)){
            slideCarousel('right');
        }
    }, 6000);
}, 500);

function isElementFullyVisible (element) {
	var position = element.getBoundingClientRect();

	// Is fully visible?
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
        return true;
	}else{
        return false;
    }

    /* Example for partially visible
        // if(position.top < window.innerHeight && position.bottom >= 0) {
    */
}