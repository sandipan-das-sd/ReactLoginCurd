import moongose from 'mongoose';
const formSchema=new moongose.Schema({
    staffName:{
        type:"String",
        required:true
    },
    staffRole:{
        type:"String",
        required:true
    },
    staffDesignation:{
        type:"String",
        required:true
    },
    staffDepartment:{
          type:"String",
        required:true
    },
    joingDate:{
        type:"String",
        required:true
    },
    other:{
        type:"String",
        required:true
    },
    pendingEdit: {
        type: Object, // Stores the requested changes
        default: null
      }

},{
    timestamps:true
}

)

 const FormModel=moongose.model('form',formSchema)
 export default FormModel