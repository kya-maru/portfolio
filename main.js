$(()=>{
    // ポップアップ表示
    // $(document).on('click','.modal-trigger',
    $('.modal-trigger').on('click', function (event) {
        event.preventDefault();
        // 表示する画像のsrcを取得・追加
        let url = $(this).find('img').attr('src');
        $('#content').attr('src', url);
        // 説明文を取得・追加
        let discription = $(this).find('.disc').children().clone();
        console.log(discription);
        $('#disc').html(discription);
        // ポップアップ表示
        $('#glay_layer').fadeIn();
        $('#over_layer').css('visibility', 'visible');
    });

    // ポップアップを閉じる
    $('#glay_layer'). on('click', function (){
        $(this).fadeOut();
        $('#over_layer').css('visibility', 'hidden');
    });
});