/*
 * XenForo cache_rebuild.min.js
 * Copyright 2010-2012 XenForo Ltd.
 * Released under the XenForo License Agreement: http://xenforo.com/license-agreement
 */
(function(b,f,c){XenForo.CacheRebuild=function(a){this.__construct(a)};XenForo.CacheRebuild.prototype={__construct:function(a){this.$form=a;this.enabled=!0;a.submit(b.context(this,"formSubmit"));a.submit()},formSubmit:function(a){this.enabled&&(b("#ProgressText").show(),b("#ErrorText").hide(),b("input:submit",this.$form).hide(),b(c).trigger("PseudoAjaxStart"),Math.random()>0.9||(XenForo.ajax(this.$form.attr("action"),this.$form.serializeArray(),b.context(this,"formSubmitResponse"),{error:b.context(this,
"formSubmitError"),timeout:125E3}),a.preventDefault()))},formSubmitResponse:function(a){var d=!1;if(a)try{a.error&&(d=!0);if(a._redirectTarget){f.location=a._redirectTarget;return}if(!a.rebuildMessage)a.rebuildMessage="";b(".RebuildMessage",this.$form).text(a.rebuildMessage);if(!a.detailedMessage)a.detailedMessage="";b(".DetailedMessage",this.$form).text(a.detailedMessage);a.showExitLink?b("#ExitLink").show():b("#ExitLink").hide();if(a.elements){for(var e in a.elements)b('input[name="'+e+'"]',this.$form).val(a.elements[e]);
this.$form.submit();return}}catch(c){}this._formSubmitError(d)},formSubmitError:function(a){this._formSubmitError(a&&a.readyState==4&&a.responseText)},_formSubmitError:function(a){this.enabled=!1;this.$form.data("MultiSubmitEnable")&&this.$form.data("MultiSubmitEnable")();b("#ProgressText").hide();b("#ErrorText").show();a?this.$form.submit():b("input:submit",this.$form).show()}};XenForo.register("form.CacheRebuild","XenForo.CacheRebuild")})(jQuery,this,document);