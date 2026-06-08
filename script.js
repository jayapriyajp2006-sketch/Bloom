// =========================
// ACTIVE NAV LINK
// =========================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});



// =========================
// ADD TO CART BUTTON
// =========================

const cartButtons = document.querySelectorAll(".product-card button");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.innerHTML = "Added ✓";
        button.style.background = "#B08D57";

    });

});



// =========================
// NEWSLETTER SUBSCRIBE
// =========================

const subscribeBtn = document.querySelector(".newsletter button");

if (subscribeBtn) {

    subscribeBtn.addEventListener("click", () => {

        alert("Thank you for subscribing to Bloom!");

    });

}







// =========================
// CONTACT FORM POPUP
// =========================

const form =
    document.querySelector(".contact-form-box form");

const popup =
    document.getElementById("popup");

const closePopup =
    document.getElementById("closePopup");

if (form && popup && closePopup) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        popup.classList.add("active");

        form.reset();
    });

    closePopup.addEventListener("click", function () {

        popup.classList.remove("active");

    });

}
// =========================
// BLOG FILTER
// =========================

const filterButtons =
    document.querySelectorAll(".blog-filters button");

const blogCards =
    document.querySelectorAll(".blog-section .blog-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // REMOVE ACTIVE
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // ADD ACTIVE
        button.classList.add("active");

        // FILTER VALUE
        const filter =
            button.getAttribute("data-filter");

        // SHOW/HIDE CARDS
        blogCards.forEach(card => {

            if (
                filter === "all" ||
                card.classList.contains(filter)
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";
            }
        });
    });
});



const params = new URLSearchParams(window.location.search);

/* BLOG DETAIL PAGE SAFE CHECK */

const blogCategory =
    document.querySelector(".blog-detail-content span");

const blogTitle =
    document.querySelector(".blog-detail-content h1");

const blogDate =
    document.querySelector(".blog-meta p");

const blogCover =
    document.querySelector(".blog-cover");

const firstParagraph =
    document.querySelector(".article-content p");

/* CATEGORY */

if (blogCategory) {

    blogCategory.innerText =
        params.get("category") || "SKINCARE JOURNAL";
}

/* TITLE */

if (blogTitle) {

    blogTitle.innerText =
        params.get("title") ||
        "5 Natural Ingredients That Transform Your Skin";
}

/* DATE */

if (blogDate) {

    blogDate.innerText =
        params.get("date") || "May 28, 2026";
}

/* IMAGE */

if (blogCover) {

    blogCover.src =
        params.get("image") ||
        "https://i.pinimg.com/1200x/65/13/11/6513117d9bca773de2bfc3c0f4cbf4d2.jpg";
}

/* DESCRIPTION */

if (firstParagraph) {

    firstParagraph.innerText =
        params.get("desc") ||
        "Natural skincare has become one of the most trusted beauty approaches for healthy glowing skin.";
}



/* ===================================
   DARK MODE TOGGLE
=================================== */

const darkModeBtn =
    document.querySelector(".dark-mode-btn");

/* LOAD SAVED THEME */

window.addEventListener("DOMContentLoaded", () => {

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

    }

});

/* TOGGLE DARK MODE */

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        /* SAVE THEME */

        if (
            document.body.classList.contains(
                "dark-mode"
            )
        ) {

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    });

}
/* ===================================
   MOBILE MENU TOGGLE
=================================== */

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector("nav");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });
}



/* ===================================
GLOBAL SEARCH
=================================== */

function handleGlobalSearch() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;

    const value =
        input.value.trim().toLowerCase();

    if (value === "") return;

    localStorage.setItem("productSearch", value);

    window.location.href = "shop.html";
}

/* SEARCH BUTTON */

const searchBtn =
    document.getElementById("searchBtn");

if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        handleGlobalSearch
    );

}

/* ENTER KEY */

const searchInput =
    document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener(
        "keyup",
        (e) => {

            if (e.key === "Enter") {

                handleGlobalSearch();

            }

        }
    );

}

/* ===================================
SHOP PAGE SEARCH FILTER
=================================== */

window.addEventListener("DOMContentLoaded", () => {

    const savedSearch =
        localStorage.getItem("productSearch");

    const cards =
        document.querySelectorAll(".product-card");

    /* NO SEARCH */

    if (!savedSearch) {

        cards.forEach(card => {

            card.style.display = "block";

        });

        return;
    }

    let found = false;

    cards.forEach(card => {

        const title =
            card.querySelector("h3")
                .innerText
                .toLowerCase();

        /* MATCH PRODUCT */

        if (title.includes(savedSearch)) {

            found = true;

            card.style.display = "block";

            /* SCROLL TO PRODUCT */

            setTimeout(() => {

                card.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 400);

        }

        else {

            /* HIDE OTHER PRODUCTS */

            card.style.display = "none";

        }

    });

    /* PRODUCT NOT FOUND */

    if (!found) {

        cards.forEach(card => {

            card.style.display = "none";

        });

        document.getElementById("productGrid").innerHTML = `

            <div class="no-product-found">

                <h2>No Product Found</h2>

            </div>

        `;

    }

    localStorage.removeItem("productSearch");

});


/* MOBILE SEARCH POPUP */

const mobileSearchBtn =
    document.getElementById("mobileSearchBtn");

const mobileSearchPopup =
    document.getElementById("mobileSearchPopup");

const mobileSearchSubmit =
    document.getElementById("mobileSearchSubmit");

const mobileSearchInput =
    document.getElementById("mobileSearchInput");

/* OPEN */

mobileSearchBtn.addEventListener("click", () => {

    mobileSearchPopup.classList.add("active");

});

/* CLOSE OUTSIDE */

mobileSearchPopup.addEventListener("click", (e) => {

    if (e.target === mobileSearchPopup) {

        mobileSearchPopup.classList.remove("active");

    }

});

/* SEARCH */

function mobileSearch() {

    const value =
        mobileSearchInput.value.trim().toLowerCase();

    if (value === "") return;

    localStorage.setItem("productSearch", value);

    window.location.href = "shop.html";
}

mobileSearchSubmit.addEventListener(
    "click",
    mobileSearch
);

mobileSearchInput.addEventListener(
    "keyup",
    (e) => {

        if (e.key === "Enter") {

            mobileSearch();

        }

    }
);


// FAQ PAGE
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const btn = item.querySelector(".faq-question");

    if (btn) {
        btn.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    }

});
/* FAQ PAGE */

const faqsItems = document.querySelectorAll(".faqs-item");

faqsItems.forEach(item => {

    const btn = item.querySelector(".faqs-question");

    if (btn) {

        btn.addEventListener("click", () => {

            item.classList.toggle("active");

        });

    }

});
