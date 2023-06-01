<?php
/**
 * Enqueue theme assets
 *
 * @package ag-theme
 */

namespace AG_THEME\Inc;

use AG_THEME\Inc\Traits\Singleton;

class Assets {
	use Singleton;

	protected function __construct() {

		// load class.
		$this->setup_hooks();
	}

	protected function setup_hooks() {

		/**
		 * Actions.
		 */
		add_action( 'wp_enqueue_scripts', [ $this, 'register_styles' ] );
		add_action( 'wp_enqueue_scripts', [ $this, 'register_scripts' ] );
	}

	public function register_styles() {
		// Register styles.
		wp_register_style( 'app-css', AG_DIR_URI . '/dist/css/app.css', [], filemtime( AG_DIR_PATH . '/dist/css/app.css' ), 'all' );
		// Enqueue Styles.
		wp_enqueue_style( 'app-css' );
	}

	public function register_scripts() {
		// Register scripts.
		wp_register_script( 'app-js', AG_DIR_URI . '/dist/js/app.js', [], filemtime( AG_DIR_PATH . '/dist/js/app.js' ), true );
		wp_register_script( 'main-js', AG_DIR_URI . '/dist/js/app.js', ['jquery'], filemtime( AG_DIR_PATH . '/dist/js/app.js' ), true );
		// Enqueue Scripts.
		wp_enqueue_script( 'app-js' );
	}

}