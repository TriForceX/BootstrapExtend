<?php include('header.php'); ?>

<!-- ================================================= NAV MENU ================================================= -->

<nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
	<div class="container">
		<!-- NAVBAR CONTAINER -->
		
		<a class="navbar-brand notranslate d-block d-md-none d-lg-block" href="#">Website Base</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav ml-auto mr-sm-auto  ml-lg-auto mr-lg-0">
				<li class="nav-item active">
					<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown01" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Information
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown01">
						<a class="dropdown-item" href="https://github.com/TriForceX/WebsiteBase/wiki" target="_blank">Wiki</a>
						<a class="dropdown-item" href="https://github.com/TriForceX/WebsiteBase" target="_blank">Repository</a>
					</div>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown02" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Resources
					</a>
					<div class="dropdown-menu dropdown-overflow-lg" aria-labelledby="navbarDropdown02">
						<a class="dropdown-item" href="http://bootboxjs.com/" target="_blank">BootBox JS</a>
						<a class="dropdown-item" href="https://clipboardjs.com/" target="_blank">Clipboard JS</a>
						<a class="dropdown-item" href="https://datatables.net/examples/styling/bootstrap4" target="_blank">Data Tables</a>
						<a class="dropdown-item" href="https://fontawesome.com/start" target="_blank">Font Awesome</a>
						<a class="dropdown-item" href="http://holderjs.com/" target="_blank">Holder JS</a>
                        <a class="dropdown-item" href="http://ianlunn.github.io/Hover/" target="_blank">Hover CSS</a>
						<a class="dropdown-item" href="https://imagesloaded.desandro.com" target="_blank">Images Loaded</a>
						<a class="dropdown-item" href="https://jquery.com/" target="_blank">jQuery</a>
						<a class="dropdown-item" href="https://github.com/pupunzi/jquery.mb.browser" target="_blank">jQuery Browser</a>
						<a class="dropdown-item" href="https://github.com/js-cookie/js-cookie" target="_blank">jQuery Cookie</a>
						<a class="dropdown-item" href="https://github.com/kayahr/jquery-fullscreen-plugin" target="_blank">jQuery Fullscreen</a>
						<a class="dropdown-item" href="http://jqueryrotate.com/" target="_blank">jQuery Rotate</a>
						<a class="dropdown-item" href="https://jqueryui.com/" target="_blank">jQuery UI</a>
						<a class="dropdown-item" href="http://sachinchoolur.github.io/lightGallery/" target="_blank">Light Gallery</a>
                        <a class="dropdown-item" href="https://masonry.desandro.com/" target="_blank">Masonry JS</a>
						<a class="dropdown-item" href="https://github.com/PHPMailer/PHPMailer/" target="_blank">PHP Mailer</a>
						<a class="dropdown-item" href="https://popper.js.org/" target="_blank">Popper</a>
						<a class="dropdown-item" href="https://tempusdominus.github.io/bootstrap-4/" target="_blank">Tempus Dominus</a>
						<a class="dropdown-item" href="https://www.tiny.cloud/" target="_blank">TinyMCE</a>
						<a class="dropdown-item" href="http://labs.rampinteractive.co.uk/touchSwipe/demos/" target="_blank">Touch Swipe</a>
					</div>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown03" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Utilities
					</a>
					<div class="dropdown-menu dropdown-overflow-lg" aria-labelledby="navbarDropdown03">
						<a class="dropdown-item" href="https://www.w3schools.com" target="_blank">W3 Schools Tutorials</a>
						<a class="dropdown-item" href="https://www.w3schools.com/howto/" target="_blank">W3 Schools How To</a>
						<a class="dropdown-item" href="https://bootsnipp.com/tags/4.1.1" target="_blank">Bootstrap Snippets</a>
						<a class="dropdown-item" href="https://libraries.io" target="_blank">Open Source Libraries</a>
						<a class="dropdown-item" href="https://www.jqueryscript.net/" target="_blank">jQuery Scripts</a>
						<a class="dropdown-item" href="https://api.jquery.com" target="_blank">jQuery API</a>
						<a class="dropdown-item" href="http://jqueryui.com" target="_blank">jQuery UI API</a>
						<a class="dropdown-item" href="http://php.net" target="_blank">PHP Documentation</a>
					</div>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown04" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Bootstrap
					</a>
					<div class="dropdown-menu dropdown-overflow-lg" aria-labelledby="navbarDropdown04">
						<a class="dropdown-item" href="https://getbootstrap.com/docs/4.1/layout/overview/" target="_blank">Layout</a>
						<a class="dropdown-item" href="https://getbootstrap.com/docs/4.1/layout/grid/" target="_blank">Grid</a>
						<a class="dropdown-item" href="https://getbootstrap.com/docs/4.1/components/buttons/" target="_blank">Components</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-header" href="https://getbootstrap.com/docs/4.1/examples/starter-template/" target="_blank">Starter Template</a>
						<a class="dropdown-header" href="https://getbootstrap.com/docs/4.1/examples/grid/" target="_blank">Grid</a>
						<a class="dropdown-header" href="https://getbootstrap.com/docs/4.1/examples/jumbotron/" target="_blank">Jumborton</a>
						<a class="dropdown-header" href="https://getbootstrap.com/docs/4.1/examples/album/" target="_blank">Album</a>
						<a class="dropdown-header" href="https://getbootstrap.com/docs/4.1/examples/pricing/" target="_blank">Pricing</a>
						<a class="dropdown-header" href="https://getbootstrap.com/docs/4.1/examples/checkout/" target="_blank">Checkout</a>
						<a class="dropdown-header" href="https://getbootstrap.com/docs/4.1/examples/product/" target="_blank">Product</a>
						<a class="dropdown-header" href="https://getbootstrap.com/docs/4.1/examples/cover/" target="_blank">Cover</a>
						<a class="dropdown-header" href="https://getbootstrap.com/docs/4.1/examples/carousel/" target="_blank">Carousel</a>
						<a class="dropdown-header" href="https://getbootstrap.com/docs/4.1/examples/blog/" target="_blank">Blog</a>
						<a class="dropdown-header" href="https://getbootstrap.com/docs/4.1/examples/dashboard/" target="_blank">Dashboard</a>
						<a class="dropdown-header" href="https://getbootstrap.com/docs/4.1/examples/sign-in/" target="_blank">Sign-In</a>
						<a class="dropdown-header" href="https://getbootstrap.com/docs/4.1/examples/sticky-footer/" target="_blank">Sticky Footer</a>
						<a class="dropdown-header" href="https://getbootstrap.com/docs/4.1/examples/sticky-footer-navbar/" target="_blank">Sticky Footer Navbar</a>
					</div>
				</li>
				<li class="nav-item pl-0 pl-md-2">
					<script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
					<script type="text/javascript">
					function googleTranslateElementInit(){
					  new google.translate.TranslateElement({
						  pageLanguage: 'en', 
						  includedLanguages: 'de,en,es,fr,pt', 
						  layout: google.translate.TranslateElement.InlineLayout.SIMPLE, 
						  autoDisplay: false
					  }, 'google_translate_element');
					}
					</script>
					<div id="google_translate_element"></div>
				</li>
			</ul>
		</div>
		
		<!-- NAVBAR CONTAINER -->
	</div>
</nav>

<!-- ================================================= NAV MENU ================================================= -->

<!-- ================================================= CONTENT ================================================= -->
<div class="content">
	<div class="container">
		<!-- MAIN CONTAINER -->
		
		<!-- Description -->
		<div class="d-block py-3">
			<div class="progress JSloadProgressTest">
				<div class="progress-bar bg-success" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
			</div>
		</div>
	
		<div class="jumbotron">
			<!--<h1 class="display-4">Resources Examples</h1>
			<p class="lead">Some useful code functions and improvments in <code>PHP</code> or <code>JS</code> using the included resources in this repository.</p>-->
			<div class="media d-block d-md-flex">
				<img class="align-self-center mr-3 mb-2 mb-md-0" src="https://avatars0.githubusercontent.com/u/44783903" alt="Website Base">
				<div class="media-body">
					<h1 class="display-4">Resources Examples</h1>
					<p class="lead">Some useful code functions and improvments in <code>PHP</code> or <code>JS</code> using the included resources in this repository.</p>
				</div>
			</div>
		</div>
	
		<!-- Description -->
		
		<!-- lightGallery -->

		<h2 class="notranslate">Light Gallery <span class="badge badge-danger">Plugin</span></h2>
	
		<p>A customizable, modular, responsive, gallery plugin for <b>jQuery</b>. Below you will find an improved usage method via <code>data-lg-attributes</code> applied to the main gallery container.</p>
	
		<table class="table table-bordered table-striped">
			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="text-nowrap notranslate">data-lg-item</td>
					<td>Defines which element contains the image <b>url</b> and the <b>thumbnail</b>. If is <code>auto</code> it will takes all <code>&lt;a&gt;</code> tag.</td>
				</tr>
				<tr>
					<td class="text-nowrap notranslate">data-lg-title</td>
					<td>Set a custom title to all images in the gallery. If is <code>auto</code> it will takes all <code>&lt;a&gt;</code> title attribute.</td>
				</tr>
				<tr>
					<td class="text-nowrap notranslate">data-lg-thumb</td>
					<td>Defines if thumbnails will be shown when the gallery is executed.</td>
				</tr>
				<tr>
					<td class="text-nowrap notranslate">data-lg-download</td>
					<td>Enables downloads, the download url will be taken from <code>data-src</code> or <code>href</code>.</td>
				</tr>
				<tr>
					<td class="text-nowrap notranslate">data-lg-autoplay</td>
					<td>Enables autoplay controls.</td>
				</tr>
				<tr>
					<td class="text-nowrap notranslate">data-lg-loop</td>
					<td>When you get the last image it will change to the first image.</td>
				</tr>
				<tr>
					<td class="text-nowrap notranslate">data-lg-share</td>
					<td>Enables social share buttons.</td>
				</tr>
				<tr>
					<td class="text-nowrap notranslate">data-lg-hide-delay</td>
					<td>Delay time (in miliseconds) to hide bars and thumbnails.</td>
				</tr>
				<tr>
					<td class="text-nowrap notranslate">data-lg-gallery</td>
					<td>Show the <b>previous</b> or <b>next</b> page controls inside the gallery. Includes auto redirection.</td>
				</tr>
				<tr>
					<td class="text-nowrap notranslate">data-lg-page-total</td>
					<td>Set the <b>total amount</b> of the gallery pages. This is <b>show</b> or <b>hide</b> the <b>previous</b> or <b>next</b> controls inside the gallery.</td>
				</tr>
				<tr>
					<td class="text-nowrap notranslate">data-lg-page-current</td>
					<td>Set the current <b>active</b> page. This is <b>show</b> or <b>hide</b> the <b>previous</b> or <b>next</b> controls inside the gallery.</td>
				</tr>
			</tbody>
		</table>
	
		<div class="bs-example">
			<div class="row JSlightGallery" data-lg-item="auto" data-lg-title="auto" data-lg-thumb="false" data-lg-download="false" data-lg-share="true" data-lg-autoplay="true" data-lg-loop="false" data-lg-gallery="false">
				<div class="col-12 col-md py-2 py-md-0">
					<a title="My Image 1" href="https://getbootstrap.com/docs/4.1/examples/screenshots/product.png">
						<img class="img-thumbnail" src="https://getbootstrap.com/docs/4.1/examples/screenshots/product.png">
					</a>
				</div>
				<div class="col-12 col-md py-2 py-md-0">
					<a title="My Image 2" href="https://getbootstrap.com/docs/4.1/examples/screenshots/carousel.png">
						<img class="img-thumbnail" src="https://getbootstrap.com/docs/4.1/examples/screenshots/carousel.png">
					</a>
				</div>
				<div class="col-12 col-md py-2 py-md-0">
					<a title="My Image 3" href="https://getbootstrap.com/docs/4.1/examples/screenshots/cover.png">
						<img class="img-thumbnail" src="https://getbootstrap.com/docs/4.1/examples/screenshots/cover.png">
					</a>
				</div>
				<div class="col-12 col-md py-2 py-md-0">
					<a title="My Image 4" href="https://getbootstrap.com/docs/4.1/examples/screenshots/dashboard.png">
						<img class="img-thumbnail" src="https://getbootstrap.com/docs/4.1/examples/screenshots/dashboard.png">
					</a>
				</div>
				<div class="col-12 col-md py-2 py-md-0">
					<a title="My Image 5" href="https://getbootstrap.com/docs/4.1/examples/screenshots/album.png">
						<img class="img-thumbnail" src="https://getbootstrap.com/docs/4.1/examples/screenshots/album.png">
					</a>
				</div>
			</div>
		</div>
		<figure class="highlight">
			<pre><code class="language-html" data-lang="html">&lt;div class="JSlightGallery" data-lg-item="auto" data-lg-title="auto" data-lg-thumb="false" data-lg-download="false" data-lg-share="true" data-lg-autoplay="true" data-lg-loop="false" data-lg-gallery="false"&gt;<br>...<br>&lt;/div&gt;</code></pre>
		</figure>
	
		<h2 class="JSlightGalleryScroll">Gallery Mode</h2>
		<p>This mode allows to improve the way to show paged galleries executing custom functions when you get the <code>first</code> or <code>last</code> page.</p>

		<div class="bs-example">
			<div class="row JSlightGallery" data-lg-item="auto" data-lg-title="Gallery Title" data-lg-thumb="true" data-lg-download="true" data-lg-share="true" data-lg-autoplay="true" data-lg-loop="false" data-lg-gallery="true" data-lg-page-total="3" data-lg-page-current="1">
				<!-- Group 1 -->
				<div class="col-12 col-md py-2 py-md-0 d-none">
					<a title="My Image 1" href="https://getbootstrap.com/docs/4.1/examples/screenshots/product.png">
						<img class="img-thumbnail" src="https://getbootstrap.com/docs/4.1/examples/screenshots/product.png">
					</a>
				</div>
				<div class="col-12 col-md py-2 py-md-0 d-none">
					<a title="My Image 2" href="https://getbootstrap.com/docs/4.1/examples/screenshots/carousel.png">
						<img class="img-thumbnail" src="https://getbootstrap.com/docs/4.1/examples/screenshots/carousel.png">
					</a>
				</div>
				<div class="col-12 col-md py-2 py-md-0 d-none">
					<a title="My Image 3" href="https://getbootstrap.com/docs/4.1/examples/screenshots/cover.png">
						<img class="img-thumbnail" src="https://getbootstrap.com/docs/4.1/examples/screenshots/cover.png">
					</a>
				</div>
				<div class="col-12 col-md py-2 py-md-0 d-none">
					<a title="My Image 4" href="https://getbootstrap.com/docs/4.1/examples/screenshots/dashboard.png">
						<img class="img-thumbnail" src="https://getbootstrap.com/docs/4.1/examples/screenshots/dashboard.png">
					</a>
				</div>
				<div class="col-12 col-md py-2 py-md-0 d-none">
					<a title="My Image 5" href="https://getbootstrap.com/docs/4.1/examples/screenshots/album.png">
						<img class="img-thumbnail" src="https://getbootstrap.com/docs/4.1/examples/screenshots/album.png">
					</a>
				</div>
				<!-- Group 1 -->
				<!-- Group 2 -->
				<div class="col-12 col-md py-2 py-md-0 d-none">
					<a title="My Image 6" href="https://getbootstrap.com/docs/4.1/examples/screenshots/pricing.png">
						<img class="img-thumbnail" src="https://getbootstrap.com/docs/4.1/examples/screenshots/pricing.png">
					</a>
				</div>
				<div class="col-12 col-md py-2 py-md-0 d-none">
					<a title="My Image 7" href="https://getbootstrap.com/docs/4.1/examples/screenshots/blog.png">
						<img class="img-thumbnail" src="https://getbootstrap.com/docs/4.1/examples/screenshots/blog.png">
					</a>
				</div>
				<div class="col-12 col-md py-2 py-md-0 d-none">
					<a title="My Image 8" href="https://getbootstrap.com/docs/4.1/examples/screenshots/sign-in.png">
						<img class="img-thumbnail" src="https://getbootstrap.com/docs/4.1/examples/screenshots/sign-in.png">
					</a>
				</div>
				<div class="col-12 col-md py-2 py-md-0 d-none">
					<a title="My Image 9" href="https://getbootstrap.com/docs/4.1/examples/screenshots/offcanvas.png">
						<img class="img-thumbnail" src="https://getbootstrap.com/docs/4.1/examples/screenshots/offcanvas.png">
					</a>
				</div>
				<div class="col-12 col-md py-2 py-md-0 d-none">
					<a title="My Image 10" href="https://getbootstrap.com/docs/4.1/examples/screenshots/grid.png">
						<img class="img-thumbnail" src="https://getbootstrap.com/docs/4.1/examples/screenshots/grid.png">
					</a>
				</div>
				<!-- Group 2 -->
				<!-- Group 3 -->
				<div class="col-12 col-md py-2 py-md-0 d-none">
					<a title="My Image 11" href="https://getbootstrap.com/docs/4.1/examples/screenshots/jumbotron.png">
						<img class="img-thumbnail" src="https://getbootstrap.com/docs/3.3/examples/screenshots/offcanvas.jpg">
					</a>
				</div>
				<div class="col-12 col-md py-2 py-md-0 d-none">
					<a title="My Image 12" href="https://getbootstrap.com/docs/4.1/examples/screenshots/checkout.png">
						<img class="img-thumbnail" src="https://getbootstrap.com/docs/4.1/examples/screenshots/checkout.png">
					</a>
				</div>
				<div class="col-12 col-md py-2 py-md-0 d-none">
					<a title="My Image 13" href="https://getbootstrap.com/docs/4.1/examples/screenshots/navbars.png">
						<img class="img-thumbnail" src="https://getbootstrap.com/docs/4.1/examples/screenshots/navbars.png">
					</a>
				</div>
				<div class="col-12 col-md py-2 py-md-0 d-none">
					<a title="My Image 14" href="https://getbootstrap.com/docs/4.1/examples/screenshots/navbar-bottom.png">
						<img class="img-thumbnail" src="https://getbootstrap.com/docs/4.1/examples/screenshots/navbar-bottom.png">
					</a>
				</div>
				<div class="col-12 col-md py-2 py-md-0 d-none">
					<a title="My Image 15" href="https://getbootstrap.com/docs/4.1/examples/screenshots/floating-labels.png">
						<img class="img-thumbnail" src="https://getbootstrap.com/docs/4.1/examples/screenshots/floating-labels.png">
					</a>
				</div>
				<!-- Group 3 -->
			</div>

			<nav aria-label="Page navigation">
				<ul class="pagination mt-3 mb-0">
					<!--
					<li class="page-item"><a class="page-link prev" href="?page=1"><span aria-hidden="true">&laquo;</span></a></li>
					<li class="page-item active"><a class="page-link" href="?page=1">1</a></li>
					<li class="page-item"><a class="page-link" href="?page=2">2</a></li>
					<li class="page-item"><a class="page-link" href="?page=3">3</a></li>
					<li class="page-item"><a class="page-link next" href="?page=2"><span aria-hidden="true">&raquo;</span></a></li>
					-->
				</ul>
			</nav>
		</div>
		
		<figure class="highlight">
			<pre><code class="language-html" data-lang="html">&lt;div class="JSlightGallery" data-lg-item="auto" data-lg-title="Gallery Title" data-lg-thumb="true" data-lg-download="true" data-lg-share="true" data-lg-autoplay="true" data-lg-loop="false" data-lg-gallery="true" data-lg-page-total="3" data-lg-page-current="1"&gt;<br>...<br>&lt;/div&gt;</code></pre>
		</figure>

		<div class="card">
			<div class="card-header">
				Note for gallery paginator
			</div>
			<div class="card-body">
				<p class="card-text">Remember to add the <b>previous</b> and <b>next</b> events in the <b>JS</b> to detect which actions will be executed on each case. Take a look in the file <code>extras/example.js</code> for <code>onPrevPageChange.lg</code> and <code>onNextPageChange.lg</code> events examples.</p>
			</div>
		</div>
	
		<!-- lightGallery -->
		
		<!-- Data Tables -->

		<h2 class="notranslate">Data Tables <span class="badge badge-danger">Plugin</span></h2>
		
		<p>Improve the way to show plain or dynamic <b>HTML tables</b>. Below you will find the usage method via <code>data</code> attributes.</p>
		
		<table class="table table-bordered table-striped">
			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="text-nowrap notranslate">data-paging</td>
					<td>Enables a paginator</td>
				</tr>
				<tr>
					<td class="text-nowrap notranslate"> data-searching</td>
					<td>Enables a search box to filter results</td>
				</tr>
				<tr>
					<td class="text-nowrap notranslate">data-info</td>
					<td>Show info at the table footer</td>
				</tr>
				<tr>
					<td class="text-nowrap notranslate">data-ordering</td>
					<td>Enables ordering by column</td>
				</tr>
			</tbody>
		</table>

		<div class="bs-example table-responsive notranslate">
			<table class="table table-striped table-bordered JSdataTables" data-paging="true" data-searching="true" data-info="true" data-ordering="true" cellspacing="0" cellpadding="0" border="0">
				<thead>
					<tr>
						<th class="text-nowrap">Name</th>
						<th class="text-nowrap">Position</th>
						<th class="text-nowrap">Office</th>
						<th class="text-nowrap">Age</th>
						<th class="text-nowrap">Start date</th>
						<th class="text-nowrap">Salary</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Tiger Nixon</td>
						<td>System Architect</td>
						<td>Edinburgh</td>
						<td>61</td>
						<td>2011/04/25</td>
						<td>$320,800</td>
					</tr>
					<tr>
						<td>Garrett Winters</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>63</td>
						<td>2011/07/25</td>
						<td>$170,750</td>
					</tr>
					<tr>
						<td>Ashton Cox</td>
						<td>Junior Technical Author</td>
						<td>San Francisco</td>
						<td>66</td>
						<td>2009/01/12</td>
						<td>$86,000</td>
					</tr>
					<tr>
						<td>Cedric Kelly</td>
						<td>Senior Javascript Developer</td>
						<td>Edinburgh</td>
						<td>22</td>
						<td>2012/03/29</td>
						<td>$433,060</td>
					</tr>
					<tr>
						<td>Airi Satou</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>33</td>
						<td>2008/11/28</td>
						<td>$162,700</td>
					</tr>
					<tr>
						<td>Brielle Williamson</td>
						<td>Integration Specialist</td>
						<td>New York</td>
						<td>61</td>
						<td>2012/12/02</td>
						<td>$372,000</td>
					</tr>
					<tr>
						<td>Herrod Chandler</td>
						<td>Sales Assistant</td>
						<td>San Francisco</td>
						<td>59</td>
						<td>2012/08/06</td>
						<td>$137,500</td>
					</tr>
					<tr>
						<td>Rhona Davidson</td>
						<td>Integration Specialist</td>
						<td>Tokyo</td>
						<td>55</td>
						<td>2010/10/14</td>
						<td>$327,900</td>
					</tr>
					<tr>
						<td>Colleen Hurst</td>
						<td>Javascript Developer</td>
						<td>San Francisco</td>
						<td>39</td>
						<td>2009/09/15</td>
						<td>$205,500</td>
					</tr>
					<tr>
						<td>Sonya Frost</td>
						<td>Software Engineer</td>
						<td>Edinburgh</td>
						<td>23</td>
						<td>2008/12/13</td>
						<td>$103,600</td>
					</tr>
					<tr>
						<td>Jena Gaines</td>
						<td>Office Manager</td>
						<td>London</td>
						<td>30</td>
						<td>2008/12/19</td>
						<td>$90,560</td>
					</tr>
					<tr>
						<td>Quinn Flynn</td>
						<td>Support Lead</td>
						<td>Edinburgh</td>
						<td>22</td>
						<td>2013/03/03</td>
						<td>$342,000</td>
					</tr>
					<tr>
						<td>Charde Marshall</td>
						<td>Regional Director</td>
						<td>San Francisco</td>
						<td>36</td>
						<td>2008/10/16</td>
						<td>$470,600</td>
					</tr>
					<tr>
						<td>Haley Kennedy</td>
						<td>Senior Marketing Designer</td>
						<td>London</td>
						<td>43</td>
						<td>2012/12/18</td>
						<td>$313,500</td>
					</tr>
					<tr>
						<td>Tatyana Fitzpatrick</td>
						<td>Regional Director</td>
						<td>London</td>
						<td>19</td>
						<td>2010/03/17</td>
						<td>$385,750</td>
					</tr>
					<tr>
						<td>Michael Silva</td>
						<td>Marketing Designer</td>
						<td>London</td>
						<td>66</td>
						<td>2012/11/27</td>
						<td>$198,500</td>
					</tr>
					<tr>
						<td>Paul Byrd</td>
						<td>Chief Financial Officer (CFO)</td>
						<td>New York</td>
						<td>64</td>
						<td>2010/06/09</td>
						<td>$725,000</td>
					</tr>
					<tr>
						<td>Gloria Little</td>
						<td>Systems Administrator</td>
						<td>New York</td>
						<td>59</td>
						<td>2009/04/10</td>
						<td>$237,500</td>
					</tr>
					<tr>
						<td>Bradley Greer</td>
						<td>Software Engineer</td>
						<td>London</td>
						<td>41</td>
						<td>2012/10/13</td>
						<td>$132,000</td>
					</tr>
					<tr>
						<td>Dai Rios</td>
						<td>Personnel Lead</td>
						<td>Edinburgh</td>
						<td>35</td>
						<td>2012/09/26</td>
						<td>$217,500</td>
					</tr>
					<tr>
						<td>Jenette Caldwell</td>
						<td>Development Lead</td>
						<td>New York</td>
						<td>30</td>
						<td>2011/09/03</td>
						<td>$345,000</td>
					</tr>
					<tr>
						<td>Yuri Berry</td>
						<td>Chief Marketing Officer (CMO)</td>
						<td>New York</td>
						<td>40</td>
						<td>2009/06/25</td>
						<td>$675,000</td>
					</tr>
					<tr>
						<td>Caesar Vance</td>
						<td>Pre-Sales Support</td>
						<td>New York</td>
						<td>21</td>
						<td>2011/12/12</td>
						<td>$106,450</td>
					</tr>
					<tr>
						<td>Doris Wilder</td>
						<td>Sales Assistant</td>
						<td>Sidney</td>
						<td>23</td>
						<td>2010/09/20</td>
						<td>$85,600</td>
					</tr>
					<tr>
						<td>Angelica Ramos</td>
						<td>Chief Executive Officer (CEO)</td>
						<td>London</td>
						<td>47</td>
						<td>2009/10/09</td>
						<td>$1,200,000</td>
					</tr>
					<tr>
						<td>Gavin Joyce</td>
						<td>Developer</td>
						<td>Edinburgh</td>
						<td>42</td>
						<td>2010/12/22</td>
						<td>$92,575</td>
					</tr>
					<tr>
						<td>Jennifer Chang</td>
						<td>Regional Director</td>
						<td>Singapore</td>
						<td>28</td>
						<td>2010/11/14</td>
						<td>$357,650</td>
					</tr>
					<tr>
						<td>Brenden Wagner</td>
						<td>Software Engineer</td>
						<td>San Francisco</td>
						<td>28</td>
						<td>2011/06/07</td>
						<td>$206,850</td>
					</tr>
					<tr>
						<td>Fiona Green</td>
						<td>Chief Operating Officer (COO)</td>
						<td>San Francisco</td>
						<td>48</td>
						<td>2010/03/11</td>
						<td>$850,000</td>
					</tr>
					<tr>
						<td>Shou Itou</td>
						<td>Regional Marketing</td>
						<td>Tokyo</td>
						<td>20</td>
						<td>2011/08/14</td>
						<td>$163,000</td>
					</tr>
					<tr>
						<td>Michelle House</td>
						<td>Integration Specialist</td>
						<td>Sidney</td>
						<td>37</td>
						<td>2011/06/02</td>
						<td>$95,400</td>
					</tr>
					<tr>
						<td>Suki Burks</td>
						<td>Developer</td>
						<td>London</td>
						<td>53</td>
						<td>2009/10/22</td>
						<td>$114,500</td>
					</tr>
					<tr>
						<td>Prescott Bartlett</td>
						<td>Technical Author</td>
						<td>London</td>
						<td>27</td>
						<td>2011/05/07</td>
						<td>$145,000</td>
					</tr>
					<tr>
						<td>Gavin Cortez</td>
						<td>Team Leader</td>
						<td>San Francisco</td>
						<td>22</td>
						<td>2008/10/26</td>
						<td>$235,500</td>
					</tr>
					<tr>
						<td>Martena Mccray</td>
						<td>Post-Sales support</td>
						<td>Edinburgh</td>
						<td>46</td>
						<td>2011/03/09</td>
						<td>$324,050</td>
					</tr>
					<tr>
						<td>Unity Butler</td>
						<td>Marketing Designer</td>
						<td>San Francisco</td>
						<td>47</td>
						<td>2009/12/09</td>
						<td>$85,675</td>
					</tr>
					<tr>
						<td>Howard Hatfield</td>
						<td>Office Manager</td>
						<td>San Francisco</td>
						<td>51</td>
						<td>2008/12/16</td>
						<td>$164,500</td>
					</tr>
					<tr>
						<td>Hope Fuentes</td>
						<td>Secretary</td>
						<td>San Francisco</td>
						<td>41</td>
						<td>2010/02/12</td>
						<td>$109,850</td>
					</tr>
					<tr>
						<td>Vivian Harrell</td>
						<td>Financial Controller</td>
						<td>San Francisco</td>
						<td>62</td>
						<td>2009/02/14</td>
						<td>$452,500</td>
					</tr>
					<tr>
						<td>Timothy Mooney</td>
						<td>Office Manager</td>
						<td>London</td>
						<td>37</td>
						<td>2008/12/11</td>
						<td>$136,200</td>
					</tr>
					<tr>
						<td>Jackson Bradshaw</td>
						<td>Director</td>
						<td>New York</td>
						<td>65</td>
						<td>2008/09/26</td>
						<td>$645,750</td>
					</tr>
					<tr>
						<td>Olivia Liang</td>
						<td>Support Engineer</td>
						<td>Singapore</td>
						<td>64</td>
						<td>2011/02/03</td>
						<td>$234,500</td>
					</tr>
					<tr>
						<td>Bruno Nash</td>
						<td>Software Engineer</td>
						<td>London</td>
						<td>38</td>
						<td>2011/05/03</td>
						<td>$163,500</td>
					</tr>
					<tr>
						<td>Sakura Yamamoto</td>
						<td>Support Engineer</td>
						<td>Tokyo</td>
						<td>37</td>
						<td>2009/08/19</td>
						<td>$139,575</td>
					</tr>
					<tr>
						<td>Thor Walton</td>
						<td>Developer</td>
						<td>New York</td>
						<td>61</td>
						<td>2013/08/11</td>
						<td>$98,540</td>
					</tr>
					<tr>
						<td>Finn Camacho</td>
						<td>Support Engineer</td>
						<td>San Francisco</td>
						<td>47</td>
						<td>2009/07/07</td>
						<td>$87,500</td>
					</tr>
					<tr>
						<td>Serge Baldwin</td>
						<td>Data Coordinator</td>
						<td>Singapore</td>
						<td>64</td>
						<td>2012/04/09</td>
						<td>$138,575</td>
					</tr>
					<tr>
						<td>Zenaida Frank</td>
						<td>Software Engineer</td>
						<td>New York</td>
						<td>63</td>
						<td>2010/01/04</td>
						<td>$125,250</td>
					</tr>
					<tr>
						<td>Zorita Serrano</td>
						<td>Software Engineer</td>
						<td>San Francisco</td>
						<td>56</td>
						<td>2012/06/01</td>
						<td>$115,000</td>
					</tr>
					<tr>
						<td>Jennifer Acosta</td>
						<td>Junior Javascript Developer</td>
						<td>Edinburgh</td>
						<td>43</td>
						<td>2013/02/01</td>
						<td>$75,650</td>
					</tr>
					<tr>
						<td>Cara Stevens</td>
						<td>Sales Assistant</td>
						<td>New York</td>
						<td>46</td>
						<td>2011/12/06</td>
						<td>$145,600</td>
					</tr>
					<tr>
						<td>Hermione Butler</td>
						<td>Regional Director</td>
						<td>London</td>
						<td>47</td>
						<td>2011/03/21</td>
						<td>$356,250</td>
					</tr>
					<tr>
						<td>Lael Greer</td>
						<td>Systems Administrator</td>
						<td>London</td>
						<td>21</td>
						<td>2009/02/27</td>
						<td>$103,500</td>
					</tr>
					<tr>
						<td>Jonas Alexander</td>
						<td>Developer</td>
						<td>San Francisco</td>
						<td>30</td>
						<td>2010/07/14</td>
						<td>$86,500</td>
					</tr>
					<tr>
						<td>Shad Decker</td>
						<td>Regional Director</td>
						<td>Edinburgh</td>
						<td>51</td>
						<td>2008/11/13</td>
						<td>$183,000</td>
					</tr>
					<tr>
						<td>Michael Bruce</td>
						<td>Javascript Developer</td>
						<td>Singapore</td>
						<td>29</td>
						<td>2011/06/27</td>
						<td>$183,000</td>
					</tr>
					<tr>
						<td>Donna Snider</td>
						<td>Customer Support</td>
						<td>New York</td>
						<td>27</td>
						<td>2011/01/25</td>
						<td>$112,000</td>
					</tr>
				</tbody>
			</table>
		</div>
		<figure class="highlight">
			<pre><code class="language-html" data-lang="html">&lt;table class="table table-striped table-bordered JSdataTables" data-paging="true" data-searching="true" data-info="true" data-ordering="true"&gt;<br>...<br>&lt;/table&gt;</code></pre>
		</figure>

		<!-- Data Tables -->
		
		<!-- Modal Alert -->

		<h2 class="notranslate">Modal Alert BootBox <span class="badge badge-danger">Plugin</span></h2>
		
		<p>Launch a custom modal box using <b>BootBox</b> features, the function structure is <code>JSmodalAlert(title, text, size, align, animate)</code>. You can alternatively set a size and alignment classes like <b>horizontal vertical</b> (For example: <code>right center</code>).</p>

		<div class="bs-example">
			<button type="button" class="btn btn-primary my-1 my-xl-0" onclick="JSmodalAlert('Small Size Box','This is a text shown in a modal box','small','center right')">Show Alert Small Size (Centered)</button>
			<button type="button" class="btn btn-primary my-1 my-xl-0" onclick="JSmodalAlert('Medium Size Box','This is a text shown in a modal box')">Show Alert Medium Size (By default)</button>
			<button type="button" class="btn btn-primary my-1 my-xl-0" onclick="JSmodalAlert('Large Size Box','This is a text shown in a modal box','large')">Show Alert Large Size</button>
			<button type="button" class="btn btn-primary my-1 my-xl-0" onclick="JSmodalAlert('Extra Large Size Box','This is a text shown in a modal box','extra-large')">Show Alert Extra Large Size</button>
		</div>
		<figure class="highlight">
			<pre><code class="language-html" data-lang="html">&lt;a onclick="JSmodalAlert('Small Size Box','This is a text shown in a modal box','small','center')">Click Here&lt;/a&gt;<br>&lt;a onclick="JSmodalAlert('Medium Size Box','This is a text shown in a modal box')">Click Here&lt;/a&gt;<br>&lt;a onclick="JSmodalAlert('Large Size Box','This is a text shown in a modal box','large')">Click Here&lt;/a&gt;<br>&lt;a onclick="JSmodalAlert('Extra Large Size Box','This is a text shown in a modal box','extra-large')">Click Here&lt;/a&gt;</code></pre>
		</figure>

		<!-- Modal Alert -->

		<!-- MAIN CONTAINER -->
	</div>
</div>
<!-- ================================================= CONTENT ================================================= -->

<?php include('footer.php'); ?>