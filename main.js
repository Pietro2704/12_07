
$("#btn").click(() => {

    let user = document.querySelector("#username").value
    let password = document.querySelector("#password").value

    if (user === "Pietro" && password === "1234") {
        let texto = "Parabens!!!"
        let p = document.querySelector("#magic").text(texto)
    }
})

// JQUERY
// $("$btn")
// .click(()=>{})
// .text()