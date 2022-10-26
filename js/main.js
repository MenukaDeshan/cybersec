
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.s1', {})
sr.reveal('.s2', {delay: 200})
sr.reveal('.s3', {delay: 400})
sr.reveal('.s4', {delay: 500})
sr.reveal('.s', {delay: 500, interval: 200})

/*SCROLL BLOG*/
sr.reveal('.blog-heading', {delay: 200})
sr.reveal('.blog-box', {delay: 300})

/*SCROLL VIDEO*/
sr.reveal('.video-heading', {})
sr.reveal('.video-box', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.video-titile', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL FOOTER*/
sr.reveal('.f', {delay: 500, interval:100})