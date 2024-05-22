import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';
// import { FcLike } from 'react-icons/fc';

const Card = (props) => {
    // let course = props.course;
    // let setLikedCourses = props.setLikedCourses;
    // let likedCourses = props.likedCourses;
    let { course, setLikedCourses, likedCourses = [] } = props;
    function clickHandler(){
        if(likedCourses.includes(props.course.id)){
            setLikedCourses((prev) => prev.filter((cid)=>(cid!==props.course.id)) );
            toast.warning("Liked removed");
        }
        else{
            if(likedCourses.length===0){
                setLikedCourses([props.course.id]);
            }
            else{
                setLikedCourses((prev) =>[...prev,course.id]);
            }
            toast.success("liked successfully");    
        }
    }

    return (
        <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden' >
            <div className='relative ' >    
                <img src= {course.image.url} alt="Course"></img>  
                <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center' >
                    <button onClick={clickHandler}>
                    {
                        !likedCourses.includes(props.course.id) ? <FcLikePlaceholder fontSize="1.75rem" /> : <FcLike fontSize="1.75rem" />
                    }
                    </button>
                </div>  
            </div>
            
            <div className='p-4'>
                <p className='text-white text-lg font-semibold leading-6' >{course.title}</p>
                <p className='mt-2 text-white' >
                    {props.course.description.length >100 ? (props.course.description.substring(0,100)+"...") : (props.course.description)}
                </p>
            </div>
        </div>
    )
}

export default Card