import { getDataCourses } from "./helpers/getData.js";
import { createCourse, getCourses, updateCourseLevel, getAverageRating, removeCourseInProgress } from "./helpers/scripts.js";

const urlCourses = import.meta.env.VITE_URL_COURSES;
const urlStudents = import.meta.env.VITE_URL_STUDENTS;

export const init = async() => {

    // EJERCICIO 1
//  const resultFunction1 = await getCourses("básico");
//  console.log(resultFunction1);


    // EJERCICIO 2
// const newCourse = {
//     "title": "Java",
//     "instructor": "Ana ",
//     "level": "avanzado",
//     "duration": 30,
//     "rating": 4.8,
//     "tags": ["programación", "java", "es6"],
//   }
//  const resultFunction2 = await createCourse(newCourse, urlCourses);
//  console.log(resultFunction2);


    // EJERCICIO 3
// const resultFunction3 = await updateCourseLevel(urlCourses);
// console.log(resultFunction3);

// const getId = async () =>{
//     const response = await getDataCourses(urlCourses);
//     return response.map(({id}) => id);
// }

// const ids = getId();

// const resultFunction4 = await getAverageRating(await ids);
//  console.log(resultFunction4);

const resultFunction5 = await removeCourseInProgress("1", 1);
 console.log(resultFunction5);
}

init();