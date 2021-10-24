import React, {useEffect,useState} from "react";

const Shop = () => {

    useEffect(() => {
        fetchItems();
    },[]);


    const [items,setItems] = useState([]);

    const fetchItems = async () => {
        const myData = await fetch(
            'https://fortnite-api.theapinetwork.com/upcoming/get'
        );

        const items = await myData.json();
    console.log(items);
    console.log(items.data);

    setItems(items.data);

    }
    return(
        <div>
          {items.map(item => (
             <h1 key={item.itemId}>{item.name}</h1>  
              ))}
        
            <h1>Shop Page</h1>
        </div>
    );
}
export default Shop;
