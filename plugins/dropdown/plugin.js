CKEDITOR.plugins.add( 'dropdown',
{
   requires : ['richcombo'], //, 'styles' ],
   init : function( editor )
   {
      var config = editor.config,
         lang = editor.lang.format;

      // Gets the list of tags from the settings.
      var tags = editor.config.dropdownValues; //new Array();

      // Create style objects for all defined styles.

      editor.ui.addRichCombo( 'dropdown',
         {
            label : "Process Fields",

            className : 'cke_format',
            multiSelect : false,

            panel :
            {
               css : [ config.contentsCss, CKEDITOR.getUrl( editor.skinPath + 'editor.css' ) ],
               voiceLabel : lang.panelVoiceLabel
            },

            init : function()
            {

               //this.add('value', 'drop_text', 'drop_label');
               for (var this_tag in tags){
                  this.add(tags[this_tag][0], tags[this_tag][1], tags[this_tag][2]);
               }
            },

            onClick : function( value )
            {

               editor.fire( 'saveSnapshot' );
               editor.insertHtml(value);
               editor.fire( 'saveSnapshot' );
            }
         });
   }
});