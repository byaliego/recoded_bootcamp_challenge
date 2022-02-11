    let trypost = document.querySelector("#dataDisplay");
    document.querySelector("#searchBtn").addEventListener("click",search());
    let searchResult = document.querySelector("#searchResult");
    
    function search() {
      
    }


    fetch("data.json").then(
      response => response.json()
    ).then(responseJson => {
      trypost.innerHTML = responseJson.countries + "<br>" + responseJson.bootcamps;
    }
    )


    fetch("data.json").then(
      response => response.json()
    ).then(responseJson => {
      console.log(responseJson.camps);
      
         searchResult.innerHTML = responseJson.camps.asd;
      
      
    }
    )




