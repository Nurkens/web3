import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
  orderStatus: { 
    type: String, 
    enum: ['pending', 'confirmed', 'shipped', 'delivered', 'canceled'], 
    default: 'pending' 
  },
  timestamps: { 
    createdAt: { type: Date, default: Date.now }, 
    updatedAt: { type: Date, default: Date.now } 
  }
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
