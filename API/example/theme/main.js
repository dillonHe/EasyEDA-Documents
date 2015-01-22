
//Add a button on the toolbar
api('createToolbarButton', {
	icon: api('getRes', {file:'icon.svg'}),
	title:'Theme Colors...',
	fordoctype:'sch,schlib',
	menu:[
		{"text":"White on Black", "cmd":"extension-theme-WhiteOnBlack"},
		{"text":"Black on White", "cmd":"extension-theme-BlackOnWhite"},
		{"text":"Custom Colors...", "cmd":"extension-theme-setting"}
	]
});


//subitems of Menu
api('createExtensionMenu', [
	{
		"text":"Theme Colors",
		"fordoctype": "sch,schlib",
		submenu:[
			{"text":"White on Black", "cmd":"extension-theme-WhiteOnBlack"},
			{"text":"Black on White", "cmd":"extension-theme-BlackOnWhite"},
			{"text":"Custom Colors...", "cmd":"extension-theme-setting"}
		]
	}
]);

// Command router
api('createCommand', {
	'extension-theme-apply' : function (colorConfig){
		if(!colorConfig){
			colorConfig = {};
			$('#dlg-theme-setting-items button[data-key]').each(function (i,el){
				colorConfig[$(el).attr('data-key')] = $(el).attr('value');
			});
		}
		api('editorCall', {
			cmd:'setColors',
			args:[colorConfig]
		});
	},
	'extension-theme-setting' : function (){
		var oldCfg = api('editorCall', 'getConfig');
		var colorConfig = $.extend({}, themeWhiteOnBlack, oldCfg && oldCfg.colors);
		updateItemsByConfig(colorConfig);
		$dlgTheme.dialog('open');
		Locale.update($dlgTheme);
	},
	'extension-theme-WhiteOnBlack' : function (){
		api('editorCall', { //This is set Colors API
			cmd:'setColors',
			args:[$.extend({}, themeWhiteOnBlack)]
		});
	},
	'extension-theme-BlackOnWhite' : function (){
		api('editorCall', {
			cmd:'setColors',
			args:[$.extend({}, themeBlackOnWhite)]
		});
	}
});

var $dlgTheme = api('createDialog', {
	title: "Theme Colors",
	content : '<div id="dlg-theme-setting-items" style="padding:10px;"></div>'
			+'<div id="dlg-theme-setting-preset" style="padding:0 10px 10px;">'
			+'<div><strong>Common used:</strong></div>'
			+'<div><a href="#" data-style="black">White on Black</a></div>'
			+'<div style="margin-top:4px"><a href="#" data-style="white">Black on White</a></div>'
			+'</div>',
	width : 280,
	height : 400,
	modal : true,
	buttons : [{
			text : 'Apply',
			iconCls : 'icon-ok',
			cmd : 'extension-theme-apply;dialog-close'
		}, {
			text : 'Cancel',
			cmd : 'dialog-close'
		}
	]
});
!(function (){
	$('#dlg-theme-setting-preset a').linkbutton().on('click',function(e){
		var st = $(this).attr('data-style');
		if(st=='black'){
			updateItemsByConfig(themeWhiteOnBlack);
		}else if(st=='white'){
			updateItemsByConfig(themeBlackOnWhite);
		}
		Locale.update($('#dlg-theme-setting-items'));
	});
}());

function colorConfigToHTML(colorConfig){
	return Object.keys(colorConfig).reduce(function(html, k){
			return html + '<div style="margin-bottom:4px;"><button data-key="'+k+'" type="button" class="color" style="width:40px; background-color:'+colorConfig[k]+';" value="'+colorConfig[k]+'">&nbsp;</button> <span class="i18n">'+k.charAt(0).toUpperCase()+k.substr(1)+'</span></div>';
		}, '');
}
function updateItemsByConfig(colorConfig){
	var content = colorConfigToHTML(colorConfig);
	var $container = $('#dlg-theme-setting-items');
	$container.html(content);
	$('button.color',$container).colorpicker();
}

var themeWhiteOnBlack = {
		'background':'#000000',
		'foreground':'#FFFFFF',
		'grid':'#FFFFFF',
		'pin':'#FFFFFF',
		'bus':'#FFFFFF',
		'wire':'#FFFFFF',
		'text':'#FFFFFF',
		'busEntry':'#FFFFFF',
		'partGraphics':'#FFFFFF'
	},
	themeBlackOnWhite = {
		'background':'#FFFFFF',
		'foreground':'#000000',
		'grid':'#000000',
		'pin':'#000000',
		'bus':'#000000',
		'wire':'#000000',
		'text':'#000000',
		'busEntry':'#000000',
		'partGraphics':'#000000'
	};
