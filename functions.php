<?php
/**
 * Theme Functions.
 *
 * @package ag-theme
 */

/**
 * Essential theme supports
 * */

if ( ! defined( 'AG_DIR_PATH' ) ) {
	define( 'AG_DIR_PATH', untrailingslashit( get_template_directory() ) );
}
if ( ! defined( 'AG_DIR_URI' ) ) {
	define( 'AG_DIR_URI', untrailingslashit( get_template_directory_uri() ) );
}

require_once AG_DIR_PATH . '/inc/helpers/autoloader.php';
require_once AG_DIR_PATH . '/inc/helpers/template-tags.php';

// echo '<pre>';
// print_r(AG_DIR_PATH);
// wp_die();

function ag_get_theme_instance() {
	\AG_THEME\Inc\AG_THEME::get_instance();
}

ag_get_theme_instance();
