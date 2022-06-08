<template>
  <div class="d-flex flex-wrap justify-content-center align-items-center pt-0">
      <FlashMessage :position="'left bottom'" style="z-index: 999999;"></FlashMessage>
      <div class="col-12 position-fixed d-flex justify-content-center" id="header" style="top: 0; z-index: 500; padding-top: 5px" >
          <nav class="navbar col-12 pb-3 col-md-11 col-lg-11 col-xl-9 navbar-expand-lg navbar-light" id="twhite">
              <a class="navbar-brand font-weight-bold "  href="#" style="font-family: 'Agency FB'; font-size: 30px;">
                  LARAVEL VUE SPA
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                      <li class="nav-item px-2 active">
                          <a class="nav-link font-weight-bold" href="#" v-on:click.prevent="getResults">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item px-2 dropdown">
                          <a class="nav-link font-weight-bold dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Product
                          </a>
                          <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
                              <a v-for="(category) in user_categories" :key="category.id" class="dropdown-item" href="#">{{ category.title }}
                                  <ul class="dropdown-menu">
                                      <li><a class="dropdown-item" href="#"> Submenu item 1</a></li>
                                  </ul>
                              </a>
                          </div>
                      </li>

                      <li class="nav-item px-2 dropdown">
                          <a class="nav-link font-weight-bold dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              All Product
                          </a>
                          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
<!--                              <a v-if="all_subcategories.category_id==Scat" v-for="(subcategory,index) in subcategories" :key="index" :value="subcategory.id">{{subcategory.title}}</a>-->
                              <a v-for="(subcategory) in all_subcategories" :key="subcategory.id" class="dropdown-item" href="#">{{ subcategory.title }}</a>
                          </div>
                      </li>
                      <li class="nav-item px-2">
                          <a class="nav-link font-weight-bold " href="#">About</a>
                      </li>
                      <li class="nav-item px-2">
                          <a class="nav-link font-weight-bold " href="#">Contact Us</a>
                      </li>
                  </ul>
                  <form class="form-inline my-2 my-lg-0" @submit.prevent="getResults">
                      <input class="form-control mr-sm-2" v-model="search" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
              </div>
          </nav>
      </div>
      <div class="col-12 p-0 " style="margin-top: 60px">
          <div id="slider" class="carousel slide carousel-fade carousel_main" data-ride="carousel">
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img class="d-block w-100" src="@/assets/slider-01.jpg" alt="First slide">
                      <div class="carousel-caption text-left mb-lg-5 mb-md-5 pb-0 d-block">
                          <h5 class="dm mb-0">Don't waite and save on...</h5>
                          <p class="hg mb-0">MID SEASON</p>
                          <p class="hg mb-0">SALE! <span class="d_color">UP TO</span></p>
                          <p class="hg mb-0 d_color">-50%</p>
                          <button class="btn mt-lg-5 mt-md-4 mt-sm-0 px-lg-5 px-md-4  rounded-0 shop_now py-lg-3 py-md-3 py-sm-2 px-sm-3  text-white font-weight-bold" style="background-color: #06bec7;">SHOP NOW</button>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <img class="d-block w-100" src="@/assets/slider-02.jpg" alt="Second slide">
                      <div class="carousel-caption mb-lg-5 mb-md-5 d-block pb-0" style="width: 90%">
                          <div class="text-left w-50 ml-auto p-0">
                              <h5 class="dm mb-0 text-black">New Arrival!</h5>
                              <p class="hg mb-0 text-black">MEN</p>
                              <p class="hg mb-0 text-black">COLLECTION</p>
                              <p class="nos mb-2 d_color">2020</p>
                              <button class="btn mt-lg-5 mt-md-4 mt-sm-0 px-lg-5 px-md-4  rounded-0 shop_now py-lg-3 py-md-3 py-sm-2 px-sm-3  text-white font-weight-bold" style="background-color: #06bec7;">SHOP NOW</button>
                          </div>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <img class="d-block w-100" src="@/assets/slider-03.jpg" alt="Third slide">
                      <div class="carousel-caption mb-lg-5 mb-md-5 d-block pb-0 ">
                          <h5 class="dm ">Don't Miss!</h5>
                          <p class="hg mb-0">HATS & GLASSES</p>
                          <p class="nos d_color mb-2 ">NOW ON SALE</p>
                          <button class="btn mt-lg-5 mt-md-4 mt-sm-0 px-lg-5 px-md-4  rounded-0 shop_now py-lg-3 py-md-3 py-sm-2 px-sm-3  text-white font-weight-bold" style="background-color: #06bec7;">SHOP NOW</button>
                      </div>
                  </div>
              </div>
              <a class="carousel-control-prev" href="#slider" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#slider" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
              </a>
          </div>
      </div>
      <div class="col-12 text-center">
          <h1 class="display-4 mt-5 font-weight-bold">All Products</h1>
      </div>
      <div class="col-12 col-md-11 col-lg-11 col-xl-9 d-flex flex-wrap justify-content-center pt-0">
          <div class="col-12 col-md-6 col-lg-3 mt-4 pt-4 card-group" v-for="(product) in products.data" :key="product.id">
              <div v-if="product.stock!=''" class="card shadow1 rounded-0 p-0 col-12">
                  <div class="card-body ">
                      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                          <div class="carousel-inner">
                              <div class="carousel-item"  :class="[!index ? 'active' : '', '']" v-for="(st,index) in product.stock" :key="index" style="height: 250px">
                                  <img  :src="`http://localhost:8000/`+st.p_image" class="d-block w-100" >
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="card-body pt-1 pb-0">
                      <h6 class="card-title font-weight-bold pb-0">{{ short_title(product.name) }}</h6>
                  </div>
                  <div class="card-body w-100 d-flex flex-wrap justify-content-center p-0">
                      <div v-for="(st,index) in product.stock" :key="index">
<!--                          <button class="btn m-2 px-3 py-3 text-white border border-secondary shadow " data-toggle="modal" data-target="#exampleModalCenter" @click="expand(st.id)"   :style="{backgroundColor: st.color}">-->
<!--                          </button>-->
                          <!-- Large modal -->
                          <button type="button" class="btn m-2 px-3 py-3 text-white border border-secondary shadow " data-toggle="modal" :data-target="'#modal'+st.id" :style="{backgroundColor: st.color}"></button>

                          <div class="modal fade" :id="'modal'+st.id" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                              <div class="modal-dialog modal-lg modal-dialog-centered">
                                  <div class="modal-content rounded-0">
                                      <div class="modal-body py-4">
                                          <div class="d-flex flex-wrap align-items-start">
                                              <button type="button" class="btn_close btn btn-danger text-center rounded-0  btn" data-dismiss="modal">X</button>
                                              <div class="col-md-12 col-lg-4 col-12 pb-3" >
                                                  <img :src="`http://localhost:8000/`+st.p_image" class="d-block mt-5  w-100" >
                                              </div>
                                              <div class="col-md-12 col-lg-8 pl-3 col-12 pt-4 " style="height: 350px; overflow-y: scroll;">
                                                  <h5 class="card-title font-weight-bold pb-0">{{ product.name }}</h5>
                                                  <div class=" mt-4 " v-html="product.description">
                                                  </div>
<!--                                                  @click="seemore?seemore=false:seemore=true"-->
                                              </div>
                                          </div>
                                      </div>
                                      <div class="modal-footer border-0">
                                          <div class="col-12 p-0 d-flex mb-2 flex-wrap justify-content-center align-items-center">
                                              <div class="col-lg-6 col-md-6 col-12 mb-3 ">
                                                  <h6 class="text-black text-sm-center text-lg-left text-md-left ">Product Detail:</h6 >
                                              </div>
                                              <div class="col-lg-6 col-md-6 col-12 mb-3 ">
                                                  <button class="btn  w-100 rounded-0 py-2 btn-outline-dark disabled ">{{st.size}}</button>
                                              </div>
                                              <div class="col-lg-6 col-md-6 col-12 mb-3 ">
                                                  <h6 class="text-black text-sm-center text-lg-left text-md-left ">Product Quantity :</h6 >
                                              </div>
                                              <div class="col-lg-6 col-md-6 col-12 mb-2 ">
                                                  <number-input class="w-100" v-model="st.qty" :min="1" :max="st.stock"  inline controls></number-input>
                                              </div>
                                              <div class="col-12 col-md-6 col-lg-6 mb-2">
                                                  <button data-dismiss="modal" class="btn rounded-0 w-100 py-2 btn-outline-info">Continue Shopping</button>
                                              </div>
                                              <div class="col-12 col-md-6 col-lg-6 mb-2 " @click="addToCart(st)">
                                                  <button @click="e=>e.target.classList.toggle('bg-danger')" onclick="this.innerHTML==='Add To Card'?this.innerHTML='Remove From Card':this.innerHTML='Remove From Card'?this.innerHTML='Add To Card':'hi'" class="btn w-100 rounded-0 py-2 btn-success">Add To Card</button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                      </div>
                      <div class="col-12 py-2" >
                          <small class="small text-muted"> {{ product.subcategory.title }}</small>
                      </div>
                  </div>
<!--                  <div class="card-footer">-->
<!--                  <span>-->
<!--                      <vue-moments-ago prefix="Posted" suffix="ago" v-bind:date="product.created_at"></vue-moments-ago>-->
<!--                  </span>-->
<!--                  </div>-->
              </div>
              <div v-else class="card shadow1 rounded-0 p-0 col-12">
                  <div class="card-body p-2 pb-0">
                      <div id="out_of_stock" >
                          <div class="">
                              <div class="img" >
                                  <img  :src="require('../out_of_stock.jpg')" class="w-100 " style="height: 270px">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="card-body pt-1 pb-0">
                      <h6 class="card-title mb-0 font-weight-bold pb-0">{{ short_title(product.name) }}</h6>
                  </div>
                  <div class="card-body w-100 d-flex flex-wrap justify-content-center p-0">
                      <button type="button" class="btn w-75 m-3 p-0 py-1 btn-outline-danger disabled shadow">Out Of Stock</button>
                  </div>
                  <div class="col-12 card-body pb-2 pt-0 w-100" >
                      <small class="small text-muted "> {{ product.subcategory.title }}</small>
                  </div>
              </div>
          </div>
          <pagination :data="products" @pagination-change-page="getResults" class="mt-5 col-12 d-flex justify-content-center">
              <span slot="prev-nav">&lt; Previous</span>
              <span slot="next-nav">Next &gt;</span>
          </pagination>
      </div>
      <div id="carouselExampleIndicatorstwo" class="carousel carousel_main slide" data-ride="carousel">
          <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicatorstwo" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicatorstwo" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicatorstwo" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
              <div class="carousel-item active" >
                  <div class="col-12 py-5 d-flex flex-wrap justify-content-center align-items-center">
                      <h2 class="col-12 text-center py-3 font-weight-bold">WHAT CUSTOMERS ARE SAYING
                      </h2>
                      <div class="testimonial col-12 col-md-8 col-lg-6 text-center">
                          <font-awesome-icon class="h1 d_color" :icon="['fas', 'quote-right']" />
                          <div class="rating pt-3 pb-1">
                              <font-awesome-icon class="h6 d_color " :icon="['fas', 'star']" />
                              <font-awesome-icon class="h6 d_color " :icon="['fas', 'star']" />
                              <font-awesome-icon class="h6 d_color " :icon="['fas', 'star']" />
                              <font-awesome-icon class="h6 d_color " :icon="['fas', 'star']" />
                              <font-awesome-icon class="h6 d_color " :icon="['fas', 'star']" />
                          </div>
                          <div class="content h5 ">
                              “Awesome theme! Very flexible theme for any needs. Customer support are very helpful if you need any help. 10/10”
                          </div>
                          <div class="date small ">May 27 2018</div>
                      </div>
                  </div>
              </div>
              <div class="carousel-item">
                  <div class="col-12 py-5 d-flex flex-wrap justify-content-center align-items-center">
                      <h2 class="col-12 text-center py-3 font-weight-bold">WHAT CUSTOMERS ARE SAYING
                      </h2>
                      <div class="testimonial col-12 col-md-8 col-lg-6 text-center">
                          <font-awesome-icon class="h1 d_color" :icon="['fas', 'quote-right']" />
                          <div class="rating pt-3 pb-1">
                              <font-awesome-icon class="h6 d_color " :icon="['fas', 'star']" />
                              <font-awesome-icon class="h6 d_color " :icon="['fas', 'star']" />
                              <font-awesome-icon class="h6 d_color " :icon="['fas', 'star']" />
                              <font-awesome-icon class="h6 d_color " :icon="['fas', 'star']" />
                              <font-awesome-icon class="h6 d_color " :icon="['fas', 'star']" />
                          </div>
                          <div class="content h5 ">
                              “Awesome theme! Very flexible theme for any needs. Customer support are very helpful if you need any help. 10/10”
                          </div>
                          <div class="date small ">May 27 2018</div>
                      </div>
                  </div>
              </div>
              <div class="carousel-item">
                  <div class="col-12 py-5 d-flex flex-wrap justify-content-center align-items-center">
                      <h2 class="col-12 text-center py-3 font-weight-bold">WHAT CUSTOMERS ARE SAYING
                      </h2>
                      <div class="testimonial col-12 col-md-8 col-lg-6 text-center">
                          <font-awesome-icon class="h1 d_color" :icon="['fas', 'quote-right']" />
                          <div class="rating pt-3 pb-1">
                              <font-awesome-icon class="h6 d_color " :icon="['fas', 'star']" />
                              <font-awesome-icon class="h6 d_color " :icon="['fas', 'star']" />
                              <font-awesome-icon class="h6 d_color " :icon="['fas', 'star']" />
                              <font-awesome-icon class="h6 d_color " :icon="['fas', 'star']" />
                              <font-awesome-icon class="h6 d_color " :icon="['fas', 'star']" />
                          </div>
                          <div class="content h5 ">
                              “Awesome theme! Very flexible theme for any needs. Customer support are very helpful if you need any help. 10/10”
                          </div>
                          <div class="date small ">May 27 2018</div>
                      </div>
                  </div>
              </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicatorstwo" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicatorstwo" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
          </a>
      </div>
      <div class="col-9 py-4">
          <hr class="py-2 "/>
          <VueSlickCarousel v-bind="settings">
              <div>
                  <img src="@/assets/one.png" class="w-100 px-lg-5 px-md-3 px-sm-1   " alt="">
              </div>
              <div>
                  <img src="@/assets/two.png" class="w-100 px-lg-5 px-md-3 px-sm-1   " alt="">
              </div>
              <div>
                  <img src="@/assets/three.png" class="w-100 px-lg-5 px-md-3 px-sm-1   " alt="">
              </div>
              <div>
                  <img src="@/assets/four.png" class="w-100 px-lg-5 px-md-3 px-sm-1   " alt="">
              </div>
              <div>
                  <img src="@/assets/five.png" class="w-100 px-lg-5 px-md-3 px-sm-1   " alt="">
              </div>
              <div>
                  <img src="@/assets/six.png" class="w-100 px-lg-5 px-md-3 px-sm-1   " alt="">
              </div>
              <div>
                  <img src="@/assets/seven.png" class="w-100 px-lg-5 px-md-3 px-sm-1   " alt="">
              </div>
              <div>
                  <img src="@/assets/eight.png" class="w-100 px-lg-5 px-md-3 px-sm-1   " alt="">
              </div>
              <div>
                  <img src="@/assets/nine.png" class="w-100 px-lg-5 px-md-3 px-sm-1   " alt="">
              </div>
              <div>
                  <img src="@/assets/ten.png" class="w-100 px-lg-5 px-md-3 px-sm-1  " alt="">
              </div>
          </VueSlickCarousel>
      </div>
      <div class="col-12 bg-black pt-3">
          <div class="py-lg-4 py-md-4 py-sm-1 d-flex flex-wrap justify-content-center">
              <h3 class="text-white col-12 text-center font-weight-bold py-4" >JOIN OUR NEWSLETTER</h3>
              <form class="form-inline p-0 col-12 col-md-7 col-lg-5 justify-content-center">
                  <div class="form-group col-8 col-md-8 col-sm-8 mb-0 pr-2">
                      <input type="email" class="form-control bg-transparent w-100 text-white rounded-0" id="email_address" placeholder="Your e-mail address">
                  </div>
                  <button type="submit" class="btn px-4 rounded-0 d_bg text-white font-weight-bold">JOIN</button>
              </form>
              <div class="form-check col-12 text-center my-2">
                  <input class="form-check-input " type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label small text-muted" for="defaultCheck1">
                      Accept terms and conditions and privacy policy
                  </label>
              </div>
          </div>
      </div>
      <div class="col-12 d-flex flex-wrap justify-content-center bg-black">
          <div class="col-12 col-md-12 col-lg-10 d-flex flex-wrap justify-content-center align-items-start py-5">
              <div class="col-6 col-md-3 col-lg-3 my-4">
                  <h4 class="text-white">LARAVEL VUE</h4>
                  <p class="text-white-50 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur distinctio eius enim ex magnam maiores officia quas qui velit. Ad beatae dolore magnam possimus quis sit soluta ut voluptas voluptatibus.</p>
              </div>
              <div class="col-6 col-md-3 col-lg-3 my-4">
                  <h6 class="text-white">QUICK LINKS</h6>
                  <ul class="list-group list-group-flush text-white-50 small">
                      <li class="list-group-item py-1 bg-black pl-0">Cras justo odio</li>
                      <li class="list-group-item py-1 bg-black pl-0">Dapibus ac facilisis in</li>
                      <li class="list-group-item py-1 bg-black pl-0">Morbi leo risus</li>
                      <li class="list-group-item py-1 bg-black pl-0">Porta ac consectetur ac</li>
                      <li class="list-group-item py-1 bg-black pl-0">Vestibulum at eros</li>
                  </ul>
              </div>
              <div class="col-6 col-md-3 col-lg-3 my-4">
                  <h6 class="text-white">INFORMATION</h6>
                  <ul class="list-group list-group-flush small text-white-50">
                      <li class="list-group-item py-1 bg-black pl-0">Cras justo odio</li>
                      <li class="list-group-item py-1 bg-black pl-0">Dapibus ac facilisis in</li>
                      <li class="list-group-item py-1 bg-black pl-0">Morbi leo risus</li>
                      <li class="list-group-item py-1 bg-black pl-0">Porta ac consectetur ac</li>
                      <li class="list-group-item py-1 bg-black pl-0">Vestibulum at eros</li>
                  </ul>
              </div>
              <div class="col-6 col-md-3 col-lg-3 my-4">
                  <h6 class="text-white">CONTACT US</h6>
                  <ul class="list-group list-group-flush small text-white-50">
                      <li class="list-group-item py-1 bg-black pl-0">Cras justo odio</li>
                      <li class="list-group-item py-1 bg-black pl-0">Dapibus ac facilisis in</li>
                      <li class="list-group-item py-1 bg-black pl-0">Morbi leo risus</li>
                      <li class="list-group-item py-1 bg-black pl-0">Porta ac consectetur ac</li>
                      <li class="list-group-item py-1 bg-black pl-0">Vestibulum at eros</li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="col-12" >
          <button type="button" class="btn btn-success  d-none position-fixed" id="s_cart" data-toggle="modal" data-target="#exampleModalCenterCart" style="right: 5px; top: 30%; z-index: 1900;">
              <font-awesome-icon class="fa-fw" :icon="['fas', 'shopping-cart']" style="cursor: pointer;" />
              Cart ({{cartItems.length}})
          </button>

          <!-- Modal -->
          <div class="modal fade" id="exampleModalCenterCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterCartTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"  role="document" style="z-index: 99999">
                  <div class="modal-content  rounded-0" >
                      <div class="modal-header">
                          <h5 class="modal-title  " id="exampleModalLongTitle">
                              <font-awesome-icon class="fa-fw text-primary" :icon="['fas', 'shopping-cart']" style="cursor: pointer;" /> YOUR CART
                          </h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div class="modal-body pb-0 " >
                          <table class="table  " >
                              <thead>
                              <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Product</th>
                                  <th scope="col">Price</th>
                                  <th scope="col">Quantity</th>
                                  <th scope="col">
                                      <font-awesome-icon @click="removeItem(index)" class="fa-fw text-danger" :icon="['fas', 'trash']" style="cursor: pointer;" />
                                  </th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr v-for="(item, index) in cartItems" :key="index" >
                                  <th scope="row">{{index+1}}</th>
                                  <td style="width: 55px; ">
                                      <img :src="`http://localhost:8000/`+item.p_image" class="w-100" >
                                  </td>
                                  <td>{{item.price}}</td>
<!--                                  <td>-->
<!--                                      <button class="btn m-2 px-3 py-3 text-white border border-secondary shadow "  :style="{backgroundColor: item.color}">-->
<!--                                      </button>-->
<!--                                  </td>-->
<!--                                  <td>{{item.size}}</td>-->
                                  <td>
                                      <input v-model="item.qty" class="form-control " :min="1" :max="item.stock" type="number">
<!--                                      <number-input class="w-100" v-model="item.stock"  :min="1" :max="item.stock" ></number-input>-->
                                  </td>
                                  <td class="text-center">
                                      <font-awesome-icon @click="removeItem(index,item.p_image)" class="fa-fw text-danger" :icon="['fas', 'trash']" style="cursor: pointer;" />
                                  </td>
                              </tr>
                              <tr v-show="cartItems.length === 0">
                                  <td colspan="5" class="text-center">Cart is empty</td>
                              </tr>
                              </tbody>
                          </table>
                      </div>
                      <div class="modal-footer">
                          <div class="w-100 pr-2 pb-2 text-right" v-show="cartItems.length > 0">
                              Total : {{Total }}Ks
                          </div>
                          <button type="button" class="btn px-4  rounded-0 btn-outline-success" data-dismiss="modal" aria-label="Close">Continue Shopping</button>
                          <button type="button" data-dismiss="modal" data-toggle="modal" data-target="#staticBackdrop" class="btn px-4  rounded-0 btn-primary">Buy Now</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-12">
          <!-- Modal -->
          <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content rounded-0">
                      <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">သင့်အချက်အလက်များ</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div  class="modal-body">
                          <form action="" id="orderForm" method="post" enctype="multipart/form-data" @submit.prevent="buyOrder">
                              <div class="form-group">
                                  <label for="name">နာမည် :</label>
                                  <input type="text" v-model="name" class="form-control" id="name">
                              </div>
                              <div class="form-group">
                                  <label for="phone">ဖုန်းနံပါတ် :</label>
                                  <input type="text" v-model="phone" class="form-control" id="phone">
                              </div>
                              <div class="form-group">
                                  <label for="address">နေရပ်လိပ်စာ :</label>
                                  <textarea name="address" v-model="address" class="form-control" id="address" rows="7"></textarea>
                              </div>
                              <div class="form-group form-check">
                                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                  <label class="form-check-label" for="exampleCheck1">အားလုံးမှန်ကန်ပါသည်</label>
                              </div>
                          </form>
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-outline-success rounded-0" data-dismiss="modal">Continue Shopping</button>
                          <button type="submit" class="btn btn-primary rounded-0" form="orderForm">Submit Order</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  // import { VueEditor } from "vue2-editor";
  global.jQuery = require('jquery');
  var $ = global.jQuery;
  window.$ = $;

  // import VueMomentsAgo from 'vue-moments-ago'

export default {
  name: 'Welcome',
    components: {
        // VueMomentsAgo
        VueSlickCarousel
    },
    data(){
        return{
            name:'',
            phone:'',
            address:'',
            // seemore:false,
            cartItems: [],
            products:{},
            expanded: null,
            search:'',
            content:'',
            errors:{},
            value:1,
            user_categories: '',
            all_subcategories:'',
            settings:{
                // "dots": true,
                // "focusOnSelect": true,
                "infinite": true,
                "speed": 500,
                "autoplay":true,
                "slidesToShow": 5,
                "slidesToScroll": 1,
                // "touchThreshold": 1,
                "responsive": [
                    {
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 3,
                            "infinite": true,
                        }
                    },
                    {
                        "breakpoint": 600,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2,
                        }
                    },
                    {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2
                        }
                    }
                ]
            }
        }
    },
    props: {
        msg: String
    },
    mounted:function () {
        this.getResults();
        this.getCategories();
        this.getSubCategories();
        window.addEventListener('scroll', function() {

            let scroll= window.pageYOffset;
            console.log(scroll);

            if(scroll>=10){
                let element = document.getElementById("header");
                let tw = document.getElementById("twhite");
                tw.classList.remove("navbar-light");
                tw.classList.add("navbar-dark");
                element.classList.add("changeColor");
                document.getElementById("s_cart").classList.remove("d-none");
                document.getElementById("s_cart").classList.add("d-block");
            }else{
                let element = document.getElementById("header");
                let tw = document.getElementById("twhite");
                element.classList.remove("changeColor");
                tw.classList.add("navbar-light");
                tw.classList.remove("navbar-dark");
                document.getElementById("s_cart").classList.remove("d-block");
                document.getElementById("s_cart").classList.add("d-none");
            }
        });
    },
    computed: {
        Total() {
            let total = 0;
            this.cartItems.forEach(item => {
                let numb = item.price.match(/\d/g);
                let price = numb.join("");
                total += (price * item.qty);
            });
            return total;
        }
    },
  methods:{
      removeItem(index,image) {
          this.cartItems.splice(index, 1);
          this.flashMessage.error({
              title: 'Nice!',
              message: `Item Remove Successfully....`,
              icon:`http://localhost:8000/${image}`,
              time:3000,
              blockClass: 'custom_msg_two',
              position: 'right top',
              x: 7,
              y: 70
          });
      },
      addToCart(itemToAdd) {
          let itemInCart = this.cartItems.filter(item => item.id===itemToAdd.id);
          let isItemInCart = itemInCart.length > 0;

          if (isItemInCart === false) {
              this.cartItems.push(itemToAdd);
              this.flashMessage.success({
                  title: 'Nice!',
                  message: `Your item is Successfully Add To Cart`,
                  icon:`http://localhost:8000/${itemToAdd.p_image}`,
                  time:3000,
                  blockClass: 'custom_msg_two',
                  position: 'right top',
                  x: 7,
                  y: 70
              });
          } else {
              // itemInCart[0].qty += this.default_qty;
              let remove=this.cartItems.filter(item => item.id!==itemToAdd.id);
              this.cartItems=remove;
              this.flashMessage.error({
                  title: 'Nice!',
                  message: `Item Remove Successfully....`,
                  icon:`http://localhost:8000/${itemToAdd.p_image}`,
                  time:3000,
                  blockClass: 'custom_msg_two',
                  position: 'right top',
                  x: 7,
                  y: 70
              });
          }
      },
      short_title(text){
          if (text.length >= 20) {
              return text.substring(20, length) + ' ...';
          } else {
              return text;
          }
      },
      getCategories(){
          axios.get('http://127.0.0.1:8000/api/usercategories')
              .then(response=>{
                  this.user_categories=response.data;
              })
      },
      getSubCategories(){
          axios.get('http://127.0.0.1:8000/api/allsubcategories')
              .then(response=>{
                  this.all_subcategories=response.data;
              })
      },
      buyOrder(){
          try {
              this.cartItems.forEach((Oitems) => {
                    Oitems['name']=this.name;
                    Oitems['address']=this.address;
                    Oitems['phone']=this.phone;
                    // Oitems['p_image']=this.p_image;
                  axios.post('http://127.0.0.1:8000/api/order',Oitems);
              });
              this.flashMessage.success({
                  title: 'Nice!',
                  message: 'You Order Successfully....',
                  icon:'http://localhost:8000/success.svg',
                  time:3000,
                  blockClass: 'custom_msg_two',
                  position: 'right top',
                  x: 7,
                  y: 70
              });
              this.cartItems=[];
              this.name='';
              this.phone='';
              this.address='';
          }catch(error){
              switch (error.response.status) {
                  case 422:
                      this.errors=error.response.data.errors;
                      break;
                  default:
                      this.flashMessage.error({
                          status: 'error',
                          title: 'Ohh!!!',
                          message: 'Some Error Occurred !!! Please try again...',
                          icon:'http://localhost:8000/error.svg',
                          time:3000,
                          blockClass: 'custom_msg_two',
                          position: 'right top',
                          x: 7,
                          y: 70
                      });
                      break;
              }
          }
      },
      getResults(page = 1) {
          axios.get(`http://127.0.0.1:8000/api/userData?page=${page}&search=${this.search}`)
              .then(response => {
                  let loader = this.$loading.show({
                      // Optional parameters
                      container: this.fullPage ? null : this.$refs.formContainer,
                      canCancel: true,
                      onCancel: this.onCancel,
                      color: 'blue',
                      loader: 'bars',
                      width: 94,
                      height: 64,
                      backgroundColor: '#ffffff',
                      opacity: 0.7,
                      zIndex: 999,
                  });
                  // simulate AJAX
                  setTimeout(() => {
                      loader.hide()
                  },500)
                  this.products = response.data;
              });
      },
  },
}
</script>
<style>
    .text-black{
        color: black !important;
    }
    th{
        text-align: center !important;
    }
    .bg-black{
        background: black !important;
    }
    .text-white{
        color: rgba(239, 231, 231, 0.82) !important;
    }
    .d_color{
        color: #06bec7 !important;
    }
    .d_bg{
        background: #06bec7 !important;
    }
    .dm{
        font-size: 2vw;
    }
    .number-input__input{
        border-radius: 0 !important;
        width: 100% !important;
    }
    .shop_now{
        font-size: 1.2vw !important;
        margin-top: 0px;
    }
    .hg ,.nos{
        font-size: 6vw;
        font-weight: bold;
        line-height: 6vw;
    }
    .changeColor {
        background-color: black !important;
        -webkit-transition: background-color 0.5s ease-out;
        -moz-transition: background-color 0.5s ease-out;
        -o-transition: background-color 0.5s ease-out;
        transition: background-color 0.5s ease-out;
    }
    #twhite{
        color: white;
    }
    /* width */
    ::-webkit-scrollbar {
        width: 0px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #007bff;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
    ::-webkit-scrollbar:horizontal {
        display: none;
    }
    .btn_close{
        position: absolute;
        right: -1px;
        top: -1px;
    }
    td{
        vertical-align: middle !important;
    }
    .shadow1 {
        box-shadow: 0 15px 15px 0 rgba(0,0,0,.06);
        /*box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);*/
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
    /*.shadow1 {*/
    /*    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);*/
    /*    transition: all 0.3s cubic-bezier(.25,.8,.25,1);*/
    /*}*/

    .shadow1:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
</style>





<!--                  <div class="card-body w-100 py-0">-->
<!--                      <div class=" form-row mb-1">-->
<!--                          <div class="col pl-0">-->
<!--                              <select class="form-control" id="size">-->
<!--                                  <option selected disabled>Choose Size</option>-->
<!--                                  <option v-for="(st,index) in product.stock" :key="index" :value="st.id" >{{st.size}}</option>-->
<!--                              </select>-->
<!--                          </div>-->
<!--                          <div class="col pr-0">-->
<!--                              <select class="form-control" id="color">-->
<!--                                  <option selected disabled>Choose Color</option>-->
<!--                                  <option v-for="(st,index) in product.stock" :key="index" :value="st.id" :style="{backgroundColor: st.color}"> </option>-->
<!--                              </select>-->
<!--                          </div>-->
<!--                          <button class="btn btn-outline-primary w-100 mt-2">Add To Cart</button>-->
<!--                      </div>-->
<!--                  </div>-->


<!--<div  v-if="expanded == st.id" class="modal fade"  id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">-->
<!--    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">-->
<!--        <div class="modal-content rounded-0">-->
<!--            <div class="modal-body py-4" :class="[stt.id != st.id ? 'd-none' : '', '']" v-for="(stt,index) in product.stock" :key="index">-->
<!--                <div class="d-flex flex-wrap align-items-center">-->
<!--                    <button type="button" class="btn_close btn btn-danger text-center rounded-0  btn" data-dismiss="modal">X</button>-->
<!--                    <div class="col-md-12 col-lg-4 col-12">-->
<!--                        <img :src="`http://localhost:8000/`+stt.p_image" class="d-block w-100" >-->
<!--                    </div>-->
<!--                    <div class="col-md-12 col-lg-8 pl-3 col-12 ">-->
<!--                        <h5 class="card-title font-weight-bold pb-0">{{ product.name }}</h5>-->
<!--                        <span class="pb-0 badge badge-pill badge-primary px-4 py-2 mb-1">  {{st.price}} </span>-->
<!--                        <div v-html="short(product.description)" class=" mt-4 "></div>-->
<!--                        <div class="col-12 p-0 d-flex mt-4 mb-2 flex-wrap justify-content-center align-items-center">-->
<!--                            <div class="col-lg-6 col-md-6 col-12 mb-3 ">-->
<!--                                <h6 class="text-black text-sm-center text-lg-left text-md-left ">Product Size :</h6 >-->
<!--                            </div>-->
<!--                            <div class="col-lg-6 col-md-6 col-12 mb-3 ">-->
<!--                                <button class="btn  w-100 rounded-0 py-2 text-white btn-primary ">{{stt.size}}</button>-->
<!--                            </div>-->
<!--                            <div class="col-lg-6 col-md-6 col-12 mb-3 ">-->
<!--                                <h6 class="text-black text-sm-center text-lg-left text-md-left ">Product Quantity :</h6 >-->
<!--                            </div>-->
<!--                            <div class="col-lg-6 col-md-6 col-12 mb-2 ">-->
<!--                                <number-input class="w-100" v-model="default_qty" :min="1" :max="stt.stock"  inline controls></number-input>-->
<!--                            </div>-->
<!--                            <div class="col-12 mb-2 " @click="addToCart(stt)">-->
<!--                                <button @click="e=>e.target.classList.toggle('bg-danger')" onclick="this.innerHTML==='Add To Card'?this.innerHTML='Remove From Card':this.innerHTML='Remove From Card'?this.innerHTML='Add To Card':'hi'" class="btn w-100 rounded-0 py-2 btn-success">Add To Card</button>-->
<!--                            </div>-->
<!--                            <div class="col-12">-->
<!--                                <a href="#" class="btn rounded-0 w-100 py-2 btn-outline-primary">More Info</a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->