/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */
CKEDITOR.editorConfig = function(config) {
    // Define changes to default configuration here. For example:
    // config.language = 'fr';
    // config.uiColor = '#AADC6E';
    // %REMOVE_START%
    config.skin = 'minimalist';
    config.extraPlugins = 'oembed,widget,colorbutton,autogrow,font,dropdown';
    config.autoGrow_minHeight = 250;
    config.resize_enabled = false;

    config.toolbar = 'Full';
    config.toolbar_Full = [{
        name: 'basicstyles',
        items: ['Bold', 'Italic']
    }, {
        name: 'colors',
        items: ['TextColor', 'BGColor']
    }, {
        name: 'styles',
        items: ['Format', 'Font', 'FontSize']
    }, {
        name: 'paragraph',
        items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'CreateDiv',
            '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl'
        ]
    }, {
        name: 'links',
        items: ['Link', 'Unlink', 'Anchor']
    }, {
        name: 'insert',
        items: ['Image', 'oembed', 'Table']
    }, {
        name: 'document',
        items: ['Source']
    }];

    config.removeButtons = 'Underline,Subscript,Superscript,Strikethrough,Cut,Copy,Paste,PasteText,Undo,Redo,Anchor,SpecialChar,Maximize,Format';
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
        'image2,' +
        'indentblock,' +
        'link,' +
        'list,' +
        'liststyle,' +
        'magicline,' +
        'pastefromword,' +
        'pastetext,' +
        'showborders,' +
        'sourcearea,' +
        'stylescombo,' +
        'table,' +
        'tabletools,' +
        'toolbar,' +
        'undo,' +
        'wysiwygarea';
    // %REMOVE_END%
};

// %LEAVE_UNMINIFIED% %REMOVE_LINE%
