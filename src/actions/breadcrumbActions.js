export const addBreadCrumb = (path, displayName) => {
  console.log("adding to breadcrumbs: ", [path, displayName]);
  let crumb = [path, displayName];
  return {
    type: "ADD_BREADCRUMB",
    payload: crumb
  };
};

export const rollBackCrumb = destination => {
  console.log("rolling back breadcrumb");
  return {
    type: "ROLLBACK_CRUMB",
    payload: destination
  };
};

export const removeOneCrumb = () => {
  console.log("removing one breadcrumb");
  return {
    type: "REMOVE_CRUMB",
    payload: 'one crumb'
  };
};

export const assignCrumbs = trail => {
  // console.log("assigning breadcrumb trail");
  return {
    type: "ASSIGN_CRUMBS",
    payload: trail
  };
};
