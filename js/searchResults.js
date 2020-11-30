$(document).ready(function (){
    $("#site-search").autocomplete({
        source: async function(request, response){
            let data = await fetch(`http://localhost:3000/search?term=${request.term}`)
                .then(results => results.json())
                .then(results => results.map(result => {
                    return { label: result.name, value: result.name, id: result._id };
                }));
            response(data);
        },
        minLength: 2,
        select: function(event, ui) {
            fetch(`http://localhost:3000/get/${ui.item.id}`)
                .then(result => result.json())
                .then(result => {
                    $("#searchResults").empty();
                    result.hospitals.forEach(hospital => {
                        $("#searchResults").append(`<li>${hospital}</li>`);

                    });


                });
            fetch(`http://localhost:3000/get/${ui.item.id}`)
                .then(result => result.json())
                .then(result => {
                    result.covid19.forEach(covid19 => {
                        $("#searchResults").append(`<li>${covid19}</li>`);

                    });


                });
            fetch(`http://localhost:3000/get/${ui.item.id}`)
                .then(result => result.json())
                .then(result => {
                    result.contact.forEach(contact => {
                        $("#searchResults").append(`<li>${contact}</li>`);

                    });


                });

        }

    });
});
