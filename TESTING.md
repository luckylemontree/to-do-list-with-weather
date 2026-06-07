# To-Do List with Weather API – Testing & Validation Report

This document outlines the testing process and validation results for the To-Do List with Weather API website. Validation was carried out using W3C validation tools, ESLint, Lighthouse audits, and manual accessibility and responsiveness checks.

---

## Table of Contents

- [HTML Validation](#html-validation)
- [CSS Validation](#css-validation)
- [JavaScript Validation](#javascript-validation)
- [Colour Accessibility](#colour-accessibility)
- [Accessibility Testing](#accessibility-testing)
- [Responsive Testing](#responsive-testing)
- [Lighthouse Testing Summary](#lighthouse-testing-summary)
- [Conclusion](#conclusion)

---

## HTML Validation

The main page was validated using the [W3C HTML Validator](https://validator.w3.org/). No critical HTML errors were found.

### Validation Evidence

**index.html**

![HTML Validation](https://github.com/luckylemontree/to-do-list-with-weather-API/blob/main/assets/images/validator/validation%20index%20html.png)

![HTML Validation Detail](https://github.com/luckylemontree/to-do-list-with-weather-API/blob/main/assets/images/validator/validationhtml.png)

---

## CSS Validation

The custom stylesheet was tested using the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/). No errors were detected. Any warnings were related to vendor prefixes (`-webkit-backdrop-filter`) used for Safari compatibility, which are acceptable for cross-browser support.

### Validation Evidence

**assets/css/style.css**

![CSS Validation](https://github.com/luckylemontree/to-do-list-with-weather-API/blob/main/assets/images/validator/validation%20css.png)

---

## JavaScript Validation

JavaScript code quality was checked using [ESLint](https://eslint.org/) with recommended settings. The project also uses [JSHint](https://jshint.com/) for additional inline validation.

### Validation Evidence

**assets/js/script.js**

![JavaScript Validation](https://github.com/luckylemontree/to-do-list-with-weather-API/blob/main/assets/images/validator/Javascript%20validator.png)

### ESLint Summary

| File | Errors | Warnings |
|------|--------|----------|
| `assets/js/script.js` | 0 | 0 |
| `eslint.config.mjs` | 0 | 0 |

All JavaScript files passed linting successfully with 0 problems detected.

---

## Colour Accessibility

Colour contrast was checked to ensure text and UI elements meet WCAG accessibility guidelines.

### Validation Evidence

![Colour Accessibility Check](https://github.com/luckylemontree/to-do-list-with-weather-API/blob/main/assets/images/validator/colorCheck.png)

### Notes

- The frosted glass panels use semi-transparent white overlays — contrast was verified against the range of background images
- Orange accent colour (`#f77512`) was checked against white text for button readability

---

## Accessibility Testing

Accessibility testing was carried out using a combination of Lighthouse audits and manual checks.

The following checks were performed:

- Keyboard navigation using the `Tab` key through all interactive elements
- Visible focus states for buttons, inputs, and links
- `alt` text provided for all images (weather icons, task icons)
- Labels correctly associated with form inputs (brightness slider uses `visually-hidden` label)
- Logical heading hierarchy — single `h1` on the page
- ARIA attributes used where appropriate
- Colour contrast reviewed for text over frosted glass backgrounds

---

## Responsive Testing

The website was tested across multiple screen sizes using browser developer tools to ensure consistent layout and usability.

### Breakpoints Tested

| Breakpoint | Width | Result |
|------------|-------|--------|
| Mobile (small) | 320px | ✅ Pass |
| Mobile | 375px | ✅ Pass |
| Small devices | 576px | ✅ Pass |
| Tablets | 768px | ✅ Pass |
| Small desktops | 992px | ✅ Pass |
| Large desktops | 1200px | ✅ Pass |
| Extra large | 1400px | ✅ Pass |

### Responsive Evidence

![Responsive Design](https://github.com/luckylemontree/to-do-list-with-weather-API/blob/main/assets/images/validator/responsive.png)

### Responsive Behaviour Notes

- On mobile, the weather panel stacks below the to-do list
- Header toolbar buttons scale down and reposition for small screens
- Colour picker popups are fixed at `left: 20px` to prevent off-screen overflow on any device
- Brightness slider adjusts its position on screens narrower than 500px

---

## Lighthouse Testing Summary

Google Lighthouse was used to audit Performance, Accessibility, Best Practices, and SEO. Tests were run in a private browser window to minimise the impact of extensions.

Minor performance warnings were mainly related to image sizes (background `.webp` files) and third-party resources (Bootstrap CDN, Font Awesome kit, Google Fonts), which are acceptable for a static project.

Accessibility, Best Practices, and SEO scores were consistently high, confirming the site meets modern front-end standards.

---

### Desktop Results

![Desktop Lighthouse 1](https://github.com/luckylemontree/to-do-list-with-weather-API/blob/main/assets/images/validator/lighthouse1.png)

![Desktop Lighthouse 2](https://github.com/luckylemontree/to-do-list-with-weather-API/blob/main/assets/images/validator/lighthouse2.png)

![Desktop Lighthouse 3](https://github.com/luckylemontree/to-do-list-with-weather-API/blob/main/assets/images/validator/lighthouse3.png)

![Desktop Lighthouse 4](https://github.com/luckylemontree/to-do-list-with-weather-API/blob/main/assets/images/validator/lighthouse4.png)

![Desktop Lighthouse 5](https://github.com/luckylemontree/to-do-list-with-weather-API/blob/main/assets/images/validator/lighthouse5.png)

![Desktop Lighthouse 6](https://github.com/luckylemontree/to-do-list-with-weather-API/blob/main/assets/images/validator/lighthouse6.png)

---

### Mobile Results

![Mobile Lighthouse 1](https://github.com/luckylemontree/to-do-list-with-weather-API/blob/main/assets/images/validator/Mlighthouse1.png)

![Mobile Lighthouse 2](https://github.com/luckylemontree/to-do-list-with-weather-API/blob/main/assets/images/validator/Mlighthouse2.png)

![Mobile Lighthouse 3](https://github.com/luckylemontree/to-do-list-with-weather-API/blob/main/assets/images/validator/Mlighthouse3.png)

![Mobile Lighthouse 4](https://github.com/luckylemontree/to-do-list-with-weather-API/blob/main/assets/images/validator/Mlighthouse4.png)

![Mobile Lighthouse 5](https://github.com/luckylemontree/to-do-list-with-weather-API/blob/main/assets/images/validator/Mlighthouse5.png)

---

## Conclusion

The To-Do List with Weather API website meets validation, accessibility, and responsiveness requirements appropriate for a static HTML, CSS, and JavaScript project.

- `index.html` validated successfully with no critical HTML errors
- `style.css` validated with no CSS errors; vendor-prefix warnings are acceptable
- `script.js` passed ESLint and JSHint with 0 errors
- Colour contrast was reviewed and meets WCAG guidelines across backgrounds
- The page is keyboard navigable with visible focus states
- Responsive layout confirmed across all major breakpoints
- Lighthouse scores confirm the site is accessible, follows best practices, and is SEO-friendly across desktop and mobile
