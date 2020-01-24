$(function () {

    $('.eat').on('click', function (event) {
        let id = $(this).data('id');
        let eatenState = {
            eaten: true
        };
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: eatenState
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $('#bgSub').on('click', function (event) {
        event.preventDefault();
        let newBurger = {
            name: $('#bg').val().trim()
        };
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function () {
            location.reload();
        });
    });

})