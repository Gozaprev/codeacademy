function BusinessLayer() {
    this.dataObject = new DataLayer();

    this.resolveApiData = async () => {
        try{
            
            await this.dataObject.populateApiData();
        }
        catch(e){
            console.log(e)
        }
        var data = this.dataObject.getApiData();
        //console.log(data)

        var modifiedApi = [];

        for (let index = 0; index < data.features.length; index++) {
            var tempObject = {
                // za sekoj album gi zimame samo imeto i imageSrc, drugite info sto gi nudi APIto ne ni  se potrebni
                Mag: data.features[index].properties.magnitude,
                Depth: data.features[index].properties.depth,
                Time: data.features[index].properties.time,
                Locality: data.features[index].properties.locality,



            };
            modifiedApi.push(tempObject);
            // od \goce
            // return modifiedApi;

        }


        console.log(modifiedApi);
        return modifiedApi;
    }
}
