import React from 'react'

export default function Index() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navigation fixed-top" id="navbar">
	<div className="container-fluid">
		<a className="navbar-brand" href="index.html">
			<h2 className="text-white text-capitalize">Gym<span className="text-color">Fit</span></h2>
		</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsid"
			aria-controls="navbarsid" aria-expanded="false" aria-label="Toggle navigation">
			<span className="ti-view-list"></span>
		</button>
		<div className="collapse text-center navbar-collapse" id="navbarsid">
			<ul className="navbar-nav mx-auto">
				<li className="nav-item active">
					<a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
				</li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
						aria-expanded="false">Pages.</a>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="about.html">About</a></li>
						<li><a className="dropdown-item" href="trainer.html">Trainer</a></li>
						<li><a className="dropdown-item" href="course.html">Courses</a></li>
					</ul>
				</li>
				<li className="nav-item"><a className="nav-link" href="service.html">Services</a></li>
				<li className="nav-item"><a className="nav-link" href="pricing.html">Memebership</a></li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
						aria-expanded="false">Blog.</a>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="blog.html">Blog Grid</a></li>
						<li><a className="dropdown-item" href="blog-sidebar.html">Blog Sidebar</a></li>
						<li><a className="dropdown-item" href="blog-single.html">Blog Details</a></li>
					</ul>
				</li>
				<li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
			</ul>
			<div className="my-md-0 ml-lg-4 mt-4 mt-lg-0 ml-auto text-lg-right mb-3 mb-lg-0">
				<a href="tel:+23-345-67890">
					<h3 className="text-color mb-0"><i className="ti-mobile mr-2"></i>+23-563-5688</h3>
				</a>
			</div>
		</div>
	</div>
</nav>



<div className="main-wrapper ">

<section className="slider">
	<div className="container">
		<div className="row">
			<div className="col-md-8">
				<span className="h6 d-inline-block mb-4 subhead text-uppercase">Gym fitness club</span>
				<h1 className="text-uppercase text-white mb-5">Step up your <span className="text-color">fitness Challange</span><br/>with us</h1>
			
				<a href="pricing.html" target="_blank" className="btn btn-main " >Join Us <i className="ti-angle-right ml-3"></i></a>
			</div>
		</div>
	</div>
</section>

<section className="mt-80px">
	<div className="container">
		<div className="row ">
			<div className="col-lg-4 col-md-6">
				<div className="card p-5 border-0 rounded-top border-bottom position-relative hover-style-1">
					<span className="number">01</span>
					<h3 className="mt-3">Modern Equipment</h3>
					<p className="mt-3 mb-4">Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius.</p>
					<a href="about.html" className="text-color text-uppercase font-size-13 letter-spacing font-weight-bold"><i className="ti-minus mr-2 "></i>more Details</a>
				</div>
			</div>
			<div className="col-lg-4 col-md-6">
				<div className="card p-5 border-0 rounded-top hover-style-1">
					<span className="number">02</span>
					<h3 className="mt-3">PROFFESIONAL TRAINer</h3>
					<p className="mt-3 mb-4">Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius.</p>
					<a href="about.html" className="text-color text-uppercase font-size-13 letter-spacing font-weight-bold"><i className="ti-minus mr-2 "></i>more Details</a>
				</div>
			</div>
			<div className="col-lg-4 col-md-6">
				<div className="card p-5 border-0 rounded-top hover-style-1">
					<span className="number">03</span>
					<h3 className="mt-3">HEALTHY DIET Plan</h3>
					<p className="mt-3 mb-4">Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius.</p>
					<a href="about.html" className="text-color text-uppercase font-size-13 letter-spacing font-weight-bold"><i className="ti-minus mr-2 "></i>more Details</a>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="section about">
	<div className="container">
		<div className="row align-items-center">
			<div className="col-lg-6">
				<img src="images/bg/bg-5.jpg" alt="" className="img-fluid rounded shadow w-100"/>
			</div>
			
			<div className="col-lg-6">
				<div className="pl-3 mt-5 mt-lg-0">
					<h2 className="mt-1 mb-3">We’ve skill in <br/>wide <span className="text-color">range of fitness</span> and Other body health facility. </h2>

					<p className="mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in.</p>

					<a href="#" className="btn btn-main">Learn More<i className="fa fa-angle-right ml-2"></i></a>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="section cta">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-8 col-md-12 col-sm-12">
				<div className="text-center">
					<span className="h6 letter-spacing text-white">Dscover your potential</span>
					<h2 className="text-lg mt-4 mb-5 text-white">
						Book your early seat to get <span className="text-color">summer 25% </span>dicsount
					</h2>

					<a href="pricing.html" className="btn btn-main text-white">Join Today</a>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="section services ">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-8 text-center">
				<div className="section-title">
					<div className="divider mb-3"></div>
					<h2>Our Services</h2>
					<p>We offer more than 35 group exercis, aerobic classNamees each week.</p>
				</div>
			</div>
		</div>

		<div className="row no-gutters">
			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="text-center  px-4 py-5 hover-style-1">
					<i className="icofont-gym-alt-2 text-lg text-color"></i>
					<h4 className="mt-3 mb-4 text-uppercase">WEIGHT LIFTING</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="text-center  px-4 py-5 hover-style-1">
					<i className="icofont-cycling-alt text-lg text-color"></i>
					<h4 className="mt-3 mb-4 text-uppercase">Cycling</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="text-center  px-4 py-5 hover-style-1">
					<i className="icofont-gym-alt-3 text-lg text-color"></i>
					<h4 className="mt-3 mb-4 text-uppercase">YOGA MEDIDATION</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="text-center  px-4 py-5 hover-style-1">
					<i className="icofont-muscle text-lg text-color"></i>
					<h4 className="mt-3 mb-4 text-uppercase">Building body</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="text-center  px-4 py-5 hover-style-1">
					<i className="icofont-dumbbell text-lg text-color"></i>
					<h4 className="mt-3 mb-4 text-uppercase">Fitness Track</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="text-center  px-4 py-5 hover-style-1">
					<i className="icofont-gym text-lg text-color"></i>
					<h4 className="mt-3 mb-4 text-uppercase">Fitness</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="gallery">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-8 text-center">
				<div className="section-title">
					<div className="divider mb-3"></div>
					<h2>Our gallery</h2>
					<p>We offer more than 35 group exercis, aerobic classNamees each week.</p>
				</div>
			</div>
		</div>
	</div>
	<div className="container-fluid p-0">
		<div className="row no-gutters portfolio-gallery">
			<div className="col-lg-3 col-md-6 col-sm-6">
				<a href="images/gallery/gallery-01.jpg" className="popup-gallery">
					<img src="images/gallery/gallery-01.jpg" alt="" className="img-fluid"/>
				</a>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<a href="images/gallery/gallery-02.jpg" className="popup-gallery">
					<img src="images/gallery/gallery-02.jpg" alt="" className="img-fluid"/>
				</a>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<a href="images/gallery/gallery-03.jpg" className="popup-gallery">
					<img src="images/gallery/gallery-03.jpg" alt="" className="img-fluid"/>
				</a>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<a href="images/gallery/gallery-04.jpg" className="popup-gallery">
					<img src="images/gallery/gallery-04.jpg" alt="" className="img-fluid"/>
				</a>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<a href="images/gallery/gallery-05.jpg" className="popup-gallery">
					<img src="images/gallery/gallery-05.jpg" alt="" className="img-fluid"/>
				</a>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<a href="images/gallery/gallery-06.jpg" className="popup-gallery">
					<img src="images/gallery/gallery-06.jpg" alt="" className="img-fluid"/>
				</a>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<a href="images/gallery/gallery-07.jpg" className="popup-gallery">
					<img src="images/gallery/gallery-07.jpg" alt="" className="img-fluid"/>
				</a>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<a href="images/gallery/gallery-08.jpg" className="popup-gallery">
					<img src="images/gallery/gallery-08.jpg" alt="" className="img-fluid"/>
				</a>
			</div>
		</div>
	</div>
</section>		


<section className="section textimonial position-relative bg-3">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-8">
				<div className="row justify-content-center">
					<div className="col-lg-12 text-center">
						<div className="section-title">
							<div className="divider mb-3"></div>
							<h2 className="text-white">What People say</h2>
						</div>
					</div>
				</div>

				<div className="testimonial-slider">
					<div className="text-center mb-4 ">
						<i className="ti-quote-left text-lg text-color"></i>
						<h3 className="mt-4 text-white letter-spacing">A great Start to a healthy life</h3>
						<p className="my-4 text-white-50">Laboriosam molestias aperiam sit corporis sunt, hic veritatis possimus optio reprehenderit, laudantium excepturi, consequatur. Assumenda hic error veniam exercitationem</p>

						<div>
							<h4 className="mb-0 text-capitalize text-white font-weight-normal">John Donas</h4>
							<span className="text-white-50">Manager</span>
						</div>
					</div>
					<div className="text-center mb-4">
						<i className="ti-quote-left text-lg text-color"></i>
						<h3 className="mt-4 text-white letter-spacing">The workout worth attending!</h3>
						<p className="my-4 text-white-50">Laboriosam molestias aperiam sit corporis sunt, hic veritatis possimus optio reprehenderit, laudantium excepturi, consequatur. Assumenda hic error veniam exercitationem</p>
						<div>
							<h4 className="mb-0 text-capitalize text-white font-weight-normal">Donas Jack</h4>
							<span className="text-white-50">Manager</span>
						</div>
					</div>

					<div className="text-center mb-4">
						<i className="ti-quote-left text-lg text-color"></i>
						<h3 className="mt-4 text-white letter-spacing">Very Professional Club and coaches</h3>
						<p className="my-4 text-white-50">Laboriosam molestias aperiam sit corporis sunt, hic veritatis possimus optio reprehenderit, laudantium excepturi, consequatur. Assumenda hic error veniam exercitationem</p>
						<div>
							<h4 className="mb-0 text-capitalize text-white font-weight-normal" >Mikel Hussy</h4>
							<span className="text-white-50">Manager</span>
						</div>
					</div>

					<div className="text-center mb-4">
						<i className="ti-quote-left text-lg text-color"></i>
						<h3 className="mt-4 text-white letter-spacing">Shape your body and healthy!</h3>
						<p className="my-4 text-white-50">Laboriosam molestias aperiam sit corporis sunt, hic veritatis possimus optio reprehenderit, laudantium excepturi, consequatur. Assumenda hic error veniam exercitationem</p>
						<div>
							<h4 className="mb-0 text-capitalize text-white font-weight-normal">Hiker jons</h4>
							<span className="text-white-50">Manager</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="section course bg-gray">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-8 text-center">
				<div className="section-title">
					<div className="divider mb-3"></div>
					<h2>Popular Courses</h2>
					<p>We offer more than 35 group exercis, aerobic classNamees each week.</p>
				</div>
			</div>
		</div>

		<div className="row">
			<div className="col-lg-3 col-md-6">
				<div className="card border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
					<img src="images/gallery/course-1.jpg" alt="" className="img-fluid"/>

					<div className="card-body">
						<a href="course-single.html"><h4 className="font-secondary mb-0">Build Body</h4></a>
						<p className=" mb-2">Mentor: Jimmy Karter</p>
					</div>
				</div>
			</div>

			<div className="col-lg-3 col-md-6">
				<div className="card border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
					<img src="images/gallery/course-2.jpg" alt="" className="img-fluid"/>

					<div className="card-body">
						<a href="course-single.html"><h4 className="font-secondary mb-0">Build Body</h4></a>
						<p className="mb-2">Mentor: Jimmy Karter</p>
					</div>
				</div>
			</div>

			<div className="col-lg-3 col-md-6">
				<div className="card border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
					<img src="images/gallery/course-3.jpg" alt="" className="img-fluid"/>

					<div className="card-body">
						<a href="course-single.html"><h4 className="font-secondary mb-0">Build Body</h4></a>
						<p className=" mb-2">Mentor: Jimmy Karter</p>
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6">
				<div className="card border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
					<img src="images/gallery/course-2.jpg" alt="" className="img-fluid"/>

					<div className="card-body">
						<a href="course-single.html"><h4 className="font-secondary mb-0">Build Body</h4></a>
						<p className=" mb-2">Mentor: Jimmy Karter</p>
					</div>
				</div>
			</div>

		</div>
		<div className="row justify-content-center">
			<div className="col-lg-8">
				<div className="mt-5 text-center">
					<a href="course.html" className="btn btn-main">See all our Courses</a>
				</div>
			</div>
		</div>
	</div>
</section>



<footer className="footer bg-black-50">
	<div className="container">
		<div className="row">
			<div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
				<h2 className="text-white mb-4">GymFit</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus illo ad quo sunt maiores, sint nostrum omnis eaque cumque dolorum.</p>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			</div>
			

			<div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
				<div className="footer-widget recent-blog">
					<h4 className="mb-4 text-white letter-spacing text-uppercase">Recents Posts</h4>
					<div>
						<a href="blog-single.html"className="text-white">Claritas est etiam processus dynamicus</a>
						<p className="text-sm mt-2 text-white-50">30 february 2019</p>
					</div>
					<div className="mt-4">
						<a href="blog-single.html"className="text-white">Claritas est etiam processus dynamicus</a>
						<p className="text-sm mt-2 text-white-50">30 february 2019</p>
					</div>

				</div>
			</div>
			<div className="col-lg-2 col-md-5 mb-5 mb-lg-0">
				<div className="footer-widget">
					<h4 className="mb-4 text-white letter-spacing text-uppercase">Quick Links</h4>
					<ul className="list-unstyled footer-menu lh-40 mb-0">
						<li><a href="about.html"><i className="ti-angle-double-right mr-2"></i>About Us</a></li>
						<li><a href="service.html"><i className="ti-angle-double-right mr-2"></i>Services</a></li>
						<li><a href="pricing.html"><i className="ti-angle-double-right mr-2"></i>Membership</a></li>
						<li><a href="course.html"><i className="ti-angle-double-right mr-2"></i>Courses</a></li>
						<li><a href="contact.html"><i className="ti-angle-double-right mr-2"></i>Contact us</a></li>
					</ul>
				</div>
			</div>
			<div className="col-lg-3 col-md-5">
				<div className="footer-widget">
					<h4 className="mb-4 text-white letter-spacing text-uppercase">Home location</h4>
					<p>Washington 6036 Richmond
					hwy., Alexandria, VA USA 22303 </p>
					<span className="text-white">+1 (409) 987–5874</span>
					<span className="text-white">info@demolink.org</span>
				</div>
			</div>
		</div>

		<div className="row align-items-center mt-5 px-3 bg-black mx-1">
			<div className="col-lg-4">
				<p className="text-white mt-3">Gymfit © 2019 , Theme By <a href="https://themefisher.com/" className="text-color">Themefisher.com</a></p>
			</div>
			<div className="col-lg-6 ml-auto text-right">
				<ul className="list-inline mb-0 footer-socials">
					<li className="list-inline-item"><a href="https://www.facebook.com/themefisher"><i className="ti-facebook"></i></a></li>
					<li className="list-inline-item"><a href="https://twitter.com/themefisher"><i className="ti-twitter"></i></a></li>
					<li className="list-inline-item"><a href="https://github.com/themefisher/"><i className="ti-github"></i></a></li>
				</ul>
			</div>
		</div>
	</div>
</footer>

   </div>
    </div>
  )
}
