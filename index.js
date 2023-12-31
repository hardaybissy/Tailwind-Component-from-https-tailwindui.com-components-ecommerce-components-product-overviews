let imagesDiv = document.getElementById("imagesDiv")
let firstBagFrame = document.getElementById("firstBag")
let secondBagFrame = document.getElementById("secondBag")
let thirdBagFrame = document.getElementById("thirdBag")
let fourthBagFrame = document.getElementById("fourthBag")
let firstTopBag = document.getElementById("firstTopBag")
let secondTopBag = document.getElementById("secondTopBag")
let thirdTopBag = document.getElementById("thirdTopBag")
let fourthTopBag = document.getElementById("fourthTopBag")
let blueButton = document.getElementById("blueButton")
let myButton = document.getElementById("myButton")
let firstEllipse = document.getElementById("firstEllipse")
let secondEllipse = document.getElementById("secondEllipse")
let thirdEllipse = document.getElementById("thirdEllipse")
let firstHiddenBottomBag = document.getElementById("firstHiddenBottomBag")
let secondHiddenBottomBag = document.getElementById("secondHiddenBottomBag")
let thirdHiddenBottomBag = document.getElementById("thirdHiddenBottomBag")
let fourthHiddenBottomBag = document.getElementById("fourthHiddenBottomBag")
let featuresTitleIcon = document.getElementById("featuresTitleIcon")
let featuresCollapsible = document.getElementById("featuresCollapsible")
let featuresMinusIconDiv = document.getElementById("featuresMinusIconDiv")
let featureListedParagraphDiv = document.getElementById("featureListedParagraphDiv")
let featuresPlusIconDiv = document.getElementById("featuresPlusIconDiv")
let featuresDiv = document.getElementById("featuresDiv")
let blueFeature = document.getElementById("blueFeature")
let features = document.getElementById("features")


featuresTitleIcon.addEventListener('click', function handleFeatureTitleIcon(){
    
    featureListedParagraphDiv.classList.toggle("feature-listed-paragraph-reveal-div")
    features.style.display = "none"
    blueFeature.style.display = "block"
    featuresPlusIconDiv.style.display = "none"
    featuresMinusIconDiv.style.display = "block"
 
})

featureListedParagraphDiv.addEventListener('transitioned', () =>{
    // if(featureListedParagraphDiv.classList.contains("feature-listed-paragraph-reveal-div")){
        blueFeature.style.display = "none"
        features.style.display = "block"
        featuresMinusIconDiv.style.display = "none"
        featuresPlusIconDiv.style.display = "block"
    // }else{
    //     blueFeature.style.display = "block"
    //     features.style.display = "none"
    //     featuresMinusIconDiv.style.display = "block"
    //     featuresPlusIconDiv.style.display = "none"
    // }
    
})

secondBagFrame.addEventListener("click", function showSecondBagFrame(){
    if(secondBagFrame.classList.contains("image2-div")){
        secondBagFrame.classList.remove("image2-div")
        secondBagFrame.classList.add("image2-blue-container-div")
        if(firstBagFrame.classList.contains("image1-with-frame-div")){
            firstBagFrame.classList.remove("image1-with-frame-div")
            firstBagFrame.classList.add("image1-with-onlyFrame-div")
        }else if(thirdBagFrame.classList.contains("image3-blue-container-div")){
            thirdBagFrame.classList.remove("image3-blue-container-div")
            thirdBagFrame.classList.add("image3-div")
        }else if(fourthBagFrame.classList.contains("image4-blue-container-div")){
            fourthBagFrame.classList.remove("image4-blue-container-div")
            fourthBagFrame.classList.add("image4-div")
        }
        
            
    }
    
    
    // let secondTopBagImageDiv = document.createElement("Div")
    // imagesDiv.append(secondTopBagImageDiv)
    // secondTopBagImageDiv.setAttribute("class", "top-bag2-img-div")
    // secondTopBagImageDiv.setAttribute("id", "secondTopBag")
    // let imageElement2 = document.createElement("img")
    // imageElement2.src = "./Images/secondbag2.svg"
    // imageElement2.alt = "Big bag"
    // secondTopBag.append(imageElement2)
    // firstTopBag.classList.remove("top-bag1-img-div")
    // firstTopBag.classList.add("top-bag2-img-div")
})

thirdBagFrame.addEventListener("click", function showThirdBagFrame(){
    if(thirdBagFrame.classList.contains("image3-div")){
        thirdBagFrame.classList.remove("image3-div")
        thirdBagFrame.classList.add("image3-blue-container-div")
        if(firstBagFrame.classList.contains("image1-with-frame-div")){
            firstBagFrame.classList.remove("image1-with-frame-div")
            firstBagFrame.classList.add("image1-with-onlyFrame-div")
        }else if(secondBagFrame.classList.contains("image2-blue-container-div")){
            secondBagFrame.classList.remove("image2-blue-container-div")
            secondBagFrame.classList.add("image2-div")
        }else if(fourthBagFrame.classList.contains("image4-blue-container-div")){
            fourthBagFrame.classList.remove("image4-blue-container-div")
            fourthBagFrame.classList.add("image4-div")
        }

           
    }
})

fourthBagFrame.addEventListener("click", function showFourthBagFrame(){
    if(fourthBagFrame.classList.contains("image4-div")){
        fourthBagFrame.classList.remove("image4-div")
        fourthBagFrame.classList.add("image4-blue-container-div")
        if(firstBagFrame.classList.contains("image1-with-frame-div")){
            firstBagFrame.classList.remove("image1-with-frame-div")
            firstBagFrame.classList.add("image1-with-onlyFrame-div")
        }else if(secondBagFrame.classList.contains("image2-blue-container-div")){
            secondBagFrame.classList.remove("image2-blue-container-div")
            secondBagFrame.classList.add("image2-div")
        }else if(thirdBagFrame.classList.contains("image3-blue-container-div")){
            thirdBagFrame.classList.remove("image3-blue-container-div")
            thirdBagFrame.classList.add("image3-div")
        }

           
    }
})

firstBagFrame.addEventListener("click", function showFirstBagFrame(){
    if(firstBagFrame.classList.contains("image1-with-onlyFrame-div")){
        firstBagFrame.classList.remove("image1-with-onlyFrame-div")
        firstBagFrame.classList.add("image1-with-frame-div")
        if(fourthBagFrame.classList.contains("image4-blue-container-div")){
            fourthBagFrame.classList.remove("image4-blue-container-div")
            fourthBagFrame.classList.add("image4-div")
        }else if(secondBagFrame.classList.contains("image2-blue-container-div")){
            secondBagFrame.classList.remove("image2-blue-container-div")
            secondBagFrame.classList.add("image2-div")
        }else if(thirdBagFrame.classList.contains("image3-blue-container-div")){
            thirdBagFrame.classList.remove("image3-blue-container-div")
            thirdBagFrame.classList.add("image3-div")
        }

           
    }
})

function handleClickInside(event){
    if(event.target === myButton || myButton.contains(event.target)){
        blueButton.style.border = "2px solid #4C2FFB"
        blueButton.style.borderRadius = "6.13px"
    }

}

function handleWindowMouseUp() {
    blueButton.style.border = ""; // Reset border styles
    blueButton.style.borderRadius = "";
    window.removeEventListener("mouseup", handleWindowMouseUp);
}

myButton.addEventListener("click", handleClickInside);

// Add the following line to register the mouseup event on the window
window.addEventListener("mouseup", handleWindowMouseUp);






function handleSecondEllipse(){
    if(secondEllipse.classList.contains("second-ellipse-div")){
        secondEllipse.classList.remove("second-ellipse-div")
        secondEllipse.classList.add("reveal-second-ellipse-div")
        if(firstEllipse.classList.contains("reveal-first-ellipse-div") || thirdEllipse.classList.contains("reveal-third-ellipse-div")){
            firstEllipse.classList.remove("reveal-first-ellipse-div")
            firstEllipse.classList.add("first-ellipse-div")
            thirdEllipse.classList.remove("reveal-third-ellipse-div")
            thirdEllipse.classList.add("third-ellipse-div")
        }
    }
}

secondEllipse.addEventListener("click", handleSecondEllipse)

function handleThirdEllipse(){
    if(thirdEllipse.classList.contains("third-ellipse-div")){
        thirdEllipse.classList.remove("third-ellipse-div")
        thirdEllipse.classList.add("reveal-third-ellipse-div")
        if(secondEllipse.classList.contains("reveal-second-ellipse-div") || firstEllipse.classList.contains("reveal-first-ellipse-div")){
            secondEllipse.classList.remove("reveal-second-ellipse-div")
            secondEllipse.classList.add("second-ellipse-div")
            firstEllipse.classList.remove("reveal-first-ellipse-div")
            firstEllipse.classList.add("first-ellipse-div")
        }
    }
}
thirdEllipse.addEventListener("click", handleThirdEllipse)

function handleFirstEllipse(){
    if(firstEllipse.classList.contains("first-ellipse-div")){
        firstEllipse.classList.remove("first-ellipse-div")
        firstEllipse.classList.add("reveal-first-ellipse-div")
        if(secondEllipse.classList.contains("reveal-second-ellipse-div") || thirdEllipse.classList.contains("reveal-third-ellipse-div")){
            secondEllipse.classList.remove("reveal-second-ellipse-div")
            secondEllipse.classList.add("second-ellipse-div")
            thirdEllipse.classList.remove("reveal-third-ellipse-div")
            thirdEllipse.classList.add("third-ellipse-div")
        }
    }
}

firstEllipse.addEventListener("click", handleFirstEllipse)

secondHiddenBottomBag.addEventListener("click", function showSecondHiddenBottomBagFrame(){
    if(secondHiddenBottomBag.classList.contains("image2-div")){
        secondHiddenBottomBag.classList.remove("image2-div")
        secondHiddenBottomBag.classList.add("image2-blue-container-div")
        if(firstHiddenBottomBag.classList.contains("image1-with-frame-div")){
            firstHiddenBottomBag.classList.remove("image1-with-frame-div")
            firstHiddenBottomBag.classList.add("image1-with-onlyFrame-div")
        }else if(thirdHiddenBottomBag.classList.contains("image3-blue-container-div")){
            thirdHiddenBottomBag.classList.remove("image3-blue-container-div")
            thirdHiddenBottomBag.classList.add("image3-div")
        }else if(fourthHiddenBottomBag.classList.contains("image4-blue-container-div")){
            fourthHiddenBottomBag.classList.remove("image4-blue-container-div")
            fourthHiddenBottomBag.classList.add("image4-div")
        }
    }   
  
}) 

thirdHiddenBottomBag.addEventListener("click", function showThirdHiddenBottomBagFrame(){
    if(thirdHiddenBottomBag.classList.contains("image3-div")){
        thirdHiddenBottomBag.classList.remove("image3-div")
        thirdHiddenBottomBag.classList.add("image3-blue-container-div")
        if(firstHiddenBottomBag.classList.contains("image1-with-frame-div")){
            firstHiddenBottomBag.classList.remove("image1-with-frame-div")
            firstHiddenBottomBag.classList.add("image1-with-onlyFrame-div")
        }else if(secondHiddenBottomBag.classList.contains("image2-blue-container-div")){
            secondHiddenBottomBag.classList.remove("image2-blue-container-div")
            secondHiddenBottomBag.classList.add("image2-div")
        }else if(fourthHiddenBottomBag.classList.contains("image4-blue-container-div")){
            fourthHiddenBottomBag.classList.remove("image4-blue-container-div")
            fourthHiddenBottomBag.classList.add("image4-div")
        }

           
    }
})

fourthHiddenBottomBag.addEventListener("click", function showFourthHiddenBottomBagFrame(){
    if(fourthHiddenBottomBag.classList.contains("image4-div")){
        fourthHiddenBottomBag.classList.remove("image4-div")
        fourthHiddenBottomBag.classList.add("image4-blue-container-div")
        if(firstHiddenBottomBag.classList.contains("image1-with-frame-div")){
            firstHiddenBottomBag.classList.remove("image1-with-frame-div")
            firstHiddenBottomBag.classList.add("image1-with-onlyFrame-div")
        }else if(secondHiddenBottomBag.classList.contains("image2-blue-container-div")){
            secondHiddenBottomBag.classList.remove("image2-blue-container-div")
            secondHiddenBottomBag.classList.add("image2-div")
        }else if( thirdHiddenBottomBag.classList.contains("image3-blue-container-div")){
            thirdHiddenBottomBag.classList.remove("image3-blue-container-div")
            thirdHiddenBottomBag.classList.add("image3-div")
        }

           
    }
})

firstHiddenBottomBag.addEventListener("click", function showFirstHiddenBottomBagFrame(){
    if(firstHiddenBottomBag.classList.contains("image1-with-onlyFrame-div")){
        firstHiddenBottomBag.classList.remove("image1-with-onlyFrame-div")
        firstHiddenBottomBag.classList.add("image1-with-frame-div")
        if(fourthHiddenBottomBag.classList.contains("image4-blue-container-div")){
            fourthHiddenBottomBag.classList.remove("image4-blue-container-div")
            fourthHiddenBottomBag.classList.add("image4-div")
        }else if(secondHiddenBottomBag.classList.contains("image2-blue-container-div")){
            secondHiddenBottomBag.classList.remove("image2-blue-container-div")
            secondHiddenBottomBag.classList.add("image2-div")
        }else if(thirdHiddenBottomBag.classList.contains("image3-blue-container-div")){
            thirdHiddenBottomBag.classList.remove("image3-blue-container-div")
            thirdHiddenBottomBag.classList.add("image3-div")
        }

           
    }
})

