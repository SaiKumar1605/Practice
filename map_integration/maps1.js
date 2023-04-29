function initMap() {

    const myLatlng = {
      lat: 17.3850,
      lng: 78.4867
    };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: myLatlng,
    });
  
  
    // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow({
      content: "Click the map to get Lat/Lng!",
      position: myLatlng,
    });
  
    infoWindow.open(map);
    // Configure the click listener.
    map.addListener("click", (mapsMouseEvent) => {
      // Close the current InfoWindow.
      infoWindow.close();
      // Create a new InfoWindow.
      infoWindow = new google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,
      });
      document.getElementById('rlat').value = mapsMouseEvent.latLng.lat();
      document.getElementById('rlng').value = mapsMouseEvent.latLng.lng();
      infoWindow.setContent(
        JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
      );
      infoWindow.open(map);
    });

    const map2 = new google.maps.Map(document.getElementById("map2"), {
      zoom: 10,
      center: myLatlng,
    });
      
    infoWindow.open(map2);
    // Configure the click listener.
    map2.addListener("click", (mapsMouseEvent) => {
      // Close the current InfoWindow.
      infoWindow.close();
      // Create a new InfoWindow.
      infoWindow = new google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,
      });
      document.getElementById('dlat').value = mapsMouseEvent.latLng.lat();
      document.getElementById('dlng').value = mapsMouseEvent.latLng.lng();
      infoWindow.setContent(
        JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
      );
      infoWindow.open(map2);
    });

    

    

    


  }


  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    



  }
  
  function myFunctiond() {
    var x = document.getElementById("myDIVd");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  

  
  // function initMap() {
  //   const myLatlng = {
  //     lat: 17.3850,
  //     lng: 78.4867
  //   };
  //   const map = new google.maps.Map(document.getElementById("map"), {
  //     zoom: 10,
  //     center: myLatlng,
  //   });
  
  
  //   // Create the initial InfoWindow.
  //   let infoWindow = new google.maps.InfoWindow({
  //     content: "Click the map to get Lat/Lng!",
  //     position: myLatlng,
  //   });
  
  //   infoWindow.open(map);
  //   // Configure the click listener.
  //   map.addListener("click", (mapsMouseEvent) => {
  //     // Close the current InfoWindow.
  //     infoWindow.close();
  //     // Create a new InfoWindow.
  //     infoWindow = new google.maps.InfoWindow({
  //       position: mapsMouseEvent.latLng,
  //     });
  //     document.getElementById('dlat').value = mapsMouseEvent.latLng.lat();
  //     document.getElementById('dlng').value = mapsMouseEvent.latLng.lng();
  //     infoWindow.setContent(
  //       JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
  //     );
  //     infoWindow.open(map);
  //   });
  // }

  // function pitre() {
  //   var x = document.getElementById("map");
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // }

