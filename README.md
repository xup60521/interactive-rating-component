# **Frontend Mentor Challenge - Interactive rating component**

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI "https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI").

## Table of contents

- [Overview](#overview)

- [My process](#my-process)

   - [Built with](#built-with)

   - [What I learned](#what-i-learned)

        - [Typescript support](#typescript-support)

        - [Interactivity](#interactivity)
        
        - [Card transition animation using GSAP](#card-transition-animation-using-gsap)

- [Resources](#resources)

## Overview

Users should be able to:

- View the optimal layout for the app depending on their device's screen size

- See hover states for all interactive elements on the page

- Select and submit a number rating

- See the "Thank you" card state after submitting a rating

Links:

- GitHub Repo: <https://github.com/xup60521/interactive-rating-component>

- Website: <https://xup60521.github.io/interactive-rating-component/>

```bash
# install dependencies
pnpm install
# start vite dev server
pnpm run dev
# build (output path /dist)
pnpm run build
```

## My process

### Built with

- Semantic HTML5 markup

- TailwindCSS

- Vite - for bundling assets

- GSAP - for animation

### What I learned

#### Typescript support

Vite's built in Typescript support helps a lot, so I didn't need to check the document every few minutes.

#### Interactivity

Since I didn't use a framework, I must manully the interactivity. When clicking a rate button, for example, 4, other button should return to its default style while the `4` button should change to its active state. I looped over these element. Whenever a button is clicked, it triggers a function `onRate`

```
const rateBtns = ["rate-1", "rate-2", "rate-3", "rate-4", "rate-5"].map((d) =&gt;
    document.getElementById(d)
);
function onRate(index: number) {
    rateBtns.forEach((item, i) =&gt; {
        if (i !== index) {
            item?.classList.remove("bg-white");
            item?.classList.add("bg-[#323840]");
            item?.classList.remove("text-c_Dark_Blue");
            item?.classList.add("text-c_Light_Grey");
        } else {
            item?.classList.remove("bg-[#323840]");
            item?.classList.add("bg-white");
            item?.classList.add("text-c_Dark_Blue");
            item?.classList.remove("text-c_Light_Grey");
        }
    });
}

rateBtns.forEach((item, index) =&gt; {
    item?.addEventListener("click", () =&gt; {
        onRate(index);
        currentRate = index + 1;
    });
});

```

#### Card transition animation using GSAP

When clicking the `submit` button, the rating card fades out. When it finishes, the thank-you card which was originally `style="display: none"` fades in.

```
document.getElementById("submit")?.addEventListener("click", () =&gt; {
    if (!currentRate || !ratePage || !finishPage || !myRatingSpan) return;
    myRatingSpan.innerText = currentRate.toString()
    gsap.to(ratePage, {
        opacity: 0,
        x: -25,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () =&gt; {
            ratePage.style.display = "none";
            // play finishPage (thank-you card) animation
            finishPage.style.display = "flex";
            gsap.fromTo(
                finishPage,
                { opacity: 0, x: 25 },
                { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
            );
        },
    });
});
```

## Resources

- TailwindCSS Docs - <https://tailwindcss.com/docs>

- Google Fonts - <https://fonts.google.com>

- GSAP docs - <https://gsap.com/docs/v3/>