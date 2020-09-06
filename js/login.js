class pinLogin{
  constructor({el, loginEndpoint, redirectTo, maxNumbers = Infinity}){
    this.el = {
      main:el,
      numPad: el.querySelector(".pin-login__numpad"),
      textDisplay: el.querySelector(".pin-login__text")
    };
    this.loginEndpoint = loginEndpoint;
    this.redirectTo = redirectTo;
    this.maxNumbers = maxNumbers;
    this.value = "";

    this._generatePad();
  }

  _generatePad(){
    const padUI = [
      "1","2","3",
      "4","5","6",
      "7","8","9",
      "Delete","0","Enter",
    ];
    padUI.forEach(key => {
      const inserBreak = key.search(/[369]/) !== -1;
      const keyE1 = document.createElement('div');

      keyE1.classList.add("pin-login__key");
      keyE1.classList.toggle("icons", isNaN(key));
      keyE1.textContent = key;
      keyE1.addEventListener('click', ()=> {this._handleKeyPress(key)});
      this.el.numPad.appendChild(keyE1);

      if(inserBreak){
        this.el.numPad.appendChild(document.createElement('br'))
      }
    });
  }

  _handleKeyPress(key){
    switch(key){
      case "Delete":
        this.value = this.value.substring(0, this.value.length -1);
        break;
      case "Enter":
        this._attemptLogin();
        break;
      default:
        if(this.value.length < this.maxNumbers && !isNaN(key)){
          this.value +=key;
        }
        break;
    }

    this._updateValueText();
  }

  _updateValueText(){
    this.el.textDisplay.value = "_".repeat(this.value.length);
    this.el.textDisplay.classList.remove("pin-login__text--error");
  }

  _attemptLogin(){
    if(this.value.length > 0){
      fetch(this.loginEndpoint,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'pincode=${this.value}'
      })
      .then(response => {
        if(response.status === 200){
          window.location.href = this.redirectTo;
        }else{
          this.el.textDisplay.classList.add("pin-login__text--error");
        }
      })
    }
  }
}