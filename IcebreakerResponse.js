function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(email){
  return emails.map(function(email){
    //* new array based on this function
    return new IcebreakerResponse(email)
  })
}

const email = ["avi@flatironschool.com"],
              ["grace@hopper.com"],
              ["alan@xparc.com"]
