<?php
/**
 * Template for entry content.
 *
 * To be used inside WordPress The Loop.
 *
 * @package ag-theme
 */

?>

<div class="entry-content">
	<?php
	if ( is_single() ) {
		the_content(
			sprintf(
				wp_kses(
				/* translators: %s: Name of current post. */
					__( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'aquila' ),
					[
						'span' => [
							'class' => []
						]
					]
				),
				the_title( '<span class="screen-reader-text">"', '"</span>', false )
			)
		);
		wp_link_pages(
			[
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'aquila' ),
				'after'  => '</div>',
			]
		);
	} else {
		agtheme_the_excerpt( 200 );
		printf( '<br>' );
		echo agtheme_excerpt_more();
	}
	?>
</div>