<?php
  /* Busca o arquivo header.php do tema e includa na página */
  get_header();
?>


			<section class="sessao-interna">
        			<img src="<?php bloginfo('template_url'); ?>/imgs/topo-interna.jpg" class="responsive-img">
			</section>

			  <section id="quem-somos">
				  	<div class="container">
						<div class="row">
							
							<div class="col s12">
									<h1 class="titulo center"><span><?php echo strip_tags(get_the_title()); ?></span></h1>
								<?php if(have_posts()) : while(have_posts()) : the_post(); ?>
								<div class="texto">
									 
									 	<?php the_content(); ?> 
									
								</div>
								  <?php endwhile; endif; ?> 
         							<?php wp_reset_query(); ?>   
								<p><a class="waves-effect waves-light btn-large" href="<?php bloginfo('url'); ?>/">voltar</a></p>
							</div>
						</div>		
				  	</div>
			  </section>

<?php
  /* Busca o arquivo header.php do tema e includa na página */
  get_footer();
?>
