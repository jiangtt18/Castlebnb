export const fetchCastles = filters => {
  return $.ajax({
    method: "GET",
    url: "/api/castles",
    data: {filters},
  });
};

export const fetchCastle = id => {
  return $.ajax({
    method: "GET",
    url: `/api/castles/${id}`,
  });
};
