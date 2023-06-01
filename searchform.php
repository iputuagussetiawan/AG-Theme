<?php 
/**
 * Custom Search Form
 */
?>

<form role="search" method="get" class="d-flex" action="<?php echo esc_url( home_url( '/' ) ); ?>"placeholder="Search" aria-label="Search" >
	<span class="screen-reader-text"><?php echo _x( 'Search for:', 'label', 'ag-theme' ); ?></span>
	<input class="form-control mr-sm-2" type="search" placeholder="<?php echo esc_attr_x( 'Search', 'placeholder', 'ag-theme' ); ?>" value="<?php the_search_query(); ?>" aria-label="Search" name="s">
	<button class="btn btn-outline-success" type="submit"><?php echo esc_attr_x( 'Search', 'submit button', 'ag-theme' ); ?></button>
</form>