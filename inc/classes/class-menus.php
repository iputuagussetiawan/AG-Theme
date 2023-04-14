<?php
/**
 * Register Menus
 *
 * @package ag-theme
 */

namespace AG_THEME\Inc;

use AG_THEME\Inc\Traits\Singleton;

class Menus {

	use Singleton;

	protected function __construct() {

		// load class.
		$this->setup_hooks();
	}

	protected function setup_hooks() {

		/**
		 * Actions.
		 */
		add_action( 'init', [ $this, 'register_menus' ] );
	}

	public function register_menus() {
		register_nav_menus([
			'ag-header-menu' => esc_html__( 'Header Menu', 'ag-theme' ),
			'ag-footer-menu' => esc_html__( 'Footer Menu', 'ag-theme' ),
		]);
	}

}