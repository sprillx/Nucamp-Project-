export  const validateCommentForm = (  values ) => {
    const errors = { } ;
    
            if(!values.rating){
                errors.rating = 'required' ; 
            }

            if(values.author.length < 2 ){
                errors.author  = 'Must be atleast 2 characters'
            }else if(values.author.length > 15 ){
                errors.author = 'Must be 15 characters or less '
            }
    
    return errors ; 
}