function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(data){
  return data.map(function(userData){
    return new IcebreakerResponse(userData[0],)
  })
}

const data = [
  ["Avi", "avi@flatironschool.com"],
  ["Grace", "grace@hopper.com"],
  ["Alan", "alan@xparc.com"]
]
