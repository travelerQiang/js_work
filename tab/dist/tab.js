;(function(global){
	"use strict";

	//构造函数
	function MyTab(target,options){

		//获取需要操作的元素
		this.tab = document.getElementById(target);
		this.divs = tab.getElementsByTagName('div');
		this.lis =  tab.getElementsByTagName('li');
		this.ul = tab.getElementsByTagName('ul')[0];
		this.defaultSettings={
			"height": "400px",
			"width": "500px",
			"ulHeight":"50px",
		}

		//初始化工作
		setCss(this,options);
		this.init();
	}

	function setCss(_self,options){
		Object.assign(_self.defaultSettings,options);
		_self.tab.style.height = _self.defaultSettings.height;
		_self.tab.style.width = _self.defaultSettings.width;
		_self.ul.style.height = _self.defaultSettings.ulHeight;
		for (var i = 0; i < _self.divs.length; i++) {
			_self.divs[i].style.height=(parseInt(_self.tab.style.height)-parseInt(_self.ul.style.height))+"px";
			_self.divs[i].style.width=parseInt(_self.tab.style.width)+"px";
			_self.lis[i].style.lineHeight=_self.ul.style.height;
		}

	}

	MyTab.prototype={
		init : function(){
			var _self = this;
			for (var i = 0; i < _self.divs.length; i++) {
			_self.lis[i].onclick=(function(index){
				return function(){
					for (var i = 0; i < _self.divs.length; i++) {
						_self.divs[i].style.display='none';
						_self.lis[i].classList.remove("active");
					}
					_self.divs[index].style.display='block';
					this.classList.add("active");
				}
				
			})(i);	//i作为一开始所传入的参数
		}
		_self.lis[0].onclick();
		}
	}

	 //console.log(global)
    if (typeof module !== 'undefined' && module.exports) {    //兼容CommonJs规范 
        module.exports = MyTab;
    }else if (typeof define === 'function'){   //兼容AMD/CMD规范
        define(function () {
            return MyTab
        })
    }else {    //注册全局变量，兼容直接使用script标签引入插件
        global.MyTab = MyTab;
    }
    
})(this);