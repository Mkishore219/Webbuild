window.addEventListener("load", function () {
    ScrollTrigger.refresh();
  });


function lenis() {
    
// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 800); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);



}
lenis()





function page1loader() {

    var tl1 = gsap.timeline();

    tl1.from(".loader img",{
        x:30,
        opacity:0,
        duration:1,
        delay:0.7
    })
    tl1.from(".loader h5 span",{
        x:30,
        opacity:0,
        duration:1,
        stagger:0.1
    })
    // tl1.to(".loader img",{
    //     x:-30,
    //     opacity:0,
    //     // duration:1
    // })
    // tl1.to(".loader h5 span",{
    //     x:-30,
    //     opacity:0,
    //     duration:1,
    //     stagger:0.1
    // })
    tl1.to(".loader",{
        y:"-100%",
        duration:1
    })
    tl1.to(".loader",{
        display: "none"
    })
    
    // 

    tl1.from("header .logo img", {
        y: -10,
        opacity: 0,
        duration: 0.5,
    })
    tl1.from("header .logo h5 span", {
        y: -10,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
    }, "headeer")
    tl1.from("header .hamburger", {
        y: -10,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
    }, "headeer")
    tl1.from("section.banner nav ul li", {
        y: -10,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    }, "headeer")
    tl1.from(".banner h1 span", {
        y: -40,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    }, "-=0.5")
    tl1.from(".banner .social i", {
        scale: 0,
        duration: 1,
        stagger:0.2,
        delay:0.5
    }, "headeer")
    tl1.from(".wts-app", {
        scale: 0,
        duration: 1,
        delay:0.5
    }, "headeer")

    // tl2
   


}
page1loader();


function firstScrollAnimationBanner() {
    
    
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".experience",
        scroller: "body",
        start: "top 85%",
        end: "top 84%",
        // markers: true,
        scrub: 2
    }
});
tl2.to("header .logo h5 span", {
    y: -10,
    opacity: 0,
    duration: 1,
    stagger: 0.1
}, "headerscrollup") 


tl2.to(".banner .social a", {
    scale: 0,
    duration: 1,
    stagger:0.2,
    display:"none",
},"headerscrollup")

tl2.to(".banner h1 span", {
    scale: 1.1,
    paddingLeft: "10px",
    duration: 1
}, "headerscrollup")
// tl2.to(".banner img",{
//     scale:0.9,
//     paddingLeft:"15px",
//     duration:1
// },"-=0.5")

}
firstScrollAnimationBanner() 


function ham() {
    
    gsap.from(".banner .ham", {
        scrollTrigger: {
            trigger: ".experience",
            scroller: "body",
            start: "top 95%",
            end: "top 94%",
            // markers:true,
            scrub: 2
        },
        y: -10,
        opacity: 0,
        duration: 1
    })
}
ham()

function sliderPart() {
    // Ensure GSAP is loaded
    if (typeof gsap !== 'undefined') { 
        const hamburger = document.querySelector('.ham-icon i'); // Select hamburger icon inside .hamburger
        const ham = document.querySelector('.ham i'); // Select hamburger icon inside .ham
        const closeIcon = document.querySelector('.close i'); // Select close icon
        const slider = document.querySelector('.nav-blur'); // Select the nav-blur element
        const navItems = document.querySelectorAll('.nav-slider nav ul li'); // Select all nav items (li elements)

        // Ensure all elements are found before continuing
        if (!hamburger || !ham || !closeIcon || !slider || navItems.length === 0) {
            console.error('One or more elements are missing.');
            return; // Exit if any elements are missing
        }

        // Create a timeline for the navigation animation
        const tl = gsap.timeline({ paused: true });

        // Slide the slider in from the right
        tl.to(slider, {
            duration: 0.5,
            right: '0vw',
            ease: 'power1.out',
        });

        // Stagger animation for each nav item (li)
        tl.from(navItems, {
            duration: 1,
            opacity: 0,
            x: 20, // Slide in from the right
            stagger: 0.2,
            ease: 'power1.out',
            delay:0.5
        });

        // Add click event listener to the hamburger icon inside .hamburger
        hamburger.addEventListener('click', () => {
            tl.play(); // Use play() to open the slider
        });

        // Add click event listener to the hamburger icon inside .ham
        ham.addEventListener('click', () => {
            tl.play(); // Use play() to open the slider
        });

        // Add click event listener to the close icon
        closeIcon.addEventListener('click', () => {
            // Reset the timeline to the beginning
            tl.reverse(); // Reverse the timeline to its start
        });
    }
}

// Call the function
sliderPart();









function page2() {
    // Ensure GSAP and ScrollTrigger are loaded
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        var tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: "section.experience",
                scroller: "body", // Ensure you're using correct scroller (might not be needed if using default scroll)
                start: "top 85%",
                end: "top 20%",
                scrub: 2, // Adjust scrub time if needed
                pinSpacing: false
            }
        });

        tl3.from("section.experience h4", {
            y: 40,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1
        });

        tl3.from("section.experience .years h3", {
            y: 40,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1
        });
    } else {
        console.error('GSAP or ScrollTrigger is not loaded');
    }
}

page2();



function yrOfExp() {
    
    document.addEventListener("DOMContentLoaded", function () {
        const yearSpan = document.querySelector(".yr-of-exp");
    
        gsap.to(yearSpan, {
            scrollTrigger: {
                trigger: ".years", // Trigger when the .years element is in view
                start: "top 50%", // Trigger when the bottom of the element hits 80% of the viewport
                // markers:true,
                onEnter: () => {
                    let count = 0;
                    const targetCount = 12; // Target count is 12
                    const duration = 1; // Duration of the count animation in seconds
    
                    const interval = setInterval(() => {
                        // Update the text content with two digits and a "+" sign
                        yearSpan.textContent = (count < 10 ? `0${count}` : count) + "+";
                        count++;
                        if (count > targetCount) {
                            clearInterval(interval); // Stop the interval when the target is reached
                        }
                    }, (duration * 1000) / targetCount); // Calculate interval time
                },
                once: true // Ensure the animation only triggers once
            }
        });
    });

}
yrOfExp()


function dropdown() {
    document.querySelectorAll('.dropdown-header').forEach(header => {
        header.addEventListener('click', function() {
            const currentDropdown = this.parentElement;
            const allDropdowns = document.querySelectorAll('.dropdown');
            
            // Close all other dropdowns
            allDropdowns.forEach(dropdown => {
                if (dropdown !== currentDropdown) {
                    dropdown.classList.remove('open');
                    const otherPlusMinus = dropdown.querySelector('.plus-minus');
                    otherPlusMinus.textContent = '+';
                }
            });

            // Toggle current dropdown
            currentDropdown.classList.toggle('open');
            
            // Update current plus/minus
            const currentPlusMinus = this.querySelector('.plus-minus');
            currentPlusMinus.textContent = currentDropdown.classList.contains('open') ? '-' : '+';
        });
    });
}
dropdown()


function servicesSectionAnimation() {

    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".services",
            scroller: "body",
            start: "top 85%",
            end: "top 10%",
            // markers:true,
            scrub: 2
        }
    })
    tl4.from("section.experience .services h3", {
        y: 40,
        opacity: 0,
        duration: 0.5,
    })
    tl4.from("section.experience .services .dropdown", {
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
    })
}
servicesSectionAnimation()

function page4() {
    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".projects",
            scroller: "body", // If you're using Locomotive Scroll, otherwise remove this line
            start: "top top", // When the top of the .projects section hits the top of the viewport
            end: "+=110%", // Pinning duration: 100% of the viewport height
            // markers: true, // For debugging (remove in production)
            scrub: true, // Smooth scrubbing
            pin: ".project-txt" // Pinning the .project-txt element
        }
    });

    tl5.from(".project-txt", {
        y: 50,
        // opacity: 0,
        duration: 1,
        ease: "power1.inOut"
    });
}

// page4();




function workpage() {
    // Create the timeline
    var tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: "section.work",
            scroller: "body",
            start: "top 100%", // Section starts animating when it hits the bottom of the viewport
            end: "bottom 0%", // Adjust as needed to control the overall scroll-based timing
            // markers: true,
            scrub: 2
        }
    });

    // // Animate the heading
    // tl6.from(".work h3", {
    //     y: 40,
    //     duration: 1,
    //     opacity: 0
    // });

    // Animate each .col-md-6 element
    document.querySelectorAll(".work .col-md-6").forEach((el, i) => {
        tl6.from(el, {
            y: 40,
            opacity: 0,
            duration: 1, // Duration of the individual element's animation
            scrollTrigger: {
                trigger: el,
                scroller: "body",
                start: "top center", // Animation starts when the element's top reaches the center of the viewport
                end: "center 40%", // Animation ends when the element's center reaches the center of the viewport
                scrub: 2, // Smooth animation while scrolling
                // markers: true // Show markers for debugging
            }
        });
    });
    
}

workpage();


function mouseCursorProjects() {
    var work = document.querySelector(".work");
    var cursor = document.querySelector("#cursor");
    var colImgs = document.querySelectorAll(".work img"); // Select all images

    // Make the cursor follow the mouse movement
    work.addEventListener("mousemove", function (e) {
        let rect = work.getBoundingClientRect();
        gsap.to(cursor, {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            duration: 1, // Faster duration for smoother movement
            ease: "power1.out" // Added easing for a smoother effect
        });
    });

    // Show the cursor when entering the work section
    work.addEventListener("mouseenter", function () {
        cursor.classList.remove("hidden-cursor");
    });

    // Hide the cursor when leaving the work section
    work.addEventListener("mouseleave", function () {
        cursor.classList.add("hidden-cursor");
    });

    // Cursor animation when hovering over images
    colImgs.forEach(function (colImg) {
        colImg.addEventListener("mouseenter", function () {
            cursor.innerHTML = `<i class="ri-corner-down-right-line"></i> View `;
            gsap.to(cursor, {
                scale: 2,
                duration: 0.2, // Duration for scaling effect
                ease: "power1.out", // Added easing for a smoother effect
                borderRadius: "0%",
                padding: "0 15px"
            });
        });

        colImg.addEventListener("mouseleave", function () {
            cursor.innerHTML = "";
            gsap.to(cursor, {
                scale: 1,
                duration: 0.2, // Duration for scaling effect
                ease: "power1.out", // Added easing for a smoother effect
                borderRadius: "50%",
                padding: "0"
            });
        });
    });
}

// Initialize the cursor functionality
mouseCursorProjects();


function lineAfterWork(){
    gsap.to(".line",{
        width:"100%",
        scrollTrigger: {
            trigger: ".line",
            scroller: "body",
            start: "top 75%",
            end: "top 70%",
            // markers:true,
            scrub: 2,
            pinSpacing: false
        }
    })
}
lineAfterWork()



function expertisePage(){
    
    var tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: "section.expertise",
            scroller: "body",
            start: "top 70%", 
            end: "50% 65%", 
            // markers: true,
            scrub: 2
        }
    });

    tl7.from("section.expertise h4",{
        y:30,
        opacity:0,
        stagger:0.3
        // duration:1
    })
    tl7.from("section.expertise .left-li li",{
        y:30,
        opacity:0,
        stagger:0.3
        // duration:1
    }, "popup")
    tl7.from("section.expertise .right-li li",{
        y:30,
        opacity:0,
        stagger:0.3
        // duration:1
    }, "popup")

}
expertisePage()


function sectorsPage(){
    
    var tl8 = gsap.timeline({
        scrollTrigger: {
            trigger: "section.Sectors",
            scroller: "body",
            start: "top 70%", 
            end: "50% 65%", 
            // markers: true,
            scrub: 2
        }
    });

    tl8.from("section.Sectors h4",{
        y:30,
        opacity:0,
        stagger:0.3
        // duration:1
    })
    tl8.from("section.Sectors .left-li li",{
        y:30,
        opacity:0,
        stagger:0.3
        // duration:1
    }, "popup2")
    tl8.from("section.Sectors .right-li li",{
        y:30,
        opacity:0,
        stagger:0.3
        // duration:1
    }, "popup2")

}
sectorsPage()




function mapPage() {

    var tl9 = gsap.timeline({
        scrollTrigger: {
            trigger: "section.map",
            scroller: "body",
            start: "top 90%", 
            end: "50% 50%",
            // markers: true,
            scrub: 2
        }
    });

    tl9.from("section.map h4",{
        y:30,
        opacity:0,
        stagger:0.3
    })
    tl9.from("section.map p",{
        y:30,
        opacity:0,
        stagger:0.3
    })
    tl9.to("section.map iframe",{
        width:"100%",
        duration:3
    })

    
}
mapPage()










function footerh1() {
    var tl12 = gsap.timeline({
        scrollTrigger: {
            trigger: "footer",
            start: "top 90%", 
              end: "top 50%",
            // markers: true,
            scrub: 1, 
        }
    });

    // Animate footer navigation links
    tl12.from("footer h1", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power1.inOut"
    });
}
footerh1() 


function footerLiAnimation() {
    var tl10 = gsap.timeline({
        scrollTrigger: {
            trigger: "footer .col-md-4", 
            start: "top 90%", 
            end: "top 50%",
            // markers: true, 
            scrub: 1, 
        }
    });

    // Animate footer navigation links
    tl10.from("footer .footer-nav li", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power1.inOut"
    }, "footerNav");

    // Animate expertise list items
    tl10.from("footer .contact_bottom_grid li", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power1.inOut"
    }, "footerNav");

    tl10.from("footer .footer-sectior li", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power1.inOut"
    }, "footerNav");
}

// Initialize the animation
footerLiAnimation();





function currentYear() {
    document.querySelector("#current_year").innerHTML = new Date().getFullYear()
}
currentYear()
