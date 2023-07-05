

    var prices_plus = document.getElementsByClassName("fas fa-plus-circle plus-btn")
    var prices_minus = document.getElementsByClassName("fas fa-minus-circle minus-btn")
    var prices = document.getElementsByClassName("unit-price")
    var count = document.getElementsByClassName("qute")
    var prix_tot = document.querySelector(".total-price")
    var card_remove = document.getElementsByClassName("card")
    var trash_btn = document.getElementsByClassName("fa-trash-alt")
        
    
    function total_price(){
        let sum = 0
        for (let i=0; i<prices_plus.length;i++){
            sum = sum + prices[i].innerText * count[i].innerText
        }
        prix_tot.innerText = sum
    }
   
    for (let i=0; i<=count.length-1; i++){
        prices_plus[i].addEventListener("click", function(){
            count[i].innerText++
            total_price()
        })
        
        
        prices_minus[i].addEventListener("click", function(){
            if (count[i].innerText > 0)
            count[i].innerText--
            if (prix_tot.innerText >0)
            prix_tot.innerText -= Number(prices[i].innerText)
            total_price()
        })
    }
    
    for (let j=0; j<=trash_btn.length-1; j++){
        trash_btn[j].addEventListener("click", function(){
            card_remove[j].remove()
            count[j].innerText=0
            total_price()
        })
    }
    var likes = document.getElementsByClassName("fas fa-heart")
    for (let i=0; i<= likes.length; i++){
        likes[i].addEventListener("click", function(){
            if (likes[i].style.color != "red")
            likes[i].style.color = "red"
            else {
                likes[i].style.color = "grey"
            }
        })
    }



