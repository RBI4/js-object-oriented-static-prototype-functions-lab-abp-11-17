function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  return emails.map(function(userEmails){
    return new IcebreakerResponse(userEmails[0],)
  })
}

const emails = ["avi@flatironschool.com", "grace@hopper.com", "alan@xparc.com"
