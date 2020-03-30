;(function(global){
	"use strict";
	function Modal(modal_id,bind_id,options){
			this.modal = document.getElementById('modal');
			this.cover = document.createElement('div');
			document.body.appendChild(this.cover);
			this.binds = document.getElementById(bind_id);
			this.close = document.createElement('button');
			modal.appendChild(this.close);

			setCss(this);
			this.init();
	}
	function setCss(_self){
		_self.cover.classList.add("cover");
		_self.modal.classList.add('modal');
		if (document.body.style.height>_self.cover.style.height) {
			var computedStyle = getComputedStyle(document.body, null);
			_self.cover.style.height = parseInt(document.body.style.height)+parseInt(computedStyle.marginTop)+parseInt(computedStyle.marginBottom)+'px';
		}
		_self.close.innerHTML="&times;";
		_self.close.classList.add('close-span');
	}
	function show_modal(_self) {
		return function(){
		_self.cover.style.display='block';
		_self.modal.style.display='block';
		};
	}
	function close_modal(_self){
		return function(){
			_self.modal.style.display='none';
			_self.cover.style.display='none';
		};
	}

	Modal.prototype={
		init:function(){
			var _self = this;
			this.binds.onclick=show_modal(_self);
			this.cover.onclick=close_modal(_self);
			this.close.onclick=close_modal(_self);
		}
	};

	if (typeof module !== 'undefined' && module.exports) {    //兼容CommonJs规范 
        module.exports = Modal;
    }else if (typeof define === 'function'){   //兼容AMD/CMD规范
        define(function () {
            return Modal
        })
    }else {    //注册全局变量，兼容直接使用script标签引入插件
        global.Modal = Modal;
    }
})(this);