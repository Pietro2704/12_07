$("#btn").click(() => {

    let user = $("#username").val()
    let password = $("#password").val()

    if (user === "Pietro" && password === "1234") {
        let texto = "Parabens!!!"
        $("#magic").text(texto)
    }
})

// JQUERY
// $("$btn")
// .click(()=>{})
// .text()