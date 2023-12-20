const pic1 = document.querySelector(".pic1")
const pic2 = document.querySelector(".pic2")
const pic3 = document.querySelector(".pic3")
const pic4 = document.querySelector(".pic4")
const pic5 = document.querySelector(".pic5")
const pic6 = document.querySelector(".pic6")

const presents = [
    "https://i5.walmartimages.com/asr/deddb1d2-3208-4d6a-8406-fb25ef88afbc.435794861a07321f42a94362a9aa88d5.jpeg",
    "https://th.bing.com/th?id=OPHS.Zza8iyhYJKdH7Q474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
    "https://th.bing.com/th?id=OPHS.y8MBBJWBMArB6A474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
    "https://m.media-amazon.com/images/I/41YXFkJ6M9L._AC_.jpg",
    "https://th.bing.com/th?id=OPHS.FFtAh7EIoLDpgw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
    "https://m.media-amazon.com/images/I/61sItgQA9BL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
]

function present(num){
  if(num == 0){
    pic1.src = presents[0];
  }
 else if(num == 1){
    pic2.src = presents[1];
  }
 else if(num == 2){
    pic3.src = presents[2];
  }
  else if(num == 3){
    pic4.src = presents[3];
  }
  else if(num == 4){
    pic5.src = presents[4];
  }
   else if(num == 5){
        pic6.src = presents[5];
      }
      
}