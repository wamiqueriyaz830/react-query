import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './utils';
const Items = () => {

  const {isLoading,data}=useQuery({
    queryKey:["tasks"],
    queryFn:()=>customFetch.get("/")

  })
  // console.log(result.data.data)
  // console.log(result.isLoading)
  if(isLoading) return <h4>Loading...</h4>
  return (
    <div className='items'>
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
