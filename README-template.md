## Overview

### The challenge

Users should be able to:

- See hover states for interactive elements

### Links

- Solution URL: [Add solution URL here](https://order621.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flex
- CSS Grid
- Mobile-first workflow
- javascript

### What I learned

this project helps me to work friendly with SVG picture backgrounds
1]mixing svg picture backgrounds with background color
2]positioning svg background to y-offset according to design image
3]adding slightly box shadows to buttons and grid

```css
.grid1x2 {
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.1); /*box-shadow: h-offset v-offset blur spread color */
}
```

```css
@media screen and (min-width: 800px) {
  .center {
    display: flex;
    justify-items: center;
    background: url(./images/pattern-background-desktop.svg) no-repeat top;
    background-size: contain;
    background-position-y: -30%;
    background-color: var(--color-secondary);

    justify-content: center;
    align-items: center;
    height: 100vh;
    max-width: 100vw;
  }
}
```

i added a little bit of javascript to spice things up ,when the user click on change the subscribe choice is changing.

```js
function showPlan(currentItem) {
  const item = subscribe[currentItem];
  headText.textContent = item.head;
  price.textContent = item.price;
}
```

## Author

- Website - [yishak abrham](https://app.netlify.com/teams/yishak621/overview)
- Frontend Mentor - [@yishak621](https://www.frontendmentor.io/profile/yishak621)
