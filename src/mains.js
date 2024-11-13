$(".button-menu").click(function() {
    $("aside").toggleClass("hidde")
})


$(".option-aside").click(function() {
    $("aside").toggleClass("hidde")
})

$(".cam-security").click(function() {
    $("section").addClass("hidde")
    $("#cams").removeClass("hidde")
})

$(".help").click(function() {
    $("section").addClass("hidde")
    $("#help").removeClass("hidde")
})
$(".button-close-modal").click(function() {
    $(".modal-cams").addClass("hidde")
    $(".video-cam").addClass("hidde")
})


const camGaragem = document.querySelector("#cam-garagem video")
$(".cam-garagem").click(function() {
    $(".modal-cams").removeClass("hidde")
    $("#cam-garagem").removeClass("hidde")
    
    $("#cam-garagem video").trigger("play")

    
    const sec1 = setInterval(function() {
        if (camGaragem.currentTime >= 13) {
            clearInterval(sec1)
            alert("GARAGEM - POSSIVEL QUEDA!!!")
        }
        console.log(camGaragem.currentTime);
        
    }, 2000)

    
})

const camSala = document.querySelector("#cam-sala video")
$(".cam-sala").click(function() {
    $(".modal-cams").removeClass("hidde")
    $("#cam-sala").removeClass("hidde")
    
    $("#cam-sala video").trigger("play")

    
    const sec2 = setInterval(function() {
        if (camSala.currentTime >= 4) {
            clearInterval(sec2)
            alert("SALA - POSSIVEL QUEDA!!!")
        }
        console.log(camSala.currentTime);
        
    }, 2000)

    
})



const camcozinha = document.querySelector("#cam-cozinha video")
$(".cam-cozinha").click(function() {
    $(".modal-cams").removeClass("hidde")
    $("#cam-cozinha").removeClass("hidde")
    
    $("#cam-cozinha video").trigger("play")

    
    const sec3 = setInterval(function() {
        if (camcozinha.currentTime >= 14) {
            clearInterval(sec3)
            alert("COZINHA - POSSIVEL QUEDA!!!")
        }
        console.log(camcozinha.currentTime);
        
    }, 2000)

    
})



const camquarto = document.querySelector("#cam-quarto video")
$(".cam-quarto").click(function() {
    $(".modal-cams").removeClass("hidde")
    $("#cam-quarto").removeClass("hidde")
    
    $("#cam-cozinha video").trigger("play")

    
    const sec4 = setInterval(function() {
        if (camquarto.currentTime >= 14) {
            clearInterval(sec4)
            alert("QUARTO - POSSIVEL QUEDA!!!")
        }
        console.log(camquarto.currentTime);
        
    }, 2000)

    
})






