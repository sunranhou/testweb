$(document).ready(function(){
    pageInit();
    
});

function pageInit() {
    $.ajax({
        type: 'GET',
        url: '/testweb/page/getPages.do',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function(data) {
            var pageList = data.pageList;
            var tr;
            for(var i=0; i < pageList.length; i++) {
            	tr = $('.tr-hide').clone(true, true);
                tr.removeClass('tr-hide');
            	tr.removeClass('am-hide');
            	tr.find('.td-id').html(pageList[i].id);
            	tr.find('.td-name').html(pageList[i].name);
            	tr.find('.td-path').html(pageList[i].path);
            	tr.appendTo('.page-tbody');
            }
            
            $(".add-page").click(function(){
            	alert("// TODO add page");
        	});
            
            $("tr").dblclick(function(){
            	document.location.href("step.html?"+$(this).find('td.td-id').html());
        	});
            
            $("tr").click(function(){
            	if ($(this).hasClass('am-active')) {
            		$(this).removeClass("am-active");
            	} else {
            		$(this).addClass("am-active");
            	}
        	});
        },
        complete: function() {

        },
        error:function(err) {

        }
    });
}
