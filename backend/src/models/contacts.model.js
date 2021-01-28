require('mongoose-type-email');

module.exports = function (app) {
  const modelName = 'contacts';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    name : {
      first: {
        type: String,
        required: [true, 'First Name is required!']
      },
      last: {
        type: String,
        required: false
      }
    },
    email : {
      type: mongooseClient.SchemaTypes.Email,
      required: [true, 'Email is required!']
    },
    phone : {
      type: String,
        // message: '{VALUE} is not a valid International OR Domestic (United States) phone number!',
        message: '{VALUE} is not a valid international phone number!',
        required: [true, 'Phone number is required!'],
        validate: {
          validator: function(v) {
            return /^\+(?:[0-9] ?){6,14}[0-9]$/.test(v);
          },
      }
    }
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }

  return mongooseClient.model(modelName, schema);
};
