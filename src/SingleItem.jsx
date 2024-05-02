import { useMutation,useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";
import { toast } from "react-toastify";

const SingleItem = ({ item }) => {
  const querClient=useQueryClient()
  const {mutate:deleteTask,isLoading}=useMutation({
    mutationFn:(id)=>customFetch.delete(`/${id}`),
    onSuccess:()=>{
      querClient.invalidateQueries({queryKey:["tasks"]})
      toast.success("deleted")
      
      }
  })
  // console.log(result);

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={() => updateTask(id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
