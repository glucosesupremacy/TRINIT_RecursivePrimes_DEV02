$('#repo').on('click',function(){
    if($('#issues').css('display')!='none'){
    $('#report').html('Here is my dynamic content').show().siblings('div').hide();
    }else if($('#report').css('display')!='none'){
        $('#issues').show().siblings('div').hide();
    }
});