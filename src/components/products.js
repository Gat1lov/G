export const products = [
    {
        id: 1, 
        done: true,
        photo: require('../images/russia.svg'),
        name: 'Journey through Russia',
        goal: 'To create a responsive website that demonstrates core frontend development skills, including the use of modern approaches to layout and code organization.',
        description: 'The "Journey through Russia" project is a single-page website that adapts to various screen sizes. The primary focus is on creating a visually pleasing experience for users, regardless of the device they are using to view the page.',
        features: ['Responsiveness: The website displays correctly on various devices, from mobile phones to widescreen monitors. Content resizes without compromising the design quality.',
            'Attractive interface: The website’s appearance remains aesthetic and user-friendly at any screen resolution.'],
        technologies: ['BEM methodology: Organizing the project’s file structure according to BEM for easier maintenance and scalability.',
            'Media queries: Implementing responsiveness using CSS media queries to handle different breakpoints.',
            'Cross-browser compatibility: Testing and optimizing the website for proper functionality across different browsers.'
        ],
        stack: [
            'HTML',
            'CSS',
        ],
        link: 'https://github.com/Gat1lov/travel-russia'
    },
    {
        id: 2,
        done: true,
        photo:  require('../images/howtolearn.svg'),
        name: 'Learning How to Learn',
        goal: 'To master basic layout elements and create a functional website showcasing the core features of HTML, CSS, and responsive design approaches.',
        description: 'The "Learning How to Learn" project is a web page designed to introduce essential tools and methods required for modern website development. It serves as an excellent example of a foundational project aimed at strengthening fundamental web development skills.',
        features: ['Video Playback: The ability to play embedded videos from other platforms (e.g., YouTube).',
            'Basic Animations: Implementation of simple CSS animations to enhance the visual appeal of the website.',
            'Navigation to External Resources: Adding links for navigating to external websites.'
        ],
        technologies: ['BEM Methodology: Structuring the project according to BEM principles, making it easier to locate blocks, elements, or modifiers, and simplifying code maintenance and development.',
            'Semantic Markup: Using semantic tags to ensure proper structure and accessibility of the web page.'
        ],
        stack: [
            'HTML',
            'CSS'
        ],
        link: 'https://github.com/Gat1lov/How-to-learn'
    },
    {
        id: 3, 
        done: true,
        photo: require('../images/kusto.svg'),
        name: 'Mesto',
        goal: 'To create an interactive web service using JavaScript, allowing users to share photos, like them, and manage their profiles. This project aims to enhance skills in JavaScript, modular architecture, and API integration.',
        description: 'The "Mesto" project is an interactive webpage built with modern web technologies. Through this project, you will implement JavaScript functionalities to develop a complete photo-sharing service.',
        features: ['Card Management: Adding new photos, deleting them, and liking them.',
            'Modal Windows: Implementing pop-ups for profile editing, adding new cards, and viewing enlarged images.',
            'Form Validation: Ensuring correct data entry through form validation.',
            'API Integration: Connecting to a server to fetch and submit data.',
            'Project Deployment: Hosting the finished application on a server for demonstration.',
        ],
        technologies:['JavaScript (ES6+): Working with classes, event listeners, and DOM manipulation.',
            'Modular Architecture: Structuring code into modules for improved readability and maintainability.',
            'Webpack: Setting up a development environment for project bundling, including code transpilation and optimization.',
            'API: Integrating a server interface to handle dynamic data.',
            'Deployment: Publishing the project on a platform to showcase its functionality.',
        ],
        stack: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        link: 'https://github.com/Gat1lov/mesto-project-ff'
    },
    {
        id: 4, 
        done: true,
        photo: require('../images/larek.svg'),
        name: 'WEB-Larek',
        goal: 'To develop an interactive web application for an online store with functionality for cart management, order processing, and user-friendly modal windows.',
        description: 'The "WEB-Larek" project is an online store that includes features for browsing products, managing the cart, and placing orders. This project covers key aspects of web development, including working with modals, form validation, and state management.',
        features:['Product catalog with the ability to view available items.',
            'Product Modal: Displays detailed information about a product when its card is clicked.',
            'Cart Modal: Opens a list of added products when the cart icon is clicked.',
            'Detailed product information, including description and price.',
            'Add to Cart: A "Buy" button adds the product to the cart if it isn’t already there.',
            'Remove from Cart: A "Remove" button deletes the product from the cart.',
            'Buttons to proceed to the next step activate only after all required actions are completed (e.g., form completion or product selection).',
        ],
        technologies: ['JavaScript (ES6+): Implementing interactive functionality, managing cart state, and validating form data.',
            'Modular Code Structure: Organizing components for easy maintenance and scalability.',
            'Data Validation: Ensuring correct input for delivery addresses, contact details, and other required fields.',
            'UX/UI Design: Creating an intuitive interface with seamless interaction through modal windows.'
        ],
        stack: [
            'TypeScript',
            'HTML',
            'SCSS',
            'JavaScript'
        ],
        link: 'https://github.com/Gat1lov/web-larek-frontend'
    },
    {
        id: 5, 
        done: true,
        photo: require('../images/blog.svg'),
        name: 'Blog Customizer',
        goal: 'To create a functional tool for blog customization with an interactive settings panel built on component-based architecture. This project strengthens skills in state management, event handling, and data flow between components.',
        description: 'The "Blog Customizer" project is an interactive blog web page enhanced with a sidebar settings panel. Users can modify article styles, manage settings through a form, and apply or reset changes. The focus is on implementing component interaction logic and state management using React.',
        features: ['Opening and Closing the Settings Panel: The panel opens when the arrow icon is clicked. It closes upon a second click on the arrow or when clicking outside the panel.',
            'Styling Options: Changes made through the form are not immediately applied.',
            'Apply Button: Applies the selected styles to the article.',
            'Reset Button: Resets settings to default values specified when the page loads.',
            'Style Management: Styling is managed using CSS variables linked to the page’s existing styles.'
        ],
        technologies: ['React (Hooks): Utilizing useState and useEffect for managing state and component interactions.',
            'CSS Variables: Dynamically applying styles to the page.',
            'Storybook: Testing and previewing components.',
            'Component Composition: Modularizing logic for easier maintenance and scalability.',
            'State Management: Locally storing form and style states while syncing changes.',
        ],
        stack: [
            'TypeScript',
            'SCSS',
            'JavaScript'
        ],
        link: 'https://github.com/Gat1lov/blog-customizer'
    },
    {
        id: 6, 
        done: true,
        photo: require('../images/burgers.svg'),
        name: 'Stellar Burgers',
        goal: 'Develop the "Stellar Burgers" application, enabling users to build space-themed burgers, place orders, and manage personal accounts. The focus is on utilizing Redux for global state management, implementing routing, authentication, and writing integration and unit tests to ensure application stability.',
        description: 'The "Stellar Burgers" is a web application that combines an intuitive interface and robust functionality to create a unique user experience in assembling and ordering space-themed burgers. The project focuses on modern development practices such as state management with Redux, component-based architecture, and extensive testing to ensure the app’s stability and performance. It showcases skills in creating dynamic applications with real-time user interactions, modular design, and scalable codebase structures. The development process emphasizes both frontend expertise and thorough testing, ensuring a polished and reliable product.',
        features:['Adding Ingredients: Users can add buns and fillings to the constructor.',
            'Viewing Ingredient Details: A modal displays detailed information about the ingredient.',
            'Placing Orders: Users assemble a burger and click "Place Order," triggering a modal with the order number.',
            'Register new users.',
            'Login with token-based authentication.',
            'Protect the personal account via PrivateRoute.',
            'Edit user information.',
            'View order history.',
            'Tests for the burger constructor page are written in "constructor.cy.tsx."',
            'Mock Data: ingredients.json and API response mocks are prepared.',
            'Adding Ingredients: Validate the addition of buns and fillings to the constructor.',
            'Testing the rootReducer: Verify proper initialization of the global state.',
            'Validate action handling: add ingredient, remove ingredient, reorder ingredients.'
        ],
        technologies: ['React + Redux: State management with Redux Toolkit.',
            'React Router: Implementing routes, including private routes for user accounts.',
            'Cypress: Writing integration tests for end-to-end user scenarios.',
            'Jest: Writing unit tests for reducers and actions.',
        ],
        stack: [
            'TypeScript',
            'MDX',
            'CSS',
            'JavaScript',
            'HTML'
        ],
        link: 'https://github.com/Gat1lov/stellar-burger'
    }
];
