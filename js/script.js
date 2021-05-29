function popular(){

    $.ajax({
        url: 'https://api.unsplash.com/photos',
        type: 'get',
        dataType: 'json',
        data: {
            'order_by' : 'popular',
            'client_id' : 'YOUR CLIENT_ID'
        },
        success: function(hasil){
            $.each(hasil, function(i, data){
                $('#images').append(`               
                    <div class="col s12 m4">
                        <div class="card">
                        <div class="card-image">
                            <img src="`+ data.urls.regular +`">
                            <span class="card-title"><i class="material-icons">favorite</i> `+ data.likes +`
                            </span>
                        </div>
                        <div class="card-action">
                            <a class="waves-effect waves-light btn grey darken-4" href="`+ data.links.download +`">Download</a>
                        </div>
                        </div>
                    </div>

                `);
            });
        }
    });
}

$(window).on('load', function(){
    popular();
});



function pencarian(){

    $('#images').html('');

    $.ajax({
        url: 'https://api.unsplash.com/search/photos',
        type: 'get',
        dataType: 'json',
        data: {
            'query' : $('#search-input').val(),
            'client_id' : 'YOUR CLIENT_ID'
        },
        success: function(hasil){          
            $.each(hasil.results, function(i, data){
                $('#images').append(`
    
                        <div class="col s12 m4">
                            <div class="card">
                            <div class="card-image">
                                <img src="`+ data.urls.regular +`">
                                <span class="card-title"><i class="material-icons">favorite</i> `+ data.likes +`
                                </span>
                            </div>
                            <div class="card-action">
                                <a class="waves-effect waves-light btn grey darken-4" href="`+ data.links.download +`">Download</a>
                            </div>
                            </div>
                            </div>
                        </div>

                `);
            });

            $('#search-input').val('');

        }
    });
}


$('#search-button').on('click', function(){
    pencarian();
});

$('#search-input').on('keyup', function(event){
    if(event.keyCode == 13){
        pencarian();
    }
});



const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    interval: 2000,
    height: 500
});

const nav = document.querySelectorAll('.sidenav');
M.Sidenav.init(nav);

const scrollSpy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollSpy, {
    scrollOffset: 65
});

const modal = document.querySelectorAll('.modal');
M.Modal.init(modal);
  
   
