const a0_0xec9d3e=a0_0x5168;function a0_0x2c5d(){const _0x4cf956=['template_type','listenTo','BaseView','apply','1063oXEUTE','get_category_by_index','_onDashboardThemeChanged','dispose','isArray','init','renderChart','value','isComponent','3725625HsxLZX','get_widget','setOption','getTime','parse','get_data_source','BaseModel','178524STHeXi','view','69664ghagnz','config_id','3297792SDxHFl','initResizeListener','resizeChart','content','type','traits','4666041XyMbPy','extend','data','default_option','trigger_up','label','linked_config_ids','model','778SZBDIW','util','set','DomComponents','forEach','_onOptionChanged','series','stringify','get_theme_name','initialize','getExtraOption','bind','preventDefault','push','drill_down_config','defaults','onSeriesClick','define','timestamp','trigger','bus','merge','xAxis','5MbvJoP','search_sensitive','origin_value','resize','py_eval','length','enable_drill_down','623epjpKm','removed','get','render','dataIndex','_onResize','onResize','chart','2550992GwvRsr','10RwQtAP','removeResizeListener','addResizeListener','chart_type','187UmPSAK','save_custom_props','on_block_settings_change','execute_default_script','prototype'];a0_0x2c5d=function(){return _0x4cf956;};return a0_0x2c5d();}function a0_0x5168(_0xfcea69,_0x1f9416){const _0x2c5d46=a0_0x2c5d();return a0_0x5168=function(_0x516802,_0x50bda6){_0x516802=_0x516802-0x103;let _0x2a1836=_0x2c5d46[_0x516802];return _0x2a1836;},a0_0x5168(_0xfcea69,_0x1f9416);}(function(_0x2f1e3d,_0x3a2569){const _0x5585e1=a0_0x5168,_0x45ce78=_0x2f1e3d();while(!![]){try{const _0x40493c=parseInt(_0x5585e1(0x142))/0x1*(-parseInt(_0x5585e1(0x10e))/0x2)+parseInt(_0x5585e1(0x14b))/0x3+-parseInt(_0x5585e1(0x134))/0x4*(-parseInt(_0x5585e1(0x125))/0x5)+-parseInt(_0x5585e1(0x156))/0x6+parseInt(_0x5585e1(0x12c))/0x7*(parseInt(_0x5585e1(0x154))/0x8)+parseInt(_0x5585e1(0x106))/0x9*(-parseInt(_0x5585e1(0x135))/0xa)+-parseInt(_0x5585e1(0x139))/0xb*(parseInt(_0x5585e1(0x152))/0xc);if(_0x40493c===_0x3a2569)break;else _0x45ce78['push'](_0x45ce78['shift']());}catch(_0xd99bda){_0x45ce78['push'](_0x45ce78['shift']());}}}(a0_0x2c5d,0xe0a4a),odoo[a0_0xec9d3e(0x11f)]('mana_dashboard.chart_builder',function(require){'use strict';const _0x20cd23=a0_0xec9d3e;const _0x3f29d7=require('mana_dashboard.block_base'),_0x340a07=_0x3f29d7[_0x20cd23(0x151)],_0x4dc1a8=_0x3f29d7[_0x20cd23(0x140)],_0x143c76=require('mana_dashboard.resize_manager'),_0x41fadb=_0x143c76[_0x20cd23(0x137)],_0x20eaef=_0x143c76[_0x20cd23(0x136)],_0x8e29e4=require('web.py_utils');var _0x584588=require('web.core'),_0xaf3bcc=_0x584588['_t'];const _0x10a1bd=function(_0x494f38){const _0xe349d8=_0x20cd23;let _0x2ff965=_0x340a07['extend']({'defaults':{..._0x340a07[_0xe349d8(0x13d)][_0xe349d8(0x11d)],'classes':['mana_chart',_0x494f38[_0xe349d8(0x138)]],'attributes':{'config_id':undefined,'chart_type':_0x494f38['chart_type']},'droppable':![],'traits':_0x494f38[_0xe349d8(0x105)]||[],'resizable':{'tl':0x0,'tc':0x1,'tr':0x0,'cl':0x0,'cr':0x0,'bl':0x0,'bc':0x1,'br':0x0},'default_option':_0x494f38[_0xe349d8(0x109)],'chart_type':_0x494f38[_0xe349d8(0x138)],'default_template':_0x494f38['default_template'],'template_category':_0x494f38['template_category'],'template_type':_0x494f38[_0xe349d8(0x13e)],'search_sensitive':_0x494f38[_0xe349d8(0x126)],'enable_drill_down':_0x494f38[_0xe349d8(0x12b)]||![],'script_execute_mode':'immediately','traits':[{'type':'form_trait','name':'form_trait','label':_0xaf3bcc('Block Settings'),'model':'mana_dashboard.block_settings','form_view_ref':'mana_dashboard.block_settings_form','context':{},'changeProp':0x1}]},'get_default_props'(){const _0x415e61=_0xe349d8;return{'default_content':this[_0x415e61(0x12e)]('block_settings')||'{}'};},'initialize'(){const _0x75899b=_0xe349d8;_0x340a07[_0x75899b(0x13d)][_0x75899b(0x117)][_0x75899b(0x141)](this,arguments),this['on']('change_date_range',()=>{const _0x50087a=_0x75899b;this[_0x50087a(0x121)]('change:chart_option');}),this[_0x75899b(0x13f)](this,'change:attributes:config_id',this['_onChangeConfigId']),this[_0x75899b(0x13f)](this,'change:form_trait',this['on_form_trait_change']),this[_0x75899b(0x13f)](this,'change:block_settings',this[_0x75899b(0x13b)]);},'on_block_settings_change'(){const _0x229e85=_0xe349d8;this[_0x229e85(0x153)]&&this[_0x229e85(0x153)][_0x229e85(0x113)]();},'_onChangeConfigId'(){const _0x345a84=_0xe349d8;this['set']('chart_option',this[_0x345a84(0x12e)]('default_option'));},'on_form_trait_change'(){const _0x211d85=_0xe349d8;let _0x363b54=this[_0x211d85(0x12e)]('form_trait'),_0x4b3597=_0x363b54[_0x211d85(0x103)],_0x1dd941=_0x8e29e4[_0x211d85(0x129)](_0x4b3597||'{}');this['set']('block_settings',_0x1dd941),this[_0x211d85(0x13a)]();},'parse_custom_props'(_0x3174a0){const _0x13508d=_0xe349d8;_0x3174a0=_0x3174a0||{};let _0x314aa5=_0x8e29e4[_0x13508d(0x129)](_0x3174a0||'{}');this[_0x13508d(0x110)]('block_settings',_0x314aa5,{'silent':!![]});},'get_custom_props'(){let _0x380b50=this['get']('block_settings')||{};return _0x380b50;}},{'isComponent':_0x494f38[_0xe349d8(0x14a)]}),_0x308036=_0x4dc1a8[_0xe349d8(0x107)]({'init'(){const _0x45a7a8=_0xe349d8;_0x4dc1a8['prototype'][_0x45a7a8(0x147)][_0x45a7a8(0x141)](this,arguments),this[_0x45a7a8(0x133)]=null,this['_onResize']=this[_0x45a7a8(0x132)][_0x45a7a8(0x119)](this),this['listenTo'](this[_0x45a7a8(0x10d)],'change:chart_option',this[_0x45a7a8(0x113)]),_0x584588[_0x45a7a8(0x122)]['on']('mana_dashboard.dashboard_theme_changed',this,this['_onDashboardThemeChanged']);},'initResizeListener'(){const _0x206752=_0xe349d8;_0x20eaef(this['el'],this[_0x206752(0x131)]),_0x41fadb(this['el'],this['_onResize']);},'_onDashboardThemeChanged'(){const _0x25a9c4=_0xe349d8;this[_0x25a9c4(0x133)]&&(this[_0x25a9c4(0x133)]['dispose'](),this[_0x25a9c4(0x133)]=null),setTimeout(()=>{const _0x2ef708=_0x25a9c4;this[_0x2ef708(0x12f)]();},0x0);},'_onchange_theme'(){const _0x34fee6=_0xe349d8;this[_0x34fee6(0x144)]();},'beforeScriptExecuted'(){const _0x507892=_0xe349d8;this[_0x507892(0x10d)]['set']('chart_option',null,{'silent':!![]});},'afterScriptExecuted'(){const _0x4b3d8a=_0xe349d8;this[_0x4b3d8a(0x133)]&&this[_0x4b3d8a(0x133)][_0x4b3d8a(0x128)]();let _0x4670cf=this[_0x4b3d8a(0x10d)][_0x4b3d8a(0x12e)]('attributes')[_0x4b3d8a(0x155)];if(!_0x4670cf)return;let _0x413a96=this[_0x4b3d8a(0x10d)]['get']('editor_ready');if(!_0x413a96)return;let _0x56681c=this[_0x4b3d8a(0x10d)][_0x4b3d8a(0x12e)]('loading_config');if(_0x56681c)return;if(this[_0x4b3d8a(0x10d)]['get']('has_script')&&this['model'][_0x4b3d8a(0x12e)]('script')){let _0x57bcac=this['model'][_0x4b3d8a(0x12e)]('chart_option');if(!_0x57bcac){let _0x572c9b=this['model'][_0x4b3d8a(0x12e)]('default_scripts');!_0x572c9b?this['model']['set']('chart_option',this[_0x4b3d8a(0x10d)][_0x4b3d8a(0x12e)]('default_option')):setTimeout(()=>{const _0x27401f=_0x4b3d8a;this[_0x27401f(0x10d)][_0x27401f(0x13c)]();},0x0);}}},'_onOptionChanged'(){const _0x24686e=_0xe349d8;let _0x5e63e4=this['model'][_0x24686e(0x12e)]('chart_option');if(_0x5e63e4){let _0x49c835=JSON[_0x24686e(0x14f)](JSON[_0x24686e(0x115)](this[_0x24686e(0x118)]()||{}));if(_0x49c835){_0x5e63e4=echarts['util'][_0x24686e(0x123)](_0x49c835,_0x5e63e4);if(_0x5e63e4['series']){let _0xf7fb6c=[];if(Array[_0x24686e(0x146)](_0x5e63e4[_0x24686e(0x114)]))_0x5e63e4[_0x24686e(0x114)][_0x24686e(0x112)](_0x160021=>{const _0x5f2dd8=_0x24686e;let _0x55cf17=_0x160021[_0x5f2dd8(0x104)],_0x4addc2=JSON[_0x5f2dd8(0x14f)](JSON[_0x5f2dd8(0x115)](_0x49c835[_0x55cf17]||{}));_0x160021=echarts[_0x5f2dd8(0x10f)]['merge'](_0x4addc2,_0x160021),_0xf7fb6c[_0x5f2dd8(0x11b)](_0x160021);}),_0x5e63e4['series']=_0xf7fb6c;else{if(typeof _0x5e63e4[_0x24686e(0x114)]==='object'){let _0x577755=_0x5e63e4[_0x24686e(0x114)][_0x24686e(0x104)],_0x1b3804=JSON['parse'](JSON[_0x24686e(0x115)](_0x49c835[_0x577755]||{}));_0x5e63e4['series']=echarts[_0x24686e(0x10f)][_0x24686e(0x123)](_0x1b3804,_0x5e63e4[_0x24686e(0x114)]);}}}}}this[_0x24686e(0x133)]&&_0x5e63e4?this['chart'][_0x24686e(0x14d)](_0x5e63e4,!![]):this[_0x24686e(0x148)](_0x5e63e4);},'onResize'(_0x48e36b){const _0x4d55b5=_0xe349d8;if(!this[_0x4d55b5(0x133)])return;let _0x3ae006=this[_0x4d55b5(0x10d)]['get']('is_dragging');if(_0x3ae006)return;this[_0x4d55b5(0x158)](_0x48e36b);},'resizeChart'(_0x1cf058){const _0x130520=_0xe349d8;this[_0x130520(0x133)]&&(_0x20eaef(this['el'],this[_0x130520(0x131)]),this[_0x130520(0x133)]['resize'](),_0x41fadb(this['el'],this['_onResize']));},'handleClick'(_0xee59e3){const _0x2945a1=_0xe349d8;_0xee59e3[_0x2945a1(0x11a)]();},'renderChart'(_0x22fafb){const _0x4ec33c=_0xe349d8;if(!this[_0x4ec33c(0x133)]){let _0x5e8ccd=this[_0x4ec33c(0x10d)]['get']('theme');if(_0x5e8ccd){let _0x2304df=this['model'][_0x4ec33c(0x12e)]('theme_name');this['chart']=echarts[_0x4ec33c(0x147)](this['el'],_0x2304df);}else{let _0x1c380a=this[_0x4ec33c(0x14c)]();if(_0x1c380a){let _0x452c10=_0x1c380a[_0x4ec33c(0x116)]();_0x452c10&&(this[_0x4ec33c(0x133)]=echarts[_0x4ec33c(0x147)](this['el'],_0x452c10));}}!this['chart']&&(this[_0x4ec33c(0x133)]=echarts[_0x4ec33c(0x147)](this['el']));}_0x22fafb&&this[_0x4ec33c(0x133)][_0x4ec33c(0x14d)](_0x22fafb),this['chart']['on']('click',_0x1abdae=>{const _0x292b4d=_0x4ec33c;_0x1abdae['componentType']==='series'&&this[_0x292b4d(0x11e)](_0x1abdae);});},'onSeriesClick'(_0x176222){const _0x417b3a=_0xe349d8;let _0x474699=_0x176222[_0x417b3a(0x130)],_0x3d8287=_0x176222['name'],_0x2c7c3c=_0x176222[_0x417b3a(0x149)],_0x172f1e=this[_0x417b3a(0x10d)][_0x417b3a(0x12e)]('chart_option'),_0x46d71c=_0x176222[_0x417b3a(0x108)];if(_0x46d71c&&typeof _0x46d71c==='object')_0x46d71c[_0x417b3a(0x127)]&&(_0x3d8287=_0x46d71c[_0x417b3a(0x127)]);else{if(_0x172f1e[_0x417b3a(0x143)])_0x3d8287=_0x172f1e[_0x417b3a(0x143)](_0x474699);else{let _0x91bd9b=_0x172f1e[_0x417b3a(0x124)],_0x466c64=_0x91bd9b&&_0x91bd9b[_0x417b3a(0x108)]&&_0x91bd9b[_0x417b3a(0x108)][_0x474699];_0x466c64&&(typeof _0x466c64==='object'&&_0x466c64['origin_value']&&(_0x3d8287=_0x466c64['origin_value']));}}let _0x52e63a=this[_0x417b3a(0x10d)][_0x417b3a(0x12e)]('config'),_0x1a0658=_0x52e63a[_0x417b3a(0x11c)];if(_0x1a0658){let _0x243a56=parseInt(_0x1a0658[0x0]);this[_0x417b3a(0x10a)]('mana_dashboard.drill_down',{'config_id':_0x243a56,'category':_0x3d8287,'model':this[_0x417b3a(0x10d)],'value':_0x2c7c3c});}else _0x52e63a[_0x417b3a(0x10c)]&&_0x52e63a[_0x417b3a(0x10c)][_0x417b3a(0x12a)]>0x0?this[_0x417b3a(0x10a)]('mana_dashboard.linked_actions',{'linked_config_ids':_0x52e63a[_0x417b3a(0x10c)],'category':_0x3d8287,'model':this[_0x417b3a(0x10d)],'value':_0x2c7c3c}):this[_0x417b3a(0x10a)]('mana_dashboard.view_chart_data',{'category':_0x3d8287,'model':this[_0x417b3a(0x10d)],'value':_0x2c7c3c,'params':_0x176222});},'getExtraOption'(){const _0x1aa502=_0xe349d8;let _0x251c84=this[_0x1aa502(0x10d)]['get']('block_settings');return _0x251c84;},'setOption'(_0x198507){const _0x389f57=_0xe349d8;_0x198507[_0x389f57(0x120)]=new Date()[_0x389f57(0x14e)](),this[_0x389f57(0x10d)][_0x389f57(0x110)]('chart_option',_0x198507);},'set_option'(_0x46ec95){const _0xa3bd34=_0xe349d8;this[_0xa3bd34(0x14d)](_0x46ec95);},'setChartOption'(_0x1eb33b){this['setOption'](_0x1eb33b);},'set_chart_option'(_0x364fdc){this['setOption'](_0x364fdc);},'getDataSource'(_0x1aa8b5=0x0){const _0x3b5677=_0xe349d8;return this[_0x3b5677(0x150)](_0x1aa8b5);},'setChartOption'(_0x5af847){const _0x3554f3=_0xe349d8;_0x5af847[_0x3554f3(0x120)]=new Date()[_0x3554f3(0x14e)](),this[_0x3554f3(0x10d)][_0x3554f3(0x110)]('chart_option',_0x5af847);},'removed'(){const _0x59d3cf=_0xe349d8;_0x4dc1a8[_0x59d3cf(0x13d)][_0x59d3cf(0x12d)][_0x59d3cf(0x141)](this,arguments),_0x584588['bus']['off']('mana_dashboard.dashboard_theme_changed',this,this[_0x59d3cf(0x144)]),_0x20eaef(this['el'],this['_onResize']),this[_0x59d3cf(0x133)]&&(this[_0x59d3cf(0x133)][_0x59d3cf(0x145)](),this[_0x59d3cf(0x133)]=null);},'render'(..._0x3950b1){const _0x28e538=_0xe349d8;_0x4dc1a8[_0x28e538(0x13d)][_0x28e538(0x12f)][_0x28e538(0x141)](this,_0x3950b1);if(this[_0x28e538(0x133)]){try{this[_0x28e538(0x133)][_0x28e538(0x145)]();}catch(_0xadef5d){console['error'](_0xadef5d);}this['chart']=null;}let _0x3a3ee0=this['model'][_0x28e538(0x12e)]('editor_ready');if(!_0x3a3ee0)return this;let _0x3812cf=null,_0x1e4e11=this[_0x28e538(0x10d)]['get']('config');if(_0x1e4e11&&!this['model'][_0x28e538(0x12e)]('loading_config')){_0x3812cf=this[_0x28e538(0x10d)][_0x28e538(0x12e)]('chart_option');if(!_0x3812cf){let _0x3b9b18=this[_0x28e538(0x10d)][_0x28e538(0x12e)]('default_scripts');!_0x3b9b18&&(_0x3812cf=this[_0x28e538(0x10d)]['get']('default_option'));}_0x3812cf&&(this[_0x28e538(0x10d)][_0x28e538(0x110)]('chart_option',_0x3812cf,{'silent':!![]}),this['renderChart'](_0x3812cf));}return this[_0x28e538(0x157)](),this;}});return(_0x3119f1,_0x5241b6={})=>{const _0x4b721c=_0xe349d8;var _0x68943a=_0x3119f1[_0x4b721c(0x111)];_0x3119f1['BlockManager']['add'](_0x494f38['type'],{'label':_0x494f38[_0x4b721c(0x10b)],'category':_0xaf3bcc('Charts'),'select':!![],'render':_0x494f38[_0x4b721c(0x12f)],'content':_0x494f38[_0x4b721c(0x103)]}),_0x68943a['addType'](_0x494f38[_0x4b721c(0x138)],{'model':_0x2ff965,'view':_0x308036});};};return _0x10a1bd;}));