$(document).ready(function() {

    $('.year').each(function() {
        //prendo il div associato a questa iterazione
        var thisYear = $(this);

        //2018-04-19 11:32:00
        var now = moment();

        var year = $(this).attr('id');
        var month = now.format('M');
        var day = now.format('D');

        var date = moment(year + '-' + month + '-' + day);
        //console.log(date);

        $.ajax({
            url: 'https://holidayapi.com/v1/holidays',
            method: 'GET',
            data: {
                key: '6bb9c0f7-6861-4075-aff3-f465c85749c2',
                country: 'IT',
                month: month,
                year: year,
                day: day
            },
            success: function(data) {
                if (data.holidays.length > 0) {
                    thisYear.children('.result').text('Sì');
                }
                else {
                    thisYear.children('.result').text('No');
                }
            },
            error: function() {
                alert('Si è verificato un errore');
            }
        });

    });

    $('#myButton').click(function() {
        var month = $('#months').val();
        var year = $('#years').val();
        var country = $('#countries').val();

        $.ajax({
            url: 'https://holidayapi.com/v1/holidays',
            method: 'GET',
            data: {
                key: '6bb9c0f7-6861-4075-aff3-f465c85749c2',
                country: country,
                month: month,
                year: year
            },
            success: function(data) {

                for (var i = 0; i < data.holidays.length; i++) {

                    //ti ritorno la data attuale in cui ti trovi
                     //moment();
                     //ti ritorno la data che mi chiedi
                     //moment('2017-01-01');

                    var dateOfHoliday = moment(data.holidays[i].date);
                    var dayOfYear = dateOfHoliday.dayOfYear();
                    var dayOfWeek = dateOfHoliday.format('dddd');

                    //prendiamo l'ora attuale
                    var now = moment();

                    //prendiamo la prima data e guardiamo quanta differenza di giorni c'è con la seconda
                    var diffInDays = now.diff(dateOfHoliday, 'minutes');

                    $('#results').append(data.holidays[i]['date']);
                    $('#results').append(' Giorno dell\'anno: ' + dayOfYear);
                    $('#results').append(' Giorno della settimana: ' + dayOfWeek);
                    $('#results').append(' Sono trascorsi ' + diffInDays + ' giorni');
                    $('#results').append('<br>');
                }

            },
            error: function() {
                alert('Si è verificato un errore');
            }
        });
    });

});
