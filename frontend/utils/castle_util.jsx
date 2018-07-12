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

export const searchCastles = (searchQuery) => {
  return $.ajax({
    method: 'GET',
    url: 'api/castles',
    data: { search:{search_words:searchQuery}} 
    // put search query under keyword {search: {search_words:}} 
    // need require(:search) permit(:search_words) in controller. otherwise searchQuery value will not be allowed to udpate
    
};

