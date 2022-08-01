let data={
    bike_type:[
    {
        name:"Road bike",
        image:"assets/img/products/slid-prod-2.png",
        price:"$299.00"
    },
    {
        name:"Mountain bike",
        image:"assets/img/products/slid-prod-1.png",
        price:"$599.00"
    },
    {
        name:"BMX bike",
        image:"assets/img/products/slid-prod-3.png",
        price:"$399.00"
    },
    {
        name:"Road bike",
        image:"assets/img/products/slid-prod-2.png",
        price:"$299.00"
    },
    {
        name:"Mountain bike",
        image:"assets/img/products/slid-prod-1.png",
        price:"$599.00"
    },
    {
        name:"BMX bike",
        image:"assets/img/products/slid-prod-3.png",
        price:"$399.00"
    }],
    bike_items:[
        {
            name:"GT SENSOR COMP 27.5",
            image:"assets/img/products/prod-1.jpg",
            price:"$299.00"
        },
        {
            name:"BUTNITZ BICYCLE",
            image:"assets/img/products/prod-2.jpg",
            price:"$299.00"
        },
        {
            name:"BREEZER SQUALL 1.0",
            image:"assets/img/products/prod-3.jpg",
            price:"$299.00"
        },
        {
            name:"FUJIE TAHOE 1.5 27.5",
            image:"assets/img/products/prod-4.jpg",
            price:"$299.00"
        }],
        sp_of:[
            {
                name:"GT SENSOR COMP 27.5",
                image:"assets/img/products/cat-1.png",
                price:"$299.00"
            },
            {
                name:"BREEZER SQUALL 1.0",
                image:"assets/img/products/cat-2.png",
                price:"$299.00"
            },
            {
                name:"GT SENSOR COMP 27.5",
                image:"assets/img/products/cat-3.png",
                price:"$299.00"
            },
            {
                name:"BREEZER SQUALL 1.0",
                image:"assets/img/products/cat-4.png",
                price:"$299.00"
            },
            {
                name:"GT SENSOR COMP 27.5",
                image:"assets/img/products/cat-5.png",
                price:"$299.00"
            },
            {
                name:"GT SENSOR COMP 27.5",
                image:"assets/img/products/cat-6.png",
                price:"$299.00"
            }
            
        ]
    };

    console.log(data);

        // sp=document.getElementsByClassName('testsp').innerHTML=data.bike_items[0].name;
        // console.log(data.bike_items[0].name);

       
        
       
       data.bike_items.forEach((values) => {
            console.log("for each",values.image)
            let div = document.createElement("div");
            div.setAttribute("class","col-md-3 col-sm-6 col-xs-12 isotope-item tab-1 tab-3 tab-5");
            let divimg=document.createElement("div");
            divimg.setAttribute("class","portfolio_wrapper");
            
    
            div.appendChild(divimg);
            div.appendChild
           

            let row1 = document.createElement("div");
            row1.setAttribute("class","portfolio_thumb")
            let row2=document.createElement("div");
            row2.setAttribute("class","portfolio_content")
            let anchor = document.createElement("a");
            anchor.setAttribute("class","title-3 fsz-18")
            anchor.innerHTML=values.name;
            let par = document.createElement("p");
            par.setAttribute("class","font-2");
            par.innerHTML="starts from";
            let span_price=document.createElement("span");
            span_price.setAttribute("class","thm-clr");
            span_price.innerHTML = values.price;
            
            
            let span_image=document.createElement("img");
            span_image.src= values.image;
            console.log(values.image);
            
            row1.appendChild(span_image);
            row2.appendChild(anchor);
            row2.appendChild(par)
            par.appendChild(span_price);
            divimg.appendChild(row1);
            divimg.appendChild(row2);
            
            // Adding the entire table to the body tag
             document.getElementById("product-filter").appendChild(div);
            
       });
        
      data.bike_type.forEach((values)=>{
        console.log("types", values)
        let div=document.createElement("div");
        div.setAttribute("Class","product");    
        let div_m=document.createElement("div");
        div_m.setAttribute("class","product-media");
        let div_c=document.createElement("div");
        div_c.setAttribute("class","product-content");

        let row1=document.createElement("img")
        let row2=document.createElement("a");
        row2.setAttribute("Class","title-2")
        row2.setAttribute("href","single-product.html")
        row1.src=values.image;
        row2.innerHTML=values.name;
        let para=document.createElement("p")
        para.setAttribute("class","font-2")
        para.innerHTML="starts from";
        let price=document.createElement("span");
        price.setAttribute("class","thm-clr");
        price.innerHTML=values.price;

        div.appendChild(div_m);
        div.appendChild(div_c);
        div_c.appendChild(row2);
        div_c.appendChild(para)
        para.appendChild(price)
        div_m.appendChild(row1);

        document.getElementById("jsonb_type").appendChild(div);
   });
    
   
   data.sp_of.forEach((values)=>{

        console.log("offers",values)

        let divCol=document.createElement("div");
        divCol.setAttribute("class","col-sm-6 col-lg-4");
        let divP=document.createElement("div");
        divP.setAttribute("Class","product");
        let divimg=document.createElement("div")
        divimg.setAttribute("class","image")
        let c1=document.createElement("img")
        c1.src=values.image;
        let divr=document.createElement("div")
        divr.setAttribute("class","right")
        let par=document.createElement("p")
        par.setAttribute("class","funky-font-2");
        par.innerHTML="Mountain Bike";
        let divNm=document.createElement("div")
        divNm.setAttribute("class","name")
        let anchor=document.createElement("a")
        anchor.setAttribute("href","#")
        anchor.innerHTML=values.name;
        let price=document.createElement("div")
        price.setAttribute("class","price font-2")
        price.innerHTML="Price:";
        let pn=document.createElement("span");
        pn.setAttribute("class","price-new")
        pn.innerHTML=values.price;
        let po=document.createElement("span");
        po.setAttribute("class","price-old");
        po.innerHTML="$599.00"

        
        divCol.appendChild(divP)
        divP.appendChild(divimg)
        divP.appendChild(divr)
        divr.appendChild(par)
        divr.appendChild(divNm)
        divNm.appendChild(anchor)
        divr.appendChild(price)
        price.appendChild(pn)
        price.appendChild(po)
        divimg.appendChild(c1)

        document.getElementById("spo").appendChild(divCol);



    });