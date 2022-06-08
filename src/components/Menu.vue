<template>

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
</template>

<script>
    import axios from "axios";

    export default {
        name: "Menu.vue",
        data(){
            return{
                user_categories: '',
                all_subcategories:'',
            }
        },
        mounted() {
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
                }else{
                    let element = document.getElementById("header");
                    let tw = document.getElementById("twhite");
                    element.classList.remove("changeColor");
                    tw.classList.add("navbar-light");
                    tw.classList.remove("navbar-dark");
                }
            });
        },
        methods:{
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
        }
    }
</script>

<style scoped>
    .bg-black{
        background: black !important;
    }
    .d_color{
        color: #06bec7 !important;
    }
    .text-white{
        color: rgba(239, 231, 231, 0.82) !important;
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
</style>