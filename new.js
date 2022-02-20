let params = {
    "myselect":
        [700, 900, 1200],
    
        "myradio": {
        "r1": 300,
        "r2": 200,
        "r3": 100
        },
    
        "mycheckbox": {
        "check-1": 250,
        "check-2": 300,
        "check-3": 500
        }
  };
  
  console.log(params);
  
    let k=0;
    let t=0;
  
    window.addEventListener('DOMContentLoaded', function (event) {
        let f1 = document.getElementsByName("field1");
        let r = document.getElementById("result");
        let s = document.getElementsByName("myselect");
        s[0].addEventListener("change", function(event) {
          let select = event.target;
          console.log(select.value);
          if (select.value == "1") 
            r.innerHTML=params.myselect[0]*f1[0].value;
          if (select.value == "2")
          {
            r.innerHTML=(params.myselect[1]+k)*f1[0].value;
            let rad = document.querySelectorAll(".myradios input[type=radio]");
            rad.forEach(function(radio) {
            radio.addEventListener("change", function(event) {
            let rad = event.target;
            console.log(rad.value);
            if(document.getElementById('r1').checked)
            {
                r.innerHTML=(params.myselect[1]+params.myradio.r1)*f1[0].value;
                k=params.myradio.r1;
            }
            if(document.getElementById('r2').checked)
            {
                r.innerHTML=(params.myselect[1]+params.myradio.r2)*f1[0].value;
                k=params.myradio.r2;
            }
            if(document.getElementById('r3').checked)
            {
                r.innerHTML=(params.myselect[1]+params.myradio.r3)*f1[0].value;
                k=params.myradio.r3;
            }
          });    
        });
          }
          if (select.value == "3")
          {
            r.innerHTML=(params.myselect[2]+t)*f1[0].value;
            let ch = document.querySelectorAll(".mycheckbox input[type=checkbox]");
            ch.forEach(function(checkbox) {
            checkbox.addEventListener("change", function(event) {
            let ch = event.target;
            console.log(ch.value);
            if(document.getElementById('c1').checked && document.getElementById('c2').checked && document.getElementById('c3').checked)
            {
                r.innerHTML=(params.myselect[2]+params.mycheckbox["check-1"]+params.mycheckbox["check-2"]+params.mycheckbox["check-3"])*f1[0].value;
                t=params.mycheckbox["check-1"]+params.mycheckbox["check-2"]+params.mycheckbox["check-3"];
            }
  
            if(document.getElementById('c2').checked && document.getElementById('c1').checked && !document.getElementById('c3').checked)
            {
                r.innerHTML=(params.myselect[2]+params.mycheckbox["check-1"]+params.mycheckbox["check-2"])*f1[0].value; 
                t=params.mycheckbox["check-1"]+params.mycheckbox["check-2"];
            }
  
            if(document.getElementById('c3').checked && document.getElementById('c1').checked && !document.getElementById('c2').checked)
            {
                r.innerHTML=(params.myselect[2]+params.mycheckbox["check-1"]+params.mycheckbox["check-3"])*f1[0].value;  
                t=params.mycheckbox["check-1"]+params.mycheckbox["check-3"];
            }
  
            if(document.getElementById('c3').checked && document.getElementById('c2').checked && !document.getElementById('c1').checked)
            {
                r.innerHTML=(params.myselect[2]+params.mycheckbox["check-2"]+params.mycheckbox["check-3"])*f1[0].value;  
                t=params.mycheckbox["check-2"]+params.mycheckbox["check-3"];
            }
  
            if(document.getElementById('c1').checked && !document.getElementById('c2').checked && !document.getElementById('c3').checked)
            {
                r.innerHTML=(params.myselect[2]+params.mycheckbox["check-1"])*f1[0].value;  
                t=params.mycheckbox["check-1"]; 
            }
  
            if(document.getElementById('c2').checked && !document.getElementById('c1').checked && !document.getElementById('c3').checked)
            {
                r.innerHTML=(params.myselect[2]+params.mycheckbox["check-2"])*f1[0].value;  
                t=params.mycheckbox["check-2"];
            }
  
            if(document.getElementById('c3').checked && !document.getElementById('c1').checked && !document.getElementById('c2').checked)
            {
                r.innerHTML=(params.myselect[2]+params.mycheckbox["check-3"])*f1[0].value;  
                t=params.mycheckbox["check-3"];
            }
  
            if(!document.getElementById('c3').checked && !document.getElementById('c1').checked && !document.getElementById('c2').checked)
            {
                r.innerHTML=(params.myselect[2])*f1[0].value;  
                t=0; 
            }
          });    
        });
        }
        });
  
  
        return false;
    });
  
    //let re = /^\s*\d+\s*$/;
    //if(re.exec(f1[0].value))
    //r.innerHTML = f1[0].value*f2[0].value;
    //else alert("Некорректный ввод");
  
  
  window.addEventListener('DOMContentLoaded', function (event) {
  let s = document.getElementsByName("myselect");
  s[0].addEventListener("change", function(event) {
    let select = event.target;
    let radios = document.getElementById("myradios");
    console.log(select.value);
    if (select.value == "1") {
      radios.style.display = "none";
    }
    if (select.value == "2"){
      radios.style.display = "block";
    }
    if (select.value == "3") {
      radios.style.display = "none";
    }
  });
  
  let r = document.querySelectorAll(".myradios input[type=radio]");
  r.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
      console.log(r.value);
    });    
  });
  
  });
  
  
  window.addEventListener('DOMContentLoaded', function (event) {
    let s = document.getElementsByName("myselect");
    s[0].addEventListener("change", function(event) {
      let select = event.target;
      let checkbox = document.getElementById("mycheckbox");
      console.log(select.value);
      if (select.value == "1") {
        checkbox.style.display = "none";
      }
      if (select.value == "2"){
        checkbox.style.display = "none";
      }
      if (select.value == "3") {
        checkbox.style.display = "block";
      }
    });
  
    let r = document.querySelectorAll(".mycheckbox input[type=checkbox]");
    c.forEach(function(checkbox) {
      checkbox.addEventListener("change", function(event) {
        let c = event.target;
        console.log(r.value);
      });    
    });
    
  });