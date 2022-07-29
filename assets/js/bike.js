let data={
    bike_type:[
    {
        name:"Road bike",
        image:"assets/img/products/slid-prod-2.png"
    },
    {
        name:"Mountain bike",
        image:"assets/img/products/slid-prod-1.png"
    },
    {
        name:"BMX bike",
        image:"assets/img/products/slid-prod-3.png"
    }],
    bike_items:[
        {
            name:"GT SENSOR COMP 27.5",
            image:"assets/img/products/prod-1.jpg"
        },
        {
            name:"BUTNITZ BICYCLE",
            image:"assets/img/products/prod-2.jpg"
        },
        {
            name:"BREEZER SQUALL 1.0",
            image:"assets/img/products/prod-3.jpg"
        },
        {
            name:"FUJIE TAHOE 1.5 27.5",
            image:"assets/img/products/prod-4.jpg"
        }]
    };

    console.log(data);

        sp=document.getElementsByClassName('testsp').innerHTML=data.bike_items[0].name;
        console.log(data.bike_items[0].name);

        let div = document.createElement("div");
       
        
       
       data.bike_items.forEach((values) => {
            console.log("for each",values.image)

            let row_1 = document.createElement("div");
        
            let anchor = document.createElement("a");
    
            let span_name = document.createElement("span");
            span_name.innerHTML = values.name;
            let span_image=document.createElement("img");
            span_image.src= values.image;
            console.log(values.image);
            row_1.appendChild(anchor);
            row_1.appendChild(span_name);
            row_1.appendChild(span_image)
            div.appendChild(row_1);
            
            // Adding the entire table to the body tag
             document.getElementById("body").appendChild(div);
       });
        
       
    