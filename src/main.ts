import gsap from "gsap";

const rateBtns = ["rate-1", "rate-2", "rate-3", "rate-4", "rate-5"].map((d) =>
    document.getElementById(d)
);

let currentRate: undefined | number = undefined;

function onRate(index: number) {
    rateBtns.forEach((item, i) => {
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
rateBtns.forEach((item, index) => {
    item?.addEventListener("click", () => {
        onRate(index);
        currentRate = index + 1;
    });
});

const ratePage = document.getElementById("rate-page");
const finishPage = document.getElementById("finish-page");
const myRatingSpan = document.getElementById("my-rating")

document.getElementById("submit")?.addEventListener("click", () => {
    if (!currentRate || !ratePage || !finishPage || !myRatingSpan) return;
    myRatingSpan.innerText = currentRate.toString()
    gsap.to(ratePage, {
        opacity: 0,
        x: -25,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
            ratePage.style.display = "none";

            finishPage.style.display = "flex";
            gsap.fromTo(
                finishPage,
                { opacity: 0, x: 25 },
                { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
            );
        },
    });
});
