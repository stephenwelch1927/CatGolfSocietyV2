
import Image from "next/image";

export default async function Home() {
  async function getCourses () {
    try{
    let response = await fetch('https://use.livegolfapi.com/v1/events?api_key=70031466771a43d2b66c98288ba31e52');
    let data = await response.json();
    console.log(data);
    return data;
    
    } catch (e: any) {
      return {}
    }
  }

  let courses = await getCourses();

  

  return (
      <div>
       
        <h1 className="text-3xl font-bold underline">Course</h1>

        {courses.map((course: any) => { 
          return(
            <div key={course.id}>
              <h1>{course.name}</h1>
              <h2>{course.start_datetime}</h2>
              console.log(courses);
              </div>
              
          );
        })}
      </div>
    ); 
  
}
