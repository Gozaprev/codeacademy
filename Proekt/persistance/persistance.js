function PeristanceLayer() {
    
  
    this.getApiData = () => {
      return new Promise((resolve, reject) => {
        // kreirame promise
        $.ajax({
          url:"https://api.geonet.org.nz/quake?MMI=3",
          //link do APIto
          type: "GET",
          success: function(data) {
              //console.log(data)
            //ako uspesno sme dobile response od APIto praime resolve na Promise
            resolve(data);
          },
          error: function(error) {
              console.log(error);
            reject(error);
          }
        });
      });
    };
}