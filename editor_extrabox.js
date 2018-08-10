tinymce.PluginManager.add('extrabox', function(editor, url) {
    // Add a button that opens a window
    editor.addButton('extrabox', {
        text: 'My Extrabox',
        icon: false,
        onclick: function() {
            // Open window
            let selection = editor.selection.getContent();
					if ( selection !== '' ) {
						editor.execCommand(
							'mceReplaceContent',
							false,
							'<div class="textbox textbox--alternative-textbox" style="margin-bottom: 1.35em; padding: 0; border-radius: 0; border-style: none; border-width: 0; color: #000; background: #fcf4a3;"><header class="textbox__header" style="background: #c49120; border-top-left-radius: 0; border-top-right-radius: 0; color: #fff; font-size: 0.9em; font-style: italic; font-weight: normal; margin: 0; padding: 1.7777777778em 1.7777777778em 1.7777777778em 1.7777777778em; text-align: left;"><p class="textbox__title" style="font-size: 1.25em;"> Heading</p></header><div class="textbox__content" style="margin: 0;padding: 1.7777777778em 1.7777777778em 1.7777777778em 1.7777777778em;" > <p>Here is all of the content</p></div></div>'
						);
					} else {
						editor.execCommand(
							'mceInsertContent',
							0,
							'<div class="textbox textbox--alternative-textbox" style="margin-bottom: 1.35em; padding: 0; border-radius: 0; border-style: none; border-width: 0; color: #000; background: #fcf4a3;"><header class="textbox__header" style="background: #c49120; border-top-left-radius: 0; border-top-right-radius: 0; color: #fff; font-size: 0.9em; font-style: italic; font-weight: normal; margin: 0; padding: 1.7777777778em 1.7777777778em 1.7777777778em 1.7777777778em; text-align: left;"><p class="textbox__title" style="font-size: 1.25em;"> Heading</p></header><div class="textbox__content" style="margin: 0;padding: 1.7777777778em 1.7777777778em 1.7777777778em 1.7777777778em;" > <p>Here is all of the content</p></div></div>'
						);
					}

            // editor.dom.add(editor.getBody(), 'div', {}, '<div class="textbox textbox--alternative-textbox" style="margin-bottom: 1.35em; padding: 0; border-radius: 0; border-style: none; border-width: 0; color: #000; background: #fcf4a3;"><header class="textbox__header" style="background: #c49120; border-top-left-radius: 0; border-top-right-radius: 0; color: #fff; font-size: 0.9em; font-style: italic; font-weight: normal; margin: 0; padding: 1.7777777778em 1.7777777778em 1.7777777778em 1.7777777778em; text-align: left;"><p class="textbox__title" style="font-size: 1.25em;"> Heading</p></header><div class="textbox__content" style="margin: 0;padding: 1.7777777778em 1.7777777778em 1.7777777778em 1.7777777778em;" > <p>Here is all of the content</p></div></div>')
        }
    });
});