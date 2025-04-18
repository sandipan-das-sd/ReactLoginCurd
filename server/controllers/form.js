import FormModel from "../models/form.js";

// Add staff
export const addStaffDetails = async (req, res) => {
    try {
        const { staffName, staffRole, staffDesignation, staffDepartment, joiningDate, other } = req.body;

        if (!staffName || !staffRole || !staffDesignation || !staffDepartment || !joiningDate || !other) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        const form = await FormModel.create({
            staffName,
            staffRole,
            staffDesignation,
            staffDepartment,
            joiningDate,
            other
        });

        res.status(200).json({
            message: "Staff details added successfully",
            data: form
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// Get staff
export const getStaffDetails = async (req, res) => {
    try {
        const form = await FormModel.find();
        res.status(200).json({
            message: "Staff details fetched successfully",
            data: form
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// Edit staff
export const editStaffDetails = async (req, res) => {
    try {
        const { staffName, staffRole, staffDesignation, staffDepartment, joiningDate, other } = req.body;
        const { id } = req.params;

        if (!staffName || !staffRole || !staffDesignation || !staffDepartment || !joiningDate || !other) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        const form = await FormModel.findByIdAndUpdate(id, {
            staffName,
            staffRole,
            staffDesignation,
            staffDepartment,
            joiningDate,
            other
        }, { new: true });

        res.status(200).json({
            message: "Staff details updated successfully",
            data: form
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


//View specific staff detaitkls

export const getStaffprofile = async (req, res) => {

    
    try {
        const {id}=req.params;
        const form =await FormModel.findById({id});
        if (!form) {
            return res.status(404).json({ message: "Staff not found" });
        }
        res.status(200).json({
            message: "Your  details fetched successfully",
            data: form
        });
    } catch (error) {
        
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}
// Delete staff
export const deleteStaffDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const form = await FormModel.findByIdAndDelete(id);
        res.status(200).json({
            message: "Staff details deleted successfully",
            data: form
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


export const requestEdit = async (req, res) => {
  const { id } = req.params;
  const { staffName, staffRole, staffDesignation, staffDepartment, joiningDate, other } = req.body;
  if (!staffName || !staffRole || !staffDesignation || !staffDepartment || !joiningDate || !other) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  try {
    
    const form=await FormModel.findById(id);
    if (!form) {
      return res.status(404).json({ message: "Staff not found" });
    }
    // Check if the form already has a pending edit request
    if (form.pendingEdit) {
      return res.status(400).json({ message: "There is already a pending edit request" });
    }
    // Store the requested changes in the pendingEdit field
    form.pendingEdit = {
      staffName,
      staffRole,
      staffDesignation,
      staffDepartment,
      joiningDate,
      other
    };
    await form.save();
    res.status(200).json({
      message: "Edit request submitted successfully",
      data: form
    });
  } catch (error) {
    
  }
};

export const approveEdit = async (req, res) => {
    const { id } = req.params;
    const form = await FormModel.findById(id);
  
    if (!form.pendingEdit) {
      return res.status(400).json({ message: "No edit request found!" });
    }
  
    // Apply the changes
    Object.assign(form, form.pendingEdit);
    form.pendingEdit = null;
    await form.save();
  
    res.json({
      message: "Edit request approved and applied!",
      data: form
    });
  };
  

  export const rejectEdit = async (req, res) => {
    const { id } = req.params;
    const form = await FormModel.findById(id);
  
    if (!form.pendingEdit) {
      return res.status(400).json({ message: "No edit request to reject." });
    }
  
    form.pendingEdit = null;
    await form.save();
  
    res.json({ message: "Edit request rejected." });
  };
  