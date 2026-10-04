import { useDispatch, useSelector } from "react-redux"
import { setActiveTab } from "../Redux/Features/searchSlice"

const Tabs = () => {

    const tabs = ['Photos']

    const dispatch = useDispatch()

    const activeTab = useSelector((state)=>state.search.activeTab)

  return (
    <div className="flex gap-10 p-10">
      {tabs.map(function(elem, idx){
        return <button onClick={()=>{
            dispatch(setActiveTab(elem))
        }} className={`${activeTab==elem? 'bg-blue-700': 'bg-emerald-600'} px-5 py-2 rounded cursor-pointer uppercase`} key={idx}>{elem}</button>

      })}
    </div>
  )
}

export default Tabs
