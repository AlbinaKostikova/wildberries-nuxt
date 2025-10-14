<template>
    <section class="slider swiper-container">
      <div class="swiper-wrapper">
        <section class="slide slide-1 swiper-slide">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-10 offset-lg-1">
                <span class="label">Bestseller</span>
                <h2 class="slide-title">Women's Alpargata Loafer</h2>
                <p class="slide-description">At Alpa believe in a better tomorrow, one where humanity thrives.</p>
                <button class="button add-to-cart" data-id="003">
                  <span class="button-price">$219</span>
                  <span class="button-text">Shop now</span>
                </button>
              </div>
              <!-- /.col-4 offset-lg-1 -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container -->
        </section>
        <section class="slide slide-1 swiper-slide">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-10 offset-lg-1">
                <span class="label">New</span>
                <h2 class="slide-title">Text T-Shirt</h2>
                <p class="slide-description">
                  Women’s pearl basic knit sweater with a round neck. Available in several colours. Free shipping to
                  stores.
                </p>
                <button class="button add-to-cart" data-id="004">
                  <span class="button-price">$119</span>
                  <span class="button-text">Shop now</span>
                </button>
              </div>
              <!-- /.col-4 offset-lg-1 -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container -->
        </section>
        <section class="slide slide-1 swiper-slide">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-10 offset-lg-1">
                <span class="label">Bestseller</span>
                <h2 class="slide-title">Sweater Choker Neck</h2>
                <p class="slide-description">
                  Women’s pearl basic knit sweater with a round neck. Available in several colours. Free shipping to
                  stores.
                </p>
                <button class="button add-to-cart" data-id="005">
                  <span class="button-price">$319</span>
                  <span class="button-text">Shop now</span>
                </button>
              </div>
              <!-- /.col-4 offset-lg-1 -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container -->
        </section>
      </div>
      <!-- /.swiper-wrapper -->
      <div class="slider-nav">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-1">
              <button class="slider-button slider-button-prev">
                <img src="/images/arrow-prev.svg" alt="icon: arrow-prev" />
              </button>
            </div>
            <!-- /.col-1 -->
            <div class="col-1">
              <button class="slider-button slider-button-next">
                <img src="/images/arrow-next.svg" alt="icon: arrow-prev" />
              </button>
            </div>
            <!-- /.col-1 -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.slider-nav -->
    </section>
    <!-- /.slider -->
    <section class="special-offers container pt-5 pb-4">
      <div class="row mb-4">
        <div class="col-xl-6">
          <div class="card card-1 mb-4">
            <h3 class="card-title">Fashion Month Ready in Capital Shop</h3>
            <p class="card-text">Bags & Acsessories & Lingerie & Sportswear & Beauty & Swimwear</p>
            <button class="button">
              <span class="button-text">View all</span>
              <img src="/images/arrow.svg" alt="icon: arrow" class="button-icon" />
            </button>
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col-6 -->
        <div class="col-xl-6">
          <div class="card card-2 mb-4">
            <h3 class="card-title text-light">Catch the Sun: Spring Break Styles From $5.99</h3>
            <p class="card-text text-light">Sweaters & Hoodies & Puffer Jackets & Coats and Jackets & Knit</p>
            <button class="button">
              <span class="button-text">View all</span>
              <img src="/images/arrow.svg" alt="icon: arrow" class="button-icon" />
            </button>
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col-6 -->
        <div class="col-xl-9 col-lg-6 mb-4">
          <div class="card card-3">
            <span class="label">Bestseller</span>
            <h3 class="card-title large">Poplin Top <br />With Sleeve Bow</h3>
            <p class="card-text large">Poplin top with roll neckline, long sleeves</p>
            <button class="button add-to-cart" data-id="002">
              <span class="button-price">$129</span>
              <span class="button-text">Shop now</span>
            </button>
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col-9 -->
        <div class="col-xl-3 col-lg-6">
          <div class="card card-4">
            <h3 class="card-title text-light mw-160">Printed Shirt with a Bow</h3>
            <p class="card-text text-light">Pink/Sky Blue/Yellow</p>
            <button class="button add-to-cart button-four" data-id="009">
              <span class="button-price">$119</span>
              <span class="button-text">Shop now</span>
            </button>
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col-3 -->
      </div>
      <!-- /.row -->
      <div class="row align-items-center mb-4">
        <div class="col-9">
          <h2 class="section-title">New Arrival</h2>
        </div>
        <!-- /.col-9 -->
        <div class="col-3 d-flex justify-content-end">
          <NuxtLink :to="{path: '/products', query: {field: 'label', name: 'New'}}" class="more">
            View All
          </NuxtLink>
        </div>
        <!-- /.col-3 -->
      </div>
      <!-- /.row -->
      <div class="short-goods row" >
        <div class="col-lg-3 col-sm-6" v-for="card in data" :key="card">
          <div class="goods-card">
            <span class="label">{{ card.label.toUpperCase() }}</span>
         <img :src="card.img" alt="image: Hoodie" class="goods-image" />
            <h3 class="goods-title">{{ card.name }}</h3>
            <p class="goods-description">{{ card.description }}</p>
            <button class="button goods-card-btn add-to-cart" data-id="012">
              <span class="button-price">${{ card.price }}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
const { data } = await useFetch('/api/new-products')
</script>