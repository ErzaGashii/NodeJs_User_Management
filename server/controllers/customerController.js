

exports.homepage = async (req,res) =>{
 
    const locals ={
        title: 'NodeJs',
        description: 'Free NodeJs User Management System'
    }
    res.render('index', locals);
}

//Get New Customer 
exports.addCustomer = async (req,res) =>{
 
    const locals ={
        title: 'Add New Customer',
        description: 'NodeJs User Management System'
    }
    res.render('customer/add', locals);
}
