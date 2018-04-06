export const fetchCastles = featuredCastles => {
  return $.ajax({
    method: "GET",
    url: "/api/castles",
    data: {featuredCastles},
  });
};

export const fetchCastle = id => {
  return $.ajax({
    method: "GET",
    url: `/api/castles/${id}`,
  });
};
