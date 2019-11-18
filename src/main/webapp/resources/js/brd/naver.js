"use strict"
var naver = naver || {}
naver = (()=>{
	let _, js, css
	let init =()=>{
		_ = $.ctx()
		js = $.js()
	}
	let onCreate =()=>{
		init()
		setContentview()
	} 
	let setContentview =()=>{
		$('#right').empty()
		$("<h3 class='section_title'>Today words</h3>")
		.appendTo('#right')
		$.getJSON(_+'/adm/naver', d=>{
			let i = 0
			let arr = d[0]
			for(i = 0; i<d[0].length;i++){
				$('<div class="section">'+
				'        <div class="component_today_word">'+
				'                <li class="item">'+
				'                  <div class="txt_origin">'+
				'                    <h4 class="word_link">'+d[0][i]+'</a>'+
				'                  </div>'+
				'                  <div class="txt_trans">'+
				d[1][i]                           +
				'                  </div>'+
				'                </li>'+
				'        </div>'+
				'      </div>')
   				.appendTo('#right')
   				.css({margin:'auto 0'})
			}
   		})
	}
	return {onCreate}
})()