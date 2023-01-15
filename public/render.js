$(document).ready(function()
{
    $( 'a[id$="links"]' ).click(function(event) 
    {
        event.preventDefault();
        var href = $(this).attr('href');
        const el= document.getElementsByClassName('content');
        while(el.length>0){
            el[0].parentNode.removeChild(el[0]);
        }

        $('#showwin').load(href);
        return false;
    });

});