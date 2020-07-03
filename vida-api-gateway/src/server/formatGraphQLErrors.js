import _ from "lodash";

const formatGraphQLErrors = error => {
  // const errorDetails = _.get(error, 'originalError.response.body');
  try {
    // if (errorDetails) return JSON.parse(errorDetails);
    if (error) return error;
  } catch (e) {
    console.log(e);
  }

  return null;
};

export default formatGraphQLErrors;
