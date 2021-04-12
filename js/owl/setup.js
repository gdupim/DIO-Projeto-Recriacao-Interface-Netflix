$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false, //? Setas de navegação
    responsive: {
        0: { //? Se for menor que 600px só uma imagem aparecerá
            items: 1
        },
        600: { //? Se for menor ou igual que 600px, só três imagens aparecerarão
            items: 3
        },
        1000: { //? Se for maior ou igual que 1000px, só cinco imagens aparecer
            items: 5
        }
    }
})

$('.owl-carousel-principal').owlCarousel({
    loop: false,
    margin: 10,
    autoplay: true,
    dots: false,
    nav: false, //? Setas de navegação
    responsive: {
        0: { //? Se for menor que 600px só uma imagem aparecerá
            items: 1
        },
        600: { //? Se for menor ou igual que 600px, só três imagens aparecerarão
            items: 3
        },
        1000: { //? Se for maior ou igual que 1000px, só cinco imagens aparecer
            items: 5
        }
    }
})