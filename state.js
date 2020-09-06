const PageState = function(){
  this.currentState = new homeState(this);

  this.init = function(){
    this.changeState(new homeState);
  }

  this.changeState = function(state){
    currentState = state;
  }
}

// Home State

const homeState = function(page){
  document.querySelector('.header').textContent=null;
  document.querySelector('.content').innerHTML = `
  <div class="jumbotron">
  <h3 class='display-5 text-center'><b>MY PORTFOLIO</b></h3>
  <p> This is just a simple portfolio built with pure Javascript as front end, you can check my github profile for more </p>
  <hr class='my-4'>
  <p>I have alot of PHP, JavaScript, HTML5 works on my github page, with complete full project</p>
  <p class='lead'>
    <a class='btn btn-primary' target='_blank' href="github.com/nathanielnosa" role="button">Github Page</a>
  </p>
</div>
  `;
};

// About State

const aboutState = function(page){
  document.querySelector('.header').textContent= "About NCODE";

  document.querySelector('.content').innerHTML= `
    <div class='col-md-6 mx-auto mt-5'>
    <p>Nathaniel Nosa is the CEO of NCODE. And he is a web developer, that has good knowledge in PHP, BOOTSTRAP 4, HTML5, CSS, JavaScript </p>
    </div>
  `;
};

// Contact State
const contactState = function(page){
  document.querySelector('.header').textContent= "Send Us a Message";

  document.querySelector('.content').innerHTML= `
    <div class='col-md-5 mx-auto'>
    <form>
      <div class='form-group'>
        <label>Full Name </label>
        <input type='text' class='form-control'>
      </div>
      <div class='form-group'>
        <label>Enter Email </label>
        <input type='text' class='form-control'>
      </div>
      <div class='form-group'>
        <label>Message </label>
          <textarea class='form-control' col='10' row='5'>
          </textarea>
      </div>
      <button class='btn btn-primary btn-lg' type='submit'>Submit</button>
    </form>
    </div>
  `;
};

//Page State
const page = new PageState();

// The first State
page.init()

//UI variables

const home = document.querySelector('#home'),
      about = document.querySelector('#about'),
      contact = document.querySelector('#contact');

// Home
home.addEventListener('click',(e)=>{
  e.preventDefault();
  page.changeState(new homeState);
});

// About
about.addEventListener('click',(e)=>{
  e.preventDefault();
  page.changeState(new aboutState);
});

// Home
contact.addEventListener('click',(e)=>{
  e.preventDefault();
  page.changeState(new contactState);
});