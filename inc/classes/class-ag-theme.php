<?php
/**
 * Bootstraps the Theme.
 *
 * @package ag-theme
 */

namespace AG_THEME\Inc;

use AG_THEME\Inc\Traits\Singleton;

class AG_THEME {
	use Singleton;

	protected function __construct() {
        //wp_die( 'hallow' );

		// load class.
		$this->set_hooks();
	}

	protected function set_hooks() {
		// actions and filters
	}
}