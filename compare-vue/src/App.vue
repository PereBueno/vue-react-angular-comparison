<template>
  <div id="app">
    <!-- Header -->
    <div class="navbar has-shadow">
      <div class="container">
        <div class="navbar-brand">
          <a href="" class="navbar-item">My company</a>
          <span class="navbar-burger" v-on:click="toggleNav" v-bind:class="{'is-active': isActive}">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div class="navbar-end navbar-menu" v-bind:class="{'is-active': isActive}">
          <router-link to="/" class="navbar-item r-item">Home</router-link>
          <router-link to="/" class="navbar-item r-item">Home</router-link>
          <router-link to="/" class="navbar-item r-item">Home</router-link>
          <router-link to="/faq" class="navbar-item r-item">FAQ</router-link>
          <div class="navbar-item">
            <p class="control">
              <a href="" class="button is-primary is-outlined">
                <span class="icon">
                  <i class="fa fa-download">
                  </i>
                </span>
                <div>Join now</div>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- ENDOF Header -->

    <router-view/>

    <!-- Footer -->
    <footer class="footer is-primary">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p>Some randome text goes here</p>
          </div>
          <div class="column has-text-right">
            <a href="" class="icon"><i class="fa fa-facebook"></i></a>
            <a href="" class="icon"><i class="fa fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
    <!-- ENDOF Footer -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    isActive: false
  }),
  methods: {
    toggleNav: function () { this.isActive = !this.isActive }
  }
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import './mq'
.navbar
  background-color: #383838
  a:hover
    color: gray

.navbar-brand a
  color: white
  font-weight: bold

.navbar-burger span
    background-color: #C1C1C1

a.r-item
  color: #C1C1C1
  padding: 0.5rem 1.75rem
  +mobile
    color: gray
    &:hover
      background-color: #F1F1F1

footer
  background-color: $primary !important
  color: #FFFFFF
  .icon
    color: white
    margin-left: 20px
</style>
