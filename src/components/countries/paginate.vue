<template>
    <div> 
        <Paginate 
          v-model="currentPage"
          :page-count="pageCountS" 
          :page-range="3"
          :margin-pages="2" 
          :prev-text="'Prev'"
          :next-text="'Next'"
        ></Paginate>  
    </div>
  </template>
  
  
  
  <script>
  // npm install vuejs-paginate-next --save
  import Paginate from "vuejs-paginate-next";
      
    export default ({
      data() {
        return{
            pageCount: 0,
        }
      },
      components: {
        Paginate
      },
      computed: {
        pageCountS() {
            this.pageCount= Math.ceil(this.$store.state.total / 10)
            
            //cambiar el numero de pagina a uno cuando la pagina actual
            //es mayor a la cantidad de paginas
            if(this.$store.state.currentPage>this.pageCount){
              this.$store.state.currentPage=1
            }
            return this.pageCount;
        },
        currentPage: {
          get() {
            return this.$store.state.currentPage
          },
          set(value){
            this.$store.commit("SET_CURRENTPAGE", value)
          }
        }
      },
  
    })
    </script>
   <style lang="css">
   /* Adopt bootstrap pagination stylesheet. */
   @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
  
   /* Write your own CSS for pagination */
   .pagination {
   }
   .page-item {
   }
  </style>