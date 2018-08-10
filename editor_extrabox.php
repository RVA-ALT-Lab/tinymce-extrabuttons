<?php

/*
Plugin Name: Editor Extrabox
*/

add_action('init', 'setup_tinymce_plugin');

function setup_tinymce_plugin () {

add_filter('mce_external_plugins', 'my_tinymce_plugins');

function my_tinymce_plugins($plugins_array) {
    $plugins_array['extrabox'] = plugin_dir_url(__FILE__) . 'editor_extrabox.js';
    return $plugins_array;
}

add_filter('mce_buttons', 'add_tinymce_button');

function add_tinymce_button ($buttons) {
    array_push($buttons, '|', 'extrabox');
    return $buttons;
}

}