<template>
<!-- Start About -->
<section>
  <div class="container bg-light mb-3 mt-4">
    <div class="area text-center">
      <div class="col">
        <h2 class="title">About Us</h2>
        <div class="underline"></div>
      </div>
      <div class="row" id="about-text">
        <p>
          Lorem ipsum dolor sit amet, duo te graeci apeirian, at has albucius salutatus referrentur.
          Nusquam mandamus te qui. Ex his aliquam percipit, corrumpit elaboraret id vel,
          iuvaret adipisci ius id. Brute oblique salutatus cu mea, eum vero mundi numquam ex.
          Ius ei voluptatum dissentias, probo possim dolorum no sea, at nec neglegentur reprehendunt.
          Virtute assentior adversarium vis ut, modo fastidii tincidunt id est, sea ullum viderer habemus te.
          Vix unum aperiri copiosae ne, eu laudem evertitur philosophia sed.
          Cum nisl ferri delicatissimi ne. Eu est suas illum iuvaret.
        </p>
      </div>
    </div>
  </div>
</section>
<!-- End About -->

<!-- Start Founders -->
<div id="founders">
  <div class="jumbotron container">
    <div class="col-12 text-center">
      <h2 class="title">Founders</h2>
      <div class="underline"></div>
    </div>
    <div class="row m-0">
      <div class="row col-6">
        <div class="col-4">
          <img src="../assets/Founder/woman.jpg" alt="" srcset="">
        </div>
        <div class="col-8">
          <blockquote>
            <i class="fas fa-quote-left"></i>
            <p class="text-color">
              Lorem ipsum dolor sit amet, duo te graeci apeirian, at has albucius salutatus referrentur.
              Nusquam mandamus te qui. Ex his aliquam percipit, corrumpit elaboraret id vel, 
              iuvaret adipisci ius id. Brute oblique salutatus cu mea, eum vero mundi numquam ex.
            </p>
            <hr class="founders-hr">
            <cite>
              <strong>Founder Name : </strong>Lorem ipsum
            </cite>
          </blockquote>
        </div>
      </div>
      <div class="row col-6 ms-4">
        <div class="col-4">
          <img src="../assets/Founder/man.png" alt="" srcset="">
        </div>
        <div class="col-8">
          <blockquote>
            <i class="fas fa-quote-left"></i>
            <p class="text-color">
              Lorem ipsum dolor sit amet, duo te graeci apeirian, at has albucius salutatus referrentur.
              Nusquam mandamus te qui. Ex his aliquam percipit, corrumpit elaboraret id vel, 
              iuvaret adipisci ius id. Brute oblique salutatus cu mea, eum vero mundi numquam ex.
            </p>
            <hr class="founders-hr">
            <cite>
              <strong>Founder Name : </strong>Lorem ipsum
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</div>  
<!-- End Founders -->
</template>

<script>
export default 
{

}
</script>

<style>
/* Start About */
#about-text p
  {
    font-size: 18px;
    padding: 20px 40px;
  }

.title
  {
    padding-top: 20px;
  } 

.underline 
  {
    width: 20rem;
    height: 0.2rem;
    background-color: rgb(25, 218, 252);
    margin: 1rem auto 2rem;
  } 
/* End About */

/* Start Founders */
#founders img 
  {
    width: 100%;
    border-radius: 50%;
  }

blockquote 
  {
    text-align: justify;
    font-family: 'koodak';
    font-size: 1rem;
  }

blockquote i 
  {
    color: #1ebba3;
    margin: 1rem;
  }
 
.text-color
{
  color: #000;
} 

.founders-hr 
  {
    border-bottom: 2px solid rgb(0, 38, 255);
  }  
/* End Founders */
</style>