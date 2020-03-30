# tab.js使用说明手册

功能不算丰富，视觉效果也不是很好，但是特点在于它使用起来非常的方便，修改样式也很简便。

本js插件的功能有：

- 点击导航栏切换内容；
- 根据ul和div的数量自动生成样式的数量

**Q1：如何在页面中使用？**

A：很简单，只需要在html文档中写引入tab.css和tab.js文件，并写好数量等同的<li>和<div>，然后写上这样一句脚本即可

~~~html
<body>
	<div id="tab">
		<ul>
			<li>新闻</li>
			<li>焦点</li>
			<li>图片</li>
			<li>娱乐</li>
		</ul>
		<div>新闻内容</div>
		<div>焦点内容</div>
		<div>图片内容</div>
		<div>娱乐内容</div>
	</div>
</body>
<script>
    //"tab_id是所要改造的容器，需要有数量等同的<li>和<div>，height和width为生成tab组件的高和宽，"，ulHeight为导航栏高度，宽带不可设置，
    //默认样式为"height": "400px","width": "500px","ulHeight":"50px",
	var a = new MyTab("tab",{"height":"300px","width":"400px","ulHeight":"30px"});
</script>
~~~

**Q2：如何自定义样式**

A：可以自定义样式给所需要的标签，但是不建议给tab里面的元素添加宽高属性，以免样式乱掉