function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(email){
  return emails.map(function(userEmail){
    return new IcebreakerResponse(userEmail[0])
  })
}

const email = ["avi@flatironschool.com"],
              ["grace@hopper.com"],
              ["alan@xparc.com"]
