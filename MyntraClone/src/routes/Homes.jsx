import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
const Homes=()=>
    {
       const items= useSelector(store=>store.items);
     return (
          <main>
            <div className="items-container">
              {items.map((item)=><HomeItem key={item.id} item={item}/>)}

            </div>
        </main>
     );
    
    }
    export default Homes;