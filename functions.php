<?php
/**
 * Theme Functions.
 *
 * @package ag-theme
 */

/**
 * Essential theme supports
 * */
function agtheme_enqueue_scripts() {
	/** tag-title **/
	wp_register_style( 'app-css', get_template_directory_uri() . '/dist/css/app.css', [], filemtime( get_template_directory() . '/dist/css/app.css' ), 'all' );//filemtime( get_template_directory() . '/style.css' )->versioning script
	wp_register_script( 'app-js', get_template_directory_uri() . '/dist/js/app.js', [], filemtime( get_template_directory() . '/dist/js/app.js' ), true );
    wp_enqueue_style( 'app-css' );
	wp_enqueue_script( 'app-js' );
}
add_action( 'wp_enqueue_scripts', 'agtheme_enqueue_scripts' );