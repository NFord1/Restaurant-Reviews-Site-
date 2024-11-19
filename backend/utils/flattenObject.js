// Function to flatten a nested object
const flattenObject = (object) => {
  let result = {};

  // Iterate over each key in the object
  for (const i in object) {
    // Check if the value is an object and not an array
    if (typeof object[i] === "object" && !Array.isArray(object[i])) {
      // Recursively flatten the nested object
      const temp = flattenObject(object[i]);
      // Merge the flattened object into the result
      for (const j in temp) {
        // If the key already exists in the result, set it to "restaurantId"
        if (j in result) {
          result["restaurantId"] = temp[j];
        } else {
          result[j] = temp[j];
        }
      }
    } else {
      // If the value is not an object, add it to the result
      result[i] = object[i];
    }
  }
  return result;
};

// Export the flattenObject function
module.exports = flattenObject;
