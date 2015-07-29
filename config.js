/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */
CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	// %REMOVE_START%
	config.skin = 'minimalist';
    config.extraPlugins = 'oembed,widget,colorbutton,autogrow';
    config.autoGrow_minHeight = 250;
    config.resize_enabled = false; 
    config.toolbarGroups = [
        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
        { name: 'colors', groups: [ 'colors' ] },
        { name: 'links', groups: [ 'links' ] },
        { name: 'forms', groups: [ 'forms' ] },
        { name: 'tools', groups: [ 'tools' ] },
        { name: 'insert', groups: [ 'insert' ] },
        { name: 'others', groups: [ 'others' ] },
        { name: 'paragraph', groups: [ 'list', 'indent', 'align', 'bidi', 'paragraph' ] },
        { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
        { name: 'about', groups: [ 'about' ] }
    ];
    config.removeButtons = 'Underline,Subscript,Superscript,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Anchor,SpecialChar,Maximize,Format';
	config.plugins =
		'basicstyles,' +
		'blockquote,' +
		'colorbutton,' +
		'colordialog,' +
		'dialogadvtab,' +
		'elementspath,' +
		'enterkey,' +
		'entities,' +
		'floatingspace,' +
		'font,' +
		'format,' +
		'htmlwriter,' +
		'image,' +
		'iframe,' +
		'indentblock,' +
		'justify,' +
		'link,' +
		'list,' +
		'liststyle,' +
		'magicline,' +
		'maximize,' +
		'pastefromword,' +
		'pastetext,' +
		'showborders,' +
		'sourcearea,' +
		'specialchar,' +
		'stylescombo,' +
		'table,' +
		'tabletools,' +
		'toolbar,' +
		'undo,' +
		'wysiwygarea';
	// %REMOVE_END%
};

// %LEAVE_UNMINIFIED% %REMOVE_LINE%
