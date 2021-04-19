$('.owl-filmes-series-docs').owlCarousel({
    loop: false,
    margin: 10,
    nav: false, //? Setas de navegação
    dots: false,
    responsive: {
        0: { //? Se for menor que 600px só uma imagem aparecerá e uma imagem aparecerá na tela
            items: 1,
            center: true
        },
        600: { //? Se for menor ou igual que 600px, só três imagens aparecerarão
            items: 3
        },
        1000: { //? Se for maior ou igual que 1000px, só cinco imagens aparecer
            items: 5
        }
    }
})

$('.owl-destaque').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3500,
    mouseDrag: false,
    touchDrag: false,
    responsive: {
        0: { //? Se for menor que 600px só uma imagem aparecerá
            items: 1
        },
        600: { //? Se for menor ou igual que 600px, só três imagens aparecerarão
            items: 1
        },
        1000: { //? Se for maior ou igual que 1000px, só cinco imagens aparecer
            items: 1
        }
    }
})