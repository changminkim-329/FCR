let flight_number = parseInt(prompt("항적의 개수를 입력해주세요(1~4중에 입력가능):"));
while (true){
  if(flight_number>4 || flight_number<1 || isNaN(flight_number)){
    console.log("a wrong enter");
  }
  else{
    console.log("a good enter");
    break;
  }
  flight_number = parseInt(prompt("당신은 잘못 입력하셨습니다.\n항적의 개수를 입력해주세요(1~4중에 입력가능): "));

}

let no_list = document.getElementsByClassName("no");
let speed_list = document.getElementsByClassName("finput3");
let direction_list = document.getElementsByClassName("finput4");
let mark_text = no_list;
let rowList = document.getElementsByClassName("row");

//window oninput
window.oninput = function(){
  if((event.target).tagName=="INPUT"){
    if((event.target).className=="finput1"){
      inputFunc1();
    }

    if((event.target).className=="finput2"){
      inputFunc2();
    }

    if((event.target).className=="finput3"){
      inputFunc3();
    }

    if((event.target).className=="finput4"){
      inputFunc4();
    }
    restartFunc();
  }
  
}



// inputFunc1_part
let inputFunc1 = function(){
  let finput1_s = document.getElementsByClassName("finput1");
  let finput2_s = document.getElementsByClassName("finput2");
  let finput3_s = document.getElementsByClassName("finput3");
  let finput4_s = document.getElementsByClassName("finput4");

  let len = finput1_s.length - 1;

  if(!(isNaN(finput1_s[len].value)) && finput1_s[len].value != ""){
    if(!(isNaN(finput2_s[len].value)) && finput2_s[len].value != ""){
      if(!(isNaN(finput3_s[len].value)) && finput3_s[len].value != ""){
        if(!(isNaN(finput4_s[len].value)) && finput4_s[len].value != ""){
          let new_tr = document.createElement("tr");
          new_tr.className = "row";
          new_tr.innerHTML = 
          '<td>'+'</td><td><input class="finput1" type="text" id="inputtag" autofocus></td>'+
          '<td><input type="text" class="finput2"></td>'+
          '<td><input type="text" class="finput3"></td>'+
          '<td><input type="text" class="finput4"></td>';

          document.querySelector(".table-inputs").append(new_tr);

          let date = ((((new Date().getHours() >= 10)?"":"0")+(new Date()).getHours())) + ":"+ (((new Date()).getMinutes() >= 10)?"":"0")+new Date().getMinutes();

          rowList[len].children[0].innerHTML = '<input class="no" value="'+date+'">'

        }
      }
    }
  }
  else{
    finput1_s[len].value="";
    finput1_s[len].setAttribute("placeholder","숫자만 넣어주세요.");
  }
}

// inputFunc2_part
let inputFunc2 = function(){
  let finput1_s = document.getElementsByClassName("finput1");
  let finput2_s = document.getElementsByClassName("finput2");
  let finput3_s = document.getElementsByClassName("finput3");
  let finput4_s = document.getElementsByClassName("finput4");

  let len = finput2_s.length - 1;

  if(!(isNaN(finput2_s[len].value)) && finput2_s[len].value != ""){
    if(!(isNaN(finput3_s[len].value)) && finput3_s[len].value != ""){
      if(!(isNaN(finput4_s[len].value)) && finput4_s[len].value != ""){
        if(!(isNaN(finput1_s[len].value)) && finput1_s[len].value != ""){
          let new_tr = document.createElement("tr");
          new_tr.className = "row";
          new_tr.innerHTML = 
          '<td>'+'</td><td><input class="finput1" type="text" id="inputtag" autofocus></td>'+
          '<td><input type="text" class="finput2"></td>'+
          '<td><input type="text" class="finput3"></td>'+
          '<td><input type="text" class="finput4"></td>';

          document.querySelector(".table-inputs").append(new_tr);

          let date = ((((new Date().getHours() >= 10)?"":"0")+(new Date()).getHours())) + ":"+ (((new Date()).getMinutes() >= 10)?"":"0")+new Date().getMinutes();

          rowList[len].children[0].innerHTML = '<input class="no" value="'+date+'">'

        }
      }
    }
  }
  else{
    finput2_s[len].value="";
    finput2_s[len].setAttribute("placeholder","숫자만 넣어주세요.");
  }
}

// inputFunc3_part
let inputFunc3 = function(){
  let finput1_s = document.getElementsByClassName("finput1");
  let finput2_s = document.getElementsByClassName("finput2");
  let finput3_s = document.getElementsByClassName("finput3");
  let finput4_s = document.getElementsByClassName("finput4");

  let len = finput3_s.length - 1;

  if(!(isNaN(finput3_s[len].value)) && finput3_s[len].value != ""){
    if(!(isNaN(finput4_s[len].value)) && finput4_s[len].value != ""){
      if(!(isNaN(finput1_s[len].value)) && finput1_s[len].value != ""){
        if(!(isNaN(finput2_s[len].value)) && finput2_s[len].value != ""){
          let new_tr = document.createElement("tr");
          new_tr.className = "row";
          new_tr.innerHTML = 
          '<td>'+'</td><td><input class="finput1" type="text" id="inputtag" autofocus></td>'+
          '<td><input type="text" class="finput2"></td>'+
          '<td><input type="text" class="finput3"></td>'+
          '<td><input type="text" class="finput4"></td>';

          document.querySelector(".table-inputs").append(new_tr);

          let date = ((((new Date().getHours() >= 10)?"":"0")+(new Date()).getHours())) + ":"+ (((new Date()).getMinutes() >= 10)?"":"0")+new Date().getMinutes();

          rowList[len].children[0].innerHTML = '<input class="no" value="'+date+'">'

        }
      }
    }
  }
  else{
    finput3_s[len].value="";
    finput3_s[len].setAttribute("placeholder","숫자만 넣어주세요.");
  }
}

// inputFunc4_part
let inputFunc4 = function(){
  let finput1_s = document.getElementsByClassName("finput1");
  let finput2_s = document.getElementsByClassName("finput2");
  let finput3_s = document.getElementsByClassName("finput3");
  let finput4_s = document.getElementsByClassName("finput4");

  let len = finput4_s.length - 1;

  if(!(isNaN(finput4_s[len].value)) && finput4_s[len].value != ""){
    if(!(isNaN(finput1_s[len].value)) && finput1_s[len].value != ""){
      if(!(isNaN(finput2_s[len].value)) && finput2_s[len].value != ""){
        if(!(isNaN(finput3_s[len].value)) && finput3_s[len].value != ""){
          let new_tr = document.createElement("tr");
          new_tr.className = "row";
          new_tr.innerHTML = 
          '<td>'+'</td><td><input class="finput1" type="text" id="inputtag" autofocus></td>'+
          '<td><input type="text" class="finput2"></td>'+
          '<td><input type="text" class="finput3"></td>'+
          '<td><input type="text" class="finput4"></td>';

          document.querySelector(".table-inputs").append(new_tr);

          let date = ((((new Date().getHours() >= 10)?"":"0")+(new Date()).getHours())) + ":"+ (((new Date()).getMinutes() >= 10)?"":"0")+new Date().getMinutes();

          rowList[len].children[0].innerHTML = '<input class="no" value="'+date+'">'

        }
      }
    }
  }
  else{
    finput4_s[len].value="";
    finput4_s[len].setAttribute("placeholder","숫자만 넣어주세요.");
  }
}


//angleFunc
let angleFunc = function(azimuth){
  return 90 - (45/800) * (azimuth*10);
}

//radianFunc
let radianFunc = function(angle){
  return (Math.PI/180) * angle;
}

// widthFunc
let widthFunc = function(azimuth, distance){
  return distance * Math.cos(radianFunc(angleFunc(azimuth)));
}

//heightFunc
let heightFunc = function(azimuth, distance){
  return distance * Math.sin(radianFunc(angleFunc(azimuth)));
}

//relationAngleFunc
let relationAngleFunc = function(x1, y1, x2, y2){
  let y = -1*(y2-y1);
  let x = x2 - x1;

  if(y>=0){
    return (180 * Math.atan2(y,x)/Math.PI);
  }
  else{
    return 360 + ((180*Math.atan2(y,x))/Math.PI);
  }
}

//returnAngleToAzimuth
let returnAngleToAzimuth = function(angle){
  if(angle==0){
    angle = 360;
  }

  if(angle>360){
    angle = angle%360;
  }

  if(90<=angle && angle<360){
    return 80 - (16/90)*angle;
  }

  else{
    if(angle == 360){
      angle = 0;
    }
    return 16 - (16/90)*angle;
  }
}

//relation_current_after_azimuth
let relation_current_after_azimuth = function(current_azimuth,after_azimuth){
  if(current_azimuth==0){
    current_azimuth = 64;
  }
  low_range = (current_azimuth - 16)%64;
  high_range = (current_azimuth + 16)%64;

  if(high_range<low_range){
    if( ((low_range<=after_azimuth) && (after_azimuth<=64)) || ((0<=after_azimuth) && (after_azimuth<=high_range))  ){
      return true;
    }
    else{
      return false;
    }
  }
  else{
    if( ((low_range<=after_azimuth) && (after_azimuth<=high_range)) ){
      return true;
    }
    else{
      return false;
    }
  }
}
let circle = document.querySelector(".circle");
let circle_width = (circle.width/2) - 10 // 327
let circle_height = (circle.height/2) - 10
let proportion = ((circle.height-((circle_height/115)*10))/16)/5 //6.4;

//markFunc

let markFunc = function(index){
  let finput1_s = document.getElementsByClassName("finput1");
  let finput2_s = document.getElementsByClassName("finput2");
  let finput3_s = document.getElementsByClassName("finput3");
  let finput4_s = document.getElementsByClassName("finput4");

  let azimuth = finput1_s[index].value;
  let distance = finput2_s[index].value;
  let speed = finput3_s[index].value;
  let direction = finput4_s[index].value;

  let true1 = (!(isNaN(azimuth)) && azimuth != "");
  let true2 = (!(isNaN(distance)) && distance != "");
  let true3 = (!(isNaN(speed)) && speed != "");
  let true4 = (!(isNaN(direction)) && direction != "");

  if(true1 && true2 && true3 && true4){
    let width = widthFunc(azimuth, distance);
    let height = heightFunc(azimuth, distance);
    let mark_width = width * proportion;
    let mark_height = height * proportion;

    let new_div = document.createElement("div");
    let mark = 
    '<div class="mark" style="position:absolute;'+'top:'+(circle_height-mark_height)+'px;'+'left:'+(circle_width+mark_width)+'px;">'+
    '<img src="./images/mark.png" width="20px" height="auto"'+'style="transform:rotate('+((parseFloat(direction)/64)*360 - 90)+'deg);"'+'></img></div>'

    new_div.innerHTML = mark;

    document.querySelector(".mark-circle").append(new_div);
  }
}

let p_move = 0;
let top_move = 40;
let text_x_move = 0;

let lineFunc = function(mark_index1, mark_index2, color, count){
  let markList = document.getElementsByClassName("mark");

  try{
    let mark1_x = parseFloat(markList[mark_index1].style.left.split("px")[0]);
    let mark1_y = parseFloat(markList[mark_index1].style.top.split("px")[0]);
    let mark2_x = parseFloat(markList[mark_index2].style.left.split("px")[0]);
    let mark2_y = parseFloat(markList[mark_index2].style.top.split("px")[0]);

    let xmin = Math.min(mark1_x, mark2_x);
    let xmax = Math.max(mark1_x, mark2_x);
    let ymin = Math.min(mark1_y, mark2_y);
    let ymax = Math.max(mark1_y, mark2_y);

    let top = ymax - 80;
    let left = xmin;
    let x1 = mark1_x - xmin + 10;
    let y1 = mark1_y - top + 10;
    let x2 = mark2_x - xmin + 10;
    let y2 = mark2_y - top + 10;

    if(x2==x1 || y2==y1){
      if(x2==x1 && y2==y1){
        p_move = 0;
      }
      else if(x2==x1){
        if(y2 > y1){
          p_move = 70;
          // top_move = -1*(100 - 10 - 10 - Math.abs(y2-y1));
        }
        else if(y2 < y1){
          p_move = 0;
          // top_move = 100 - 10 - 10 - Math.abs(y2-y1);
        }
      }
      else if(y2==y1){
        if(x2 > x1){
          p_move = 0; //100 - 10 - 10 - Math.abs(x2-x1); 
          top_move = 0; 
        }
        else if(x2 < x1){
          p_move = 0;
          top_move = 0;
        }
      }
    }
    else{
      if(x2>x1 && y2<y1){
        p_move = 0;
        top_move = -100+30;
      }
      else if(x2<x1 && y2<y1){
        p_move = 0;
        top_move = -100+30;
      }
      else if(x2<x1 && y2>y1){
        p_move = 200 - Math.abs(x2-x1) - 10 - 10;
        top_move = -100;
      }
      else if(x2>x1 && y2>y1){
        p_move = 200 - Math.abs(x2-x1) - 10 - 10;
        top_move = -100; 
      }
    }

    let arrow_line = arrow_lineF(x1,y1,x2,y2,color,mark_index2,mark_index1,count);
    let line = 
    '<div class="mark-line'+mark_index1+'" style="position:absolute;'+' top:'+(top+top_move)+'px;'+' left:'+(left-p_move)+'px;">'+
    '<svg width="200" height="200">'+
    '<line x1="'+(x1+p_move)+'"y1="'+(y1-top_move)+'" x2="'+(x2+p_move)+'" y2="'+(y2-top_move)+'"'+' stroke="'+color+'"'+
    ' stroke-width="1.5">'+
    '</line>'+
    arrow_line+
    '</svg>'+
    '</div>'

    console.log("라인:",line)

    let new_div = document.createElement("div");
    new_div.innerHTML = line;
    document.querySelector(".mark-circle").append(new_div);
    let mark_line_text = document.querySelector(".mark-line"+mark_index1).children[0].children[2];
    text_x_move = text_x_move * (mark_line_text.innerHTML.length) * (parseInt(mark_text_px/2));
    mark_line_text.setAttribute("x",parseFloat(mark_line_text.getAttribute("x"))+text_x_move);
  }
  catch(e){
    console.log("오류 발생!!")
    console.log(e);
  }
}

let line_select = 1;

arrow_lineF = function(x1,y1,x2,y2,color,mark_text_index,line_style_index,count){
  let result = Math.abs((y2-y1)/(x2-x1));

  //Math.abs(y2-y1)/Math.abs(x2-x1);
  let angle_check = 0;
  let angle = 0;

  for(let i=0; i<90; i++){
    let process = Math.abs(Math.tan(radianFunc(i))-result);

    if(process < Math.abs(angle_check - result)){
      angle = i;
      angle_check = Math.tan(radianFunc(i));
    }
  }

  let relation_x;
  let relation_y;
  let relation_angle;
  let x_r, y_r;
  let arrow_angle = 52;
  // let text_move = 0;
  text_x_move = 0;
  
  mark_text_size = document.querySelector(".mark-text-size").children[0];
  mark_text_px = parseInt(mark_text_size[mark_text_size.selectedIndex].text.split('px')[0]);
  mark_text_value = mark_text_size[mark_text_size.selectedIndex].value

  if(x2==x1 || y2==y1){
    let relation_angle = arrow_angle;
    let height = 10 * Math.cos(radianFunc(relation_angle));
    let width = 10 * Math.sin(radianFunc(relation_angle));


    if(x2==x1 && y2==y1){
      relation_x = x2;
      relation_y = y2;
    }
    else if(x2==x1){
      if(y2 > y1){
        relation_x = x2 - width;
        relation_y = y2 - height;

        text_move = 0;
        text_x_move = -1;
      }
      else if(y2 < y1){
        relation_x = x2 + width;
        relation_y = y2 + height;

        text_move = 10;
        text_x_move = 0;
      }
    }
    else if(y2==y1){
      if(x2 > x1){
        relation_x = x2 - width;
        relation_y = y2 + height;

        text_move = 10;
        text_x_move = -1; 
      }
      else if(x2 < x1){
        relation_x = x2 + width;
        relation_y = y2 - height;

        text_move = 0;
        text_x_move = 0; 
      }
    }
  }
  else{
    if(x2>x1 && y2<y1){
      relation_angle = 90 -(angle) -arrow_angle;
      
      x_r = 10 * Math.sin(radianFunc(relation_angle));
      y_r = 10 * Math.cos(radianFunc(relation_angle));

      relation_x = x2 - x_r;
      relation_y = y2 + y_r;

      text_move = 10;
      tet_x_move = 0;
    }
    else if(x2<x1 && y2<y1){
      relation_angle = 90 -(90-angle) -arrow_angle;
      
      x_r = 10 * Math.cos(radianFunc(relation_angle));
      y_r = 10 * Math.sin(radianFunc(relation_angle));

      relation_x = x2 + x_r;
      relation_y = y2 + y_r;

      text_move = 0;
      tet_x_move = 0;
    }
    else if(x2<x1 && y2>y1){
      relation_angle = 90 -(angle) -arrow_angle;
      
      x_r = 10 * Math.sin(radianFunc(relation_angle));
      y_r = 10 * Math.cos(radianFunc(relation_angle));

      relation_x = x2 + x_r;
      relation_y = y2 - y_r;

      text_move = 0;
      tet_x_move = -1;
    }
    else if(x2>x1 && y2>y1){
      relation_angle = 90 -(90-angle) -arrow_angle;
      
      x_r = 10 * Math.cos(radianFunc(relation_angle));
      y_r = 10 * Math.sin(radianFunc(relation_angle));

      relation_x = x2 - x_r;
      relation_y = y2 - y_r;

      text_move = 0;
      tet_x_move = -1;
    }
  }

  console.log("relation_x_1:",relation_x);

  if(line_select){
    if(count%2 == 1){
      let width = (x2 - x1);
      let height = (y2 - y1);

      let c1 = ( (width/height)*relation_x +(height/width)*x1 +relation_y - y1 )/((height/width)+(width/height));
      let c2 =  -1*(width/height)*c1 + (width/height)*relation_x + relation_y;

      c1 = Math.abs(relation_x - c1);
      c2 = Math.abs(relation_y - c2);

      let temp_x;
      let temp_y;

      if(x2==x1 || y2==y1){
  
        if(x2==x1 && y2==y1){
          temp_x = x2;
          temp_y = y2;
        }
        else if(x2==x1){
          if(y2 > y1){
            temp_x = relation_x + 2*Math.abs(relation_x - 10);
            temp_y = relation_y;

            text_move = 10;
            text_x_move = 0;
          }
          else if(y2 < y1){
            temp_x = relation_x - 2*Math.abs(relation_x - 10);
            temp_y = relation_y;

            text_move = 10;
            text_x_move = -1;
          }
        }
        else if(y2==y1){
          if(x2 > x1){
            temp_x = relation_x;
            temp_y = relation_y - 2*Math.abs(relation_y - 90);

            text_move = 0;
            text_x_move = -1;
          }
          else if(x2 < x1){
            temp_x = relation_x;
            temp_y = relation_y + 2*Math.abs(relation_y - 90);

            text_move = 10;
            text_x_move = 0;
          }
        }
      }
      else{
        if(x2>x1 && y2<y1){
          temp_x = relation_x - 2*c1;
          temp_y = relation_y - 2*c1;

          text_move = 10;
          text_x_move = -1;
        }
        else if(x2<x1 && y2<y1){
          temp_x = relation_x - 2*c1;
          temp_y = relation_y + 2*c1;

          text_move = 10;
          text_x_move = -1;
        }
        else if(x2<x1 && y2>y1){
          temp_x = relation_x + 2*c1;
          temp_y = relation_y + 2*c1;

          text_move = 0;
          text_x_move = 0;
        }
        else if(x2>x1 && y2>y1){
          temp_x = relation_x + 2*c1;
          temp_y = relation_y - 2*c1;

          text_move = 0;
          text_x_move = 0;
        }
      }

      relation_x = temp_x;
      relation_y = temp_y;

      if(!(y2==y1)){
        if(p_move>0){
          p_move = 0;
        }
        else{
          p_move = 200 - Math.abs(x2-x1)-10-10;
        }
      }
    }

  }

  let mark_text_line = mark_text_type.children[mark_text_type.selectedIndex].value;

  if(mark_text_line == "no"){
    mark_text_line = mark_text[mark_text_index].value;
  }
  else if(mark_text_line == "speed"){
    mark_text_line = (mark_text[mark_text_index].value*10) + "m/s";
  }
  else{
    mark_text_line = (mark_text[mark_text_index].value*100) + "mil"
  }

  console.log("x의 값:",relation_x, "p_move:",p_move)

  let arrow_line = 
  '<line x1="'+(x2+p_move)+'" y1="'+(y2-top_move)+'" x2="'+(relation_x+p_move)+'" y2="'+(relation_y-top_move)+'"'+' stroke="'+color+'"'+
  ' stroke-width="1.5">'+
  '</line>'+
  '<text x="'+(relation_x+p_move)+'" y="'+(relation_y - top_move + text_move)+'" style= "fill:'+color+
  '"; font-size="'+mark_text_px+'" font-fmaily="cursive">'+(mark_text_line)+'</text>'

  return arrow_line;
}

let azimuthAngleFunc = function(angle){
  angle = angle%64;

  let azimuth_angle;
  let relation;

  if((angle>=0) && (angle<=16)){
    azimuth_angle = (16-angle)*45/8;
  }
  else if((angle>16) && (angle<=48)){
    azimuth_angle = 360 - (angle-16)*45/8;
  }
  else{
    azimuth_angle = 180 - (angle-48)*45/8;
  }

  return azimuth_angle; // (relation <=180) ? relation:360-relation;
}

let marks_array;
drawLine = function(){
  let mark_circle = document.querySelector(".mark-circle");
  let line_colors = [line1_color.style.color, line2_color.style.color, line3_color.style.color, line4_color.style.color];
  mark_circle.innerHTML = "";

  let finput1_s = document.getElementsByClassName("finput1");
  let finput2_s = document.getElementsByClassName("finput2");
  let finput3_s = document.getElementsByClassName("finput3");
  let finput4_s = document.getElementsByClassName("finput4");
  let len = finput1_s.length;

  let marks = document.getElementsByClassName("mark");
  for(let i=0; i<len; i++){
    markFunc(i);
    try{
      marks[i].parentElement.className = "mark"+i;
    }
    catch(e){
      console.log(e);
    }
  }
  let count_array = new Array();


  for(let i=0; i<marks.length; i++){
    count_array[i] = i;
  }

  let top_temp = 0;
  let bottom_temp = 0;

  let left_temp = 0;
  let right_temp = 0;
  fcr_circle.style.overflow = "";
  try{
    for (let i=0; i<len; i++){
      if(parseFloat(marks[i].style.top.slice(-1*marks[i].length, -2)) < top_temp){
        top_temp = parseFloat(marks[i].style.top.slice(-1*marks[i].length, -2));
        fcr_circle.style.overflow = "scroll";
      }

      if( parseFloat(marks[i].style.top.slice(-1*marks[i].length, -2)-circle.height) > bottom_temp ){
        //bottom_temp = parseFloat(marks[i].style.top.slice(-1*marks[i].lengh, -2)-circle.height);
        fcr_circle.style.overflow = "scroll";
      }

      if(-1*marks[i].style.left.slice(-1*marks[i].length,-2) - (fcr_circle.children[0].offsetWidth-(circle.width))/2 > left_temp){
        left_temp = -1*marks[i].style.left.slice(-1*marks[i].length, -2) - (fcr_circle.children[0].offsetWidth-(circle.width))/2
        fcr_circle.style.overflow = "scroll";
      }

      if(marks[i].style.left.slice(-1*marks[i].length,-2)-circle.width > right_temp){
        //right_temp = parseFloat(marks[i].style.left.slice(-1*marks[i].lengh, -2)-circle.width);
        fcr_circle.style.overflow = "scroll";
      }
    }
  }
  catch(e){
    console.log(e);
  }

  for(let i=0; i<len; i++){
      try{
        marks[i].parentElement.className = "mark"+i;
      }
      catch(e){
        console.log(e);
      }
  }

  let marks_array = new Array();

  for(let i=0; i<count_array.length-1;){
    let temp = i;
    let mark_array = new Array();
    mark_array.push(count_array[temp]);


    let temp_relationAngle = 0;

    for(let j=temp+1; j<count_array.length; j++){
      let azimuth_check = Math.abs(finput1_s[count_array[temp]].value-finput1_s[count_array[j]].value);
      let distance_check = Math.abs(finput2_s[count_array[temp]].value-finput2_s[count_array[j]].value);
      let angle_check = Math.abs(azimuthAngleFunc(finput4_s[count_array[temp]].value)-azimuthAngleFunc(finput4_s[count_array[j]].value));
      angle_check = (angle_check <= 180) ? angle_check : 360 - angle_check;

      let mark1_x = parseFloat(marks[count_array[temp]].style.left.split("px")[0]);
      let mark1_y = parseFloat(marks[count_array[temp]].style.top.split("px")[0]);
      let mark2_x = parseFloat(marks[count_array[j]].style.left.split("px")[0]);
      let mark2_y = parseFloat(marks[count_array[j]].style.top.split("px")[0]);

      let xmin = Math.min(mark1_x, mark2_x);
      let xmax = Math.max(mark1_x, mark2_x);
      let ymin = Math.min(mark1_y, mark2_y);
      let ymax = Math.max(mark1_y, mark2_y);

      let top = ymax - 80;
      let left = xmin;
      let x1 = mark1_x - xmin + 10;
      let y1 = mark1_y - top + 10;
      let x2 = mark2_x - xmin + 10;
      let y2 = mark2_y - top + 10;

      distance_check = Math.sqrt((x2-x1)**2 + (y2-y1)**2)/(circle_height/8/5);
      let relationAngle = relationAngleFunc(x1,y1,x2,y2);
      let angle = parseFloat(finput4_s[count_array[temp]].value);
      let azimuth_angle = azimuthAngleFunc(angle);

      let relation = Math.abs(relationAngle - azimuth_angle);
      relation = (relation <= 180) ? relation : 360 - relation;

      let temp_relation = Math.abs(relationAngle - temp_relationAngle);
      temp_relation = (temp_relation <= 180) ? temp_relation : 360 - temp_relation;

      if( (distance_check<finput3_s[count_array[temp]].value*10*60/1000 +3) && (angle_check<=20 || (temp_relation<=20)) && (relation<45 || (temp_relation<=20)) ){
        /*
        console.log("========================");
        
        if(count_array[j]-count_array[temp] == flight_number){
          delete count_array[temp];
          temp_relationAngle = relationAngle;
          temp = j;
        }
        else{
          let mark_gap = count_array[j] - count_array[temp];
          let rival_temp = Math.max(0, j - mark_gap);
          let distance_check = Math.abs(finput2_s[count_array[rival_temp]].value - finput2_s[count_array[j].value]);
          let angle_check = Math.abs(azimuthAngleFunc(finput4_s[count_array[rival_temp]].value)-azimuthAngleFunc(finput4_s[count_array[j]].value));
          angle_check = (angle_check <= 180) ? angle_check : 360 - angle_check;

          // j-mark_gap ~ j
          let mark1_x = parseFloat(marks[count_array[rival_temp]].style.left.split("px")[0]);
          let mark1_y = parseFloat(marks[count_array[rival_temp]].style.top.split("px")[0]);
          let mark2_x = parseFloat(marks[count_array[j]].style.left.split("px")[0]);
          let mark2_y = parseFloat(marks[count_array[j]].style.top.split("px")[0]);

          let xmin = Math.min(mark1_x, mark2_x);
          let xmax = Math.max(mark1_x, mark2_x);
          let ymin = Math.min(mark1_y, mark2_y);
          let ymax = Math.max(mark1_y, mark2_y);

          let top = ymax - 80;
          let left = xmin;
          let x1 = mark1_x - xmin + 10;
          let y1 = mark1_y - top + 10;
          let x2 = mark2_x - xmin + 10;
          let y2 = mark2_y - top + 10;

          distance_check = Math.sqrt((x2-x1)**2 + (y2-y1)**2)/(circle_height/8/5);
          let relationAngle = relationAngleFunc(x1,y1,x2,y2);

          //j-2*mark_gap - j-mark_gap
          let rival_temp_2x_gap = Math.max(0,j-2*mark_gap);
          
          mark1_x = parseFloat(marks[count_array[rival_temp_2x_gap]].style.left.split("px")[0]);
          mark1_y = parseFloat(marks[count_array[rival_temp_2x_gap]].style.top.split("px")[0]);
          mark2_x = parseFloat(marks[count_array[rival_temp]].style.left.split("px")[0]);
          mark2_y = parseFloat(marks[count_array[rival_temp]].style.top.split("px")[0]);

          xmin = Math.min(mark1_x, mark2_x);
          xmax = Math.max(mark1_x, mark2_x);
          ymin = Math.min(mark1_y, mark2_y);
          ymax = Math.max(mark1_y, mark2_y);

          top = ymax - 80;
          left = xmin;
          x1 = mark1_x - xmin + 10;
          y1 = mark1_y - top + 10;
          x2 = mark2_x - xmin + 10;
          y2 = mark2_y - top + 10;

          let temp_distance_check = Math.sqrt((x2-x1)**2 + (y2-y1)**2)/(circle_height/8/5);

          let rival_temp_relationAngle = relationAngleFunc(x1,y1,x2,y2);
          let angle = parseFloat(finput4_s[count_array[rival_temp]].value);
          let azimuth_angle = azimuthAngleFunc(angle);

          let relation = Math.abs(relationAngle - azimuth_angle);
          relation = (relation <= 180) ? relation : 360 - relation;

          let temp_relation = Math.abs(relationAngle - rival_temp_relationAngle);
          temp_relation = (temp_relation <= 180) ? temp_relation : 360 - temp_relation;

          let rival_true1 = ((distance_check<finput3_s[count_array[rival_temp]].value*10*60/1000 +3) && (angle_check<=20 || (temp_relation<=20)) && (relation<45 || (temp_relation<=20)));
          let rival_true2 = ((temp_distance_check<finput3_s[count_array[rival_temp_2x_gap]].value*10*60/1000 +3));

          if(!(rival_true1 && rival_true2)){
            delete count_array[temp];
            mark_array.push(count_array[j]);
            temp_relationAngle = relationAngle;
            temp = j;
          }
        }
        console.log("========================");
        */

        delete count_array[temp];
        mark_array.push(count_array[j]);
        temp_relationAngle = relationAngle;
        temp = j;
      }
      else{
        if((count_array[j]-count_array[temp] == flight_number) && (distance_check<finput3_s[count_array[temp]].value*10*60/1000 + 3)){
          delete count_array[temp];
          mark_array.push(count_array[j]);
          temp_relationAngle = relationAngle;
          temp = j;
        } 
      }
    }
    delete count_array[temp];
    count_array = count_array.flat();
    marks_array.push(mark_array);
  }
  console.log("marks_array:",marks_array);
  console.log("count_array:",count_array);
  console.log("눈치 시작")
  try {
    if(line_filter == 0){
      for(let i=0; i<marks_array.length; i++){
        console.log("mark_arry"+i+":",marks_array[i])
        for(let j=0; j<marks_array[i].length; j++){
          console.log(j+"번째:",j);
          lineFunc(marks_array[i][j],marks_array[i][j+1],line_colors[i%4],j);
        }
      }
    }
    else{
      for(let i=0; i<marks_array.length; i++){
        let temp = marks_array[i][0];
        let line_count = 0;
        for(let j=0; j<marks_array[i].length-1;j++){
          let d1 = finput2_s[temp].value;
          let d2 = finput2_s[marks_array[i][j+1]].value;
  
          if(Math.abs(d1-d2) >= line_filter || j==marks_array[i].length-2){
            lineFunc(temp,marks_array[i][j+1],line_colors[i%4],line_count);
            temp = marks_array[i][j+1];
            line_count += 1;
          }
        }
      }
    }
    
  } catch (e) {
    console.log("버그 발생");
    console.log(e)
  }

  console.log("남은 marks_array:",marks_array)

  for(let i=0; i<marks_array.length; i++){
    for(let j=1; j<marks_array[i].length; j++){
      try{
        let remove_mark = document.querySelector(".mark"+marks_array[i][j]);
        remove_mark.remove();
      }
      catch(e){
        console.log(e);
      }
    }
  }

  fcr_circle.style.paddingTop = (-1*top_temp) + "px";
  fcr_circle.style.paddingBottom = bottom_temp + "px";
  fcr_circle.style.paddingLeft = (left_temp) + "px";
  fcr_circle.style.paddingRight = right_temp + "px";
}

let restartFunc = function(){
  let marks = document.getElementsByClassName("mark");
  let before_circle_width = circle_width;
  let before_circle_height = circle_height;
  let before_proportion = proportion;

  circle_width = (circle.width/2) - 10;
  circle_height = (circle.height/2) - 10;
  proportion = ((circle.height-((circle_height/115)*10))/16)/5 // 6.4;

  for(let i=0; i<marks.length; i++){
    let mark_width = ((marks[i].style.left.split("px")[0] - before_circle_width)/before_proportion)*proportion;
    let mark_height = ((marks[i].style.top.split("px")[0] - before_circle_height)/before_proportion)*proportion;

    marks[i].style.left = (circle_width+mark_width).toString()+"px";
    marks[i].style.top = (circle_height+mark_height).toString()+"px";
  }

  drawLine();

  let position_state = table_position.children[table_position.selectedIndex].value;

  if(position_state == "side"){
    fcr_table.style.height = fcr_circle.offsetWidth;
  }
}


window.onresize = function(){
  restartFunc();
}

window.onkeydown = function(){
  if(event.ctrlKey && event.altKey && (event.key == "q" || event.key=="Q")){
    let fcr_setting = document.querySelector(".fcr-setting");
    
    if(fcr_setting.style.display == "none"){
      fcr_setting.style.display = "";
    }
    else{
      fcr_setting.style.display = "none";
    }
  }
}

let table_check = document.querySelector(".table-check");
table_check.checked = true;

table_check.onclick = function(){
  let table = document.querySelector(".table");
  if(!table_check.checked){
    table.style.display = "none";
  }
  else{
    table.style.display = "";
  }
}

let line1_color = document.querySelector(".line1-color").children[0];
let line2_color = document.querySelector(".line2-color").children[0];
let line3_color = document.querySelector(".line3-color").children[0];
let line4_color = document.querySelector(".line4-color").children[0];

line2_color.selectedIndex = 1;
line3_color.selectedIndex = 2;
line4_color.selectedIndex = 5;

console.log("line1_color:",line1_color.style.color)

line1_color.style.color = line1_color.children[0].value;
line2_color.style.color = line2_color.children[1].value;
line3_color.style.color = line3_color.children[2].value;
line4_color.style.color = line4_color.children[5].value;

console.log("line1_color_select",line1_color.children[0].value);
console.log("line1_color:",line1_color.style.color)

line1_color.onchange = function(){
  line1_color.style.color = line1_color.children[line1_color.selectedIndex].value;
  restartFunc();
}

line2_color.onchange = function(){
  line2_color.style.color = line2_color.children[line2_color.selectedIndex].value;
  restartFunc();
}

line3_color.onchange = function(){
  line3_color.style.color = line3_color.children[line3_color.selectedIndex].value;
  restartFunc();
}

line4_color.onchange = function(){
  line4_color.style.color = line4_color.children[line4_color.selectedIndex].value;
  restartFunc();
}

let mark_text_type = document.querySelector(".mark-text-type").children[0];

mark_text_type.onchange = function(){
  mark_text_type_value = mark_text_type[mark_text_type.selectedIndex].value;

  if(mark_text_type_value == "no"){
    mark_text = no_list;
  }
  if(mark_text_type_value == "speed"){
    mark_text = speed_list;
  }
  if(mark_text_type_value == "direction"){
    mark_text = direction_list;
  }
  restartFunc();
}

let azimuth_size = document.querySelector(".azimuth-size").children[0];
azimuth_size.onchange = function(){
  circle.parentElement.style.width = azimuth_size.children[azimuth_size.selectedIndex].value;
  restartFunc();
}

let mark_text_size = document.querySelector(".mark-text-size").children[0];
let mark_text_px = parseInt(mark_text_size[mark_text_size.selectedIndex].text.split('px')[0]);
let mark_text_value = mark_text_size[mark_text_size.selectedIndex].value;

mark_text_size.onchange = function(){
  restartFunc();
}

let display_format = document.querySelector(".display-format").children[0];
display_format.onchange = function(){
  let select = display_format.children[display_format.selectedIndex].value;
  if(select == "display"){
    circle.src = "./images/circle.png";
    circle.parentElement.style.width = azimuth_size.children[azimuth_size.selectedIndex].value;
  }
  if(select == "pdf"){
    circle.src = "./images/circle_pdf.png";
    circle.parentElement.style.width = "";
  }
  restartFunc();
}

let table_position = document.querySelector(".table-position").children[0];
let fcr_circle = document.querySelector(".fcr-circle");
let fcr_table = document.querySelector(".fcr-table");
let styled_table = document.querySelector(".styled-table");
let container = document.querySelector(".container");

table_position.onchange = function(){
  let position_state = table_position.children[table_position.selectedIndex].value;
  if(position_state=="foot"){
    container.style.display = "block";
    fcr_circle.style.width = "";
    fcr_circle.style.border = "";
    fcr_circle.style.float  = "";
    fcr_table.style.overflow = "";
    styled_table.style.marginTop = "25px";
    fcr_table.style.height = "";
  }
  if(position_state == "side"){
    container.style.display = "contents";
    fcr_circle.style.width = "80%";
    fcr_circle.style.border = "2px solid";
    fcr_circle.style.float = "left";
    fcr_table.style.overflow = "scroll";
    styled_table.style.marginTop = "0px";
  }

  restartFunc();
}

let mark_line_format = document.querySelector(".mark-line-format").children[0];

mark_line_format.selectedIndex = 1;

mark_line_format.onchange = function(){
  if(mark_line_format.selectedIndex == 0){
    line_select = 0;
  }
  else{
    line_select = 1;
  }
  restartFunc();
}

let flight_number_select = document.querySelector(".flight-number").children[0];
console.log("filght_number:",flight_number);
flight_number_select.selectedIndex = flight_number - 1;
flight_number_select.onchange = function(){
  flight_number = parseInt(flight_number_select.children[flight_number_select.selectedIndex].value);
  restartFunc();
}

let line_filter_select = document.querySelector(".line-filter").children[0];
let line_filter = line_filter_select.children[line_filter_select.selectedIndex].value;

line_filter_select.onchange = function(){
  line_filter = line_filter_select.children[line_filter_select.selectedIndex].value;

  line_filter = parseInt(line_filter);

  restartFunc();
}

let returnTwoMarkPostionFunc = function(marks,first_index, last_index){
  mark1_x = parseFloat(marks[first_index].style.left.split("px")[0]);
  mark1_y = parseFloat(marks[first_index].style.top.split("px")[0]);
  mark2_x = parseFloat(marks[last_index].style.left.split("px")[0]);
  mark2_y = parseFloat(marks[last_index].style.top.split("px")[0]);

  xmin = Math.min(mark1_x, mark2_x);
  xmax = Math.max(mark1_x, mark2_x);
  ymin = Math.min(mark1_y, mark2_y);
  ymax = Math.max(mark1_y, mark2_y);

  top = ymax - 80;
  left = xmin;
  x1 = mark1_x - xmin + 10;
  y1 = mark1_y - top + 10;
  x2 = mark2_x - xmin + 10;
  y2 = mark2_y - top + 10;

  return (x1,y1,x2,y2);
}