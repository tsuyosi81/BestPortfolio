console.log('it works');

$(docuemnt).ready(function () {
    $('submit').click(function (event) {
        event.preventDefault(
            console.log('Clicked button')
        )
    })
})