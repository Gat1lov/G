import { socialBtn, popupSocial, closeBtnSocial, popupProduct, scrollButton, popupResume, resumeBtn, closeBtnResume, popupSmtng, sometingBtn, closeBtnSomething, sphereContainer } from '../components/constants';
import {initSphereAnimation, clearSphere} from '../components/sphere';
import { languageColors } from '../components/languageColors';

export function openPopup(popup) {
    popup.classList.add('visible');
    document.body.style.overflow = 'hidden';

    const sphereContainer = popup.querySelector('.popup__sphere-container');
    if (sphereContainer) {
        initSphereAnimation(sphereContainer);
    }

    if (scrollButton) {
        scrollButton.style.display = 'none';
    }

    document.addEventListener('keydown', handleEscClose);
    popup.addEventListener('click', handleOverlayClick);
}

export function closePopup(popup) {
    popup.classList.remove('visible');
    document.body.style.overflow = '';

    const sphereContainer = popup.querySelector('.popup__sphere-container');
    if (sphereContainer) {
        clearSphere(sphereContainer);
    }

    if (scrollButton) {
        scrollButton.style.display = 'block';
    }

    document.removeEventListener('keydown', handleEscClose);
    popup.removeEventListener('click', handleOverlayClick);
}

function handleEscClose(event) {
    if (event.key === 'Escape') {
        const activePopup = document.querySelector('.popup.visible');
        if (activePopup) {
            closePopup(activePopup);
        }
    }
}

function handleOverlayClick(event) {
    const popupContent = event.target.querySelector('.popup__popup-content');
    if (popupContent && event.target !== popupContent && !popupContent.contains(event.target)) {
        const activePopup = document.querySelector('.popup.visible');
        if (activePopup) {
            closePopup(activePopup);
        }
    }
}


socialBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openPopup(popupSocial);
});

closeBtnSocial.addEventListener('click', () => {
    closePopup(popupSocial);
});

resumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openPopup(popupResume);
});

closeBtnResume.addEventListener('click', () => {
    closePopup(popupResume);
});

sometingBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openPopup(popupSmtng);
});

closeBtnSomething.addEventListener('click', () => {
    closePopup(popupSmtng);
});

export function setupProductPopup(product) {
    const popupContent = document.getElementById('popup-product-content');
    popupContent.innerHTML = `
    <h2 class="popup__title popup_product-title">${product.name}</h2>
    
    <h3 class="popup__subtitle">Project goal:</h3>
    <p class="popup__section-text">${product.goal}</p>
    
    <h3 class="popup__subtitle">Description:</h3>
    <p class="popup__section-text">${product.description}</p>
    
    <h3 class="popup__subtitle">Features:</h3>
    <ul class="popup__section-text">
        ${product.features.map(feature => `<li class="popup__list-item">${feature}</li>`).join('')}
    </ul>
    
    <h3 class="popup__subtitle">Technologies and Approaches used:</h3>
    <ul class="popup__section-text">
        ${product.technologies.map(technology => `<li class="popup__list-item">${technology}</li>`).join('')}
    </ul>
    
    <p class="popup__stack">Stack and link:</p>
    <div class="popup__stack-link-container">
        <div class="popup__stack-elements" id="popup_product-stack"></div>
        <button class="popup__git-link">GitHub &rarr;</button>
    </div>
    <p class="popup__product-done"></p>
`;


    const stackContainer = popupContent.querySelector('#popup_product-stack');

    product.stack.forEach(language => {
        const languageElement = document.createElement('span');
        languageElement.classList.add('popup__stack-element');

        const colorCircle = document.createElement('span');
        colorCircle.classList.add('popup__language-circle');
        colorCircle.style.backgroundColor = languageColors[language] || '#000';

        languageElement.appendChild(colorCircle);
        languageElement.appendChild(document.createTextNode(language));
        stackContainer.appendChild(languageElement);
    });

    const doneElement = popupContent.querySelector('.popup__product-done');
    if (product.done) {
        doneElement.classList.add('popup_product-true');
        doneElement.textContent = 'Finished';
    } else {
        doneElement.classList.add('popup_product-false');
        doneElement.textContent = 'Not finished';
    }

    const gitLinkButton = popupContent.querySelector('.popup__git-link');
    gitLinkButton.addEventListener('click', () => {
        window.open(product.link, '_blank');
    });

    const closeButton = document.createElement('span');
    closeButton.classList.add('popup__close-btn');
    closeButton.classList.add('popup_close-btn-products');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', () => {
        closePopup(popupProduct);
    });

    popupContent.appendChild(closeButton);

    openPopup(popupProduct);
}

