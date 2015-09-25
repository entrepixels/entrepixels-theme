AUI().ready(
	function(A) {

		/* Show and hide child-menu */
		if(A.one ('span.child-button')){
			A.all('span.child-button').each(function (node) {
				node.on('click', function(node){
					if(this.hasClass('up')){
						A.all('.child-menu').setStyle("display", "none");
						A.all('#wrapper #navigation li span.child-button').removeClass('down');
						A.all('#wrapper #navigation li span.child-button').addClass('up');

						this.removeClass('up');
						this.addClass('down');
						this.siblings('.child-menu').setStyle("display", "block");

					}
					else{
						this.removeClass('down');
						this.addClass('up');
						this.siblings('.child-menu').setStyle("display", "none");

					}

				})
			});
		}

		/* Show and hide navigation */
		if(A.one ('.navbar-btn-nav')){
			A.one('.navbar-btn-nav').on('click',function(){
				if(A.one('#navigation').getStyle('display') == 'none'){
					A.one('#navigation').setStyle("display", "block")
				}else{
					A.one('#navigation').setStyle("display", "none")
				}

			});
		}

	}
);
