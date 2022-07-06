import dbConnect from '../../../utils/dbConnect';
import Product from '../../../models/Product';


dbConnect();

export default async(req, res) => {
    const {method} = req;

    switch(method){
        case 'GET':
            try{
                const products = await Product.find({ description: 'Store A'}).exec();
                res.status(200).json({success: true, data: products});
            }catch(error){
                res.status(400).json({success: false});
            }
            break;
        default:
            res.status(400).json({success: false});
            break;
    }

}