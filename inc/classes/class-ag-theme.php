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
        Assets::get_instance();
		Menus::get_instance();
		Meta_Boxes::get_instance();
		Widgets::get_instance();
		$this->set_hooks();
	}

	protected function set_hooks() {
		// actions and filters
		add_action( 'after_setup_theme', [ $this, 'setup_theme' ] );
		add_action( 'widgets_init', [ $this, 'register_clock_widget' ] );
		add_filter('get_custom_logo', [ $this, 'ag_change_logo_class' ] );
		
	}

	function register_clock_widget() {
		register_widget( 'AG_THEME\Inc\Clock_Widget' );
	}

	/**
	 * Setup theme.
	 *
	 * @return void
	 */
	public function setup_theme() {

		/**
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/**
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * Adding this will allow you to select the featured image on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		/**
		 * Register image sizes.
		 */
		add_image_size( 'featured-thumbnail', 350, 233, true );


		// Add theme support for selective refresh for widgets.
		/**
		 * WordPress 4.5 includes a new Customizer framework called selective refresh
		 *
		 * Selective refresh is a hybrid preview mechanism that has the performance benefit of not having to refresh the entire preview window.
		 *
		 * @link https://make.wordpress.org/core/2016/03/22/implementing-selective-refresh-support-for-widgets/
		 */
		add_theme_support( 'customize-selective-refresh-widgets' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/**
		 * Switch default core markup for search form, comment form, comment-list, gallery, caption, script and style
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			[
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'script',
				'style',
			]
		);

		/**
		 * Adds Custom background panel to customizer.
		 *
		 * @see Enable Custom Backgrounds
		 * @link https://developer.wordpress.org/themes/functionality/custom-backgrounds/#enable-custom-backgrounds
		 */
		add_theme_support(
			'custom-background',
			[
				'default-color' => 'ffffff',
				'default-image' => '',
			]
		);

		/**
		 * Custom logo.
		 *
		 * @see Adding custom logo
		 * @link https://developer.wordpress.org/themes/functionality/custom-logo/#adding-custom-logo-support-to-your-theme
		 */
		add_theme_support(
			'custom-logo',
			[
				'header-text' => [
					'site-title',
					'site-description',
				],
				'height'      => 100,
				'width'       => 400,
				'flex-height' => true,
				'flex-width'  => true,
			]
		);

		/**
		 * It allows you to link a custom stylesheet file to the TinyMCE editor within the post edit screen.
		 *
		 * Since we are not passing any parameter to the function,
		 * it will by default, link the editor-style.css file located directly under the current theme directory.
		 * You can can add 'editor-style.css' if you like to support TinyMCE editor styles.
		 *
		 * @see add_editor_style(
		 * @link https://developer.wordpress.org/reference/functions/add_editor_style/
		 */
		add_editor_style();

		// Gutenberg theme support.

		/**
		 * Some blocks in Gutenberg like tables, quotes, separator benefit from structural styles (margin, padding, border etc…)
		 * They are applied visually only in the editor (back-end) but not on the front-end to avoid the risk of conflicts with the styles wanted in the theme.
		 * If you want to display them on front to have a base to work with, in this case, you can add support for wp-block-styles, as done below.
		 * @see Theme Styles.
		 * @link https://make.wordpress.org/core/2018/06/05/whats-new-in-gutenberg-5th-june/, https://developer.wordpress.org/block-editor/developers/themes/theme-support/#default-block-styles
		 */
		add_theme_support( 'wp-block-styles' );

		/**
		 * Some blocks such as the image block have the possibility to define
		 * a “wide” or “full” alignment by adding the corresponding classname
		 * to the block’s wrapper ( alignwide or alignfull ). A theme can opt-in for this feature by calling
		 * add_theme_support( 'align-wide' ), like we have done below.
		 *
		 * @see Wide Alignment
		 * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#wide-alignment
		 */
		add_theme_support( 'align-wide' );

		/**
		 * Register Nav Menu.
		 *
		 * Here primary is 'theme-location'
		 *
		 * @see Register Menus
		 * @link https://developer.wordpress.org/themes/functionality/navigation-menus/#register-menus
		 */
		register_nav_menus(
			[
				'primary' => esc_html__( 'Primary Menu', 'blank-theme' ),
			]
		);

		/**
		 * Set the maximum allowed width for any content in the theme,
		 * like oEmbeds and images added to posts.
		 *
		 * @see Content Width
		 * @link https://codex.wordpress.org/Content_Width
		 */
		global $content_width;
		if ( ! isset( $content_width ) ) {
			$content_width = 1240;
		}
	}
	public function ag_change_logo_class($html)
	{
		$html = str_replace('custom-logo-link', 'navbar-brand', $html);
		$html = str_replace('custom-logo', 'img-responsive', $html);
		return $html;
	}
}