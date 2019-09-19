async function main() {
    // var data = new BusinessLayer();
    // data.resolveApiData();
    var presentation = new Presentation();
    presentation.displayHeader();
    await presentation.displayApi();
    }

    
    main();
    