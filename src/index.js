import '../src/styles/index.css';
import { products } from '../src/components/products';
import { languageColors } from '../src/components/languageColors';
import { productsList, birthDate, header, productsTitle, scrollButton } from './components/constants';
import { openPopup, closePopup, setupProductPopup} from './components/popup';

window.addEventListener('load', () => {
    document.body.classList.add('page--loaded');
});

scrollButton.innerHTML = '<span class="scroll-button__text">G</span>';
scrollButton.classList.add('scroll-button');

document.body.appendChild(scrollButton);

window.addEventListener('scroll', function () {
    const productsPosition = productsTitle.getBoundingClientRect().top;

    if (productsPosition < 0) {
        scrollButton.classList.add('show');
    } else {
        scrollButton.classList.remove('show');
    }
});

scrollButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelector('.header__tab-text[href="#about-me"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#about-me').scrollIntoView({
        behavior: 'smooth'
    });
});

products.forEach(product => {
    const productElement = document.createElement('li');
    productElement.classList.add('products__element');

    productElement.innerHTML = `
        <img class="products__photo" src="${product.photo}" alt="${product.name}">
        <div class="products__text-block">
            <h3 class="products__name">${product.name}</h3>
            <p class="products__description">${product.description}</p>
            <button class="products__more-info" id="${product.id}">ℹ️</button>
            <div class="products__stack"></div>
        </div>
    `;

    const stackContainer = productElement.querySelector('.products__stack');
    product.stack.forEach(language => {
        const languageElement = document.createElement('span');
        languageElement.classList.add('products__stack-item');

        const colorCircle = document.createElement('span');
        colorCircle.classList.add('products__language-circle');
        colorCircle.style.backgroundColor = languageColors[language] || '#000';

        languageElement.appendChild(colorCircle);
        languageElement.appendChild(document.createTextNode(language));

        stackContainer.appendChild(languageElement);
    });

    productsList.appendChild(productElement);

    const moreInfoButton = productElement.querySelector('.products__more-info');
    moreInfoButton.addEventListener('click', () => {
        setupProductPopup(product);
    });
});

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

window.addEventListener('load', () => {
    const age = calculateAge(birthDate);
    const ageElement = document.getElementById('age');

    if (ageElement) {
        ageElement.textContent = age;
    }
});