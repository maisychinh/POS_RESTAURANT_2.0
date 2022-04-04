import { useParams } from "react-router-dom"

const FoodCategoriesDetail:React.FC = (props)=>{
    const params:{categoryId:string}= useParams()
    const {categoryId} = params
    return <div>
        {categoryId}
    </div>
}

export default FoodCategoriesDetail