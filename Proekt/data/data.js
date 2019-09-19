function DataLayer() {
    this.ApiData = {};
        this.persistanceObject = new PeristanceLayer();
        
        this.populateApiData = async () => {
            this.ApiData = await this.persistanceObject.getApiData();
            //cekame persistance layerot da vrati rezultat i posle toj rezutltat go smestuvame vo property na Data layerot za da moze da se iskoristi taa data vo business layer
          };
        
          this.getApiData = () => {
            return this.ApiData;
          };
     
    }
    