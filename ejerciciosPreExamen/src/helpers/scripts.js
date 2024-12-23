import { getDataCourses, getDataStudents } from "./getData.js";

const urlCourses = import.meta.env.VITE_URL_COURSES;
const urlStudents = import.meta.env.VITE_URL_STUDENTS;

// -------------- EJERCICIOS -----------------------

export const getCourses = async (level) => {
  try {
    const responseData = await getDataCourses(urlCourses);

    const students = [];

    responseData.map((element) => {
      return element.level === level && students.push(element);
    });

    return students;
  } catch (error) {
    console.error("Error, ha caido en el catch:", error);
  }
};

export const createCourse = async (data, urlCourses) => {
  try {
    const constraint = [
      "title",
      "instructor",
      "level",
      "duration",
      "rating",
      "tags",
    ];

    if (!constraint.every((prop) => prop in data)) {
      throw new Error("Data inválido: faltan propiedades necesarias");
    }

    const responseData = await fetch(urlCourses, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!responseData.ok) {
      throw new Error("Data inválido: faltan propiedades necesarias");
    }

    console.log("Curso generado");
  } catch (error) {
    console.error("Error, ha caido en el catch:", error);
  }
};

export const updateCourseLevel = async (url) => {
  try {
    const getData = await getDataCourses(url);

    const resultados = await Promise.all(
      getData.map(async ({ id, duration, tags }) => {
        const newTags = [...tags, duration < 30 ? "express" : "extenso"];
        const response = await fetch(`${url}/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tags: newTags,
          }),
        });

        return response.json();
      })
    );
    return resultados;
  } catch (error) {
    console.error("Error, ha caido en el catch:", error);
  }
};

export const getAverageRating = async (ids) => {
  try {
    const courses = await getDataCourses(urlCourses);

    const filteredCourses = courses.filter(({ id }) => ids.includes(id));

    const totalRating = filteredCourses.reduce((acc, { rating }) => acc + rating, 0);

    const averageRating = filteredCourses.length ? totalRating / filteredCourses.length : 0;

    return averageRating;
  } catch (error) {
    console.error("Error al calcular el promedio de rating:", error);
  }
};

export const removeCourseInProgress = async (studentId, cId) => {
  try {
    const getStudents = await getDataStudents(urlStudents); 
    const student = getStudents.find(({ id }) => id === studentId);

    if (student) {
  

      console.log(cId)
      const updatedProgress = student.progress.filter(({courseId})=> {
         return courseId !== cId
         
      });
      console.log(updatedProgress)
     
      // await fetch(`${urlStudents}/${studentId}`, {
      //   method: 'PATCH',
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({ progress: updatedProgress })
      // });


    } else {
      console.error("Student not found.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

