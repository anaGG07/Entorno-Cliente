
// --------- FUNCIÓNES PARA OBTENER LA DATA  -------------
 

/**
 * @description: Obtiene la data de la url general
 * @param {Array<Object>} urlCourses  
 * @returns {Promise}
 */
export const getDataCourses = async (urlCourses) => {
    const response = await fetch(urlCourses);
  
    if (!response.ok) {
      throw new Error("Error al recuperar los datos");
    }
  
    const dataJson = await response.json();
  
    return dataJson;
};



/**
 * @description: Obtiene la data de la url general
 * @param {Array<Object>} urlStudents
 * @returns {Promise}
 */
export const getDataStudents = async (urlStudents) => {
    const response = await fetch(urlStudents);
  
    if (!response.ok) {
      throw new Error("Error al recuperar los datos");
    }
  
    const dataJson = await response.json();
  
    return dataJson;
};